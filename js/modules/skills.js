import hardSkills from '../../hardSkills.js';
import TimeExperience from './TimeExperience.js';

const skills = document.querySelector('.skills');

export default function listSkills() {

    if (!skills) return;
    const keys = Object.keys(hardSkills.skills);

    keys.forEach((key) => {
        const content = skills.querySelector(`.${key} ul`);
        if (!content) return;
        hardSkills.skills[key].forEach((skill) => {
            const h4 = document.createElement('h4');
            h4.innerText = skill.ling;

            const divP = document.createElement('div');
            const experience = document.createElement('p');
            if (skill.experience) {
                //new TimeExperience(skill.experience, experience).start();
                divP.appendChild(experience);
            }
            skill.texts.forEach((text) => {
                const p = document.createElement('p');
                p.innerText = text;
                divP.appendChild(p);
            })
            const containerText = document.createElement('div');
            containerText.appendChild(divP);
            containerText.classList = 'containerText';
            const li = document.createElement('li');
            li.append(h4, containerText);
            content.appendChild(li);
        })

        handleTexts(content);
    })

}

function handleTexts(content) {
    const lis = content.querySelectorAll('li');
    lis.forEach((li) => {
        const ling = li.querySelector('h4');
        const div = li.querySelector('.containerText');
        ling.addEventListener("mouseover", () => showText(li))
        ling.addEventListener("mouseleave", () => hiddenText(li))
        div.addEventListener("mouseover", () => showText(li))
        div.addEventListener("mouseleave", () => hiddenText(li))

    })

}

function showText(li) {
    li.querySelector('h4').classList.add('active');
    li.querySelector('.containerText').classList.add('active');
}

function hiddenText(li) {
    li.querySelector('h4').classList.remove('active');
    li.querySelector('.containerText').classList.remove('active');

}


