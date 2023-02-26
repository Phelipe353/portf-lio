import listProjects from '../../listProjects.js';

const projectsEl = document.querySelector('.projetos ul');
export default function projects() {
    listProjects.reverse().forEach(project => {
        const li = document.createElement('li');
        const wrapper = document.createElement('div');
        wrapper.classList = 'wrapper';

        const containerImg = document.createElement('div');
        containerImg.classList = 'containerImg';
        const img = document.createElement('img');
        img.setAttribute('src', `./img/${project.img}.png`);
        img.setAttribute('alt', project.name);
        containerImg.appendChild(img);

        const divBacKground = document.createElement('div');
        divBacKground.classList = 'fade-down';
        wrapper.append(containerImg, divBacKground);

        const content = document.createElement('div');
        content.classList = 'content';
        const title = document.createElement('h3');
        title.innerHTML = project.name;


        const tools = document.createElement('p');
        tools.classList = 'tools';

        tools.innerHTML = '<span class="subTitlesDetails">Ferramentas utilizadas:</span> ';
        const groupSpanTools = document.createElement('div');
        groupSpanTools.classList = 'groupTools';
        project.tools.forEach((tool) => {
            const span = document.createElement('span');
            span.innerText = tool;
            groupSpanTools.appendChild(span);
        })
        tools.appendChild(groupSpanTools)

        const containerTools = document.createElement('div');
        const titleTools = document.createElement('h4');
        titleTools.classList = 'titleTools';
        containerTools.append(titleTools, tools);

        const description = document.createElement('p');
        description.innerHTML = `<span class="subTitlesDetails">Descrição:</span> ${project.text}`;

        const obs = document.createElement('p');
        if (project.obs) obs.innerHTML = `<span class="subTitlesDetails">Observação:</span> ${project.obs}`;


        const a = document.createElement('a');
        const button = document.createElement('button');
        button.innerText = project.link ? 'Acessar' : 'Em breve';
        a.appendChild(button);
        if (project.link) {
            a.setAttribute('href', project.link);
            a.setAttribute('target', '_blank')
        };

        const expand = document.createElement('button');
        expand.classList = 'expand';
        expand.innerText = 'Mais detalhes';

        const close = document.createElement('button');
        close.innerText = 'X';
        close.classList = 'closeDetails';

        content.append(title, containerTools, description, obs, a, expand);
        wrapper.append(content, close);
        li.appendChild(wrapper);
        projectsEl.appendChild(li);
    })
    handleMoreDetails();
}

function handleMoreDetails() {
    projectsEl.querySelectorAll('li').forEach(el => {
        el.querySelector('.expand').addEventListener('click', () => {
            handleBackgroundModal(true);
            el.querySelector('.wrapper').classList.add('details');
            handleOutSideClick(el);
            handleButtonCloseDetails(el);
        });
    })
}

function handleBackgroundModal(isActive) {
    const backgroundModal = document.querySelector('.backgroundModal');
    if (isActive) backgroundModal.classList.add('active');
    else backgroundModal.classList.remove('active');
}

function handleOutSideClick(el) {
    document.documentElement.addEventListener('click', (event) => {
        if (event.target.classList.contains('backgroundModal')) {
            handleBackgroundModal(false);
            el.querySelector('.wrapper').classList.remove('details');
        };

    })
}

function handleButtonCloseDetails(el) {
    el.querySelector('.closeDetails').addEventListener('click', () => {
        handleBackgroundModal(false);
        el.querySelector('.wrapper').classList.remove('details');
    })
}

