const list = {
	skills: {
		front: [
			{
				ling: "HTML 5",
				texts: ["HTML5 é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet, originalmente proposto por Opera Software. É a quinta versão da linguagem HTML"],
				experience: "01/01/2021"
			},
			{
				ling: "CSS 3 (SASS)",
				texts: ["Cascading Style Sheets(CSS) é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML ou ficar contido dentro das tags <style>. Também é possível, adicionar estilos adicionando um link para um arquivo CSS que contém os estilos."],
				experience: "01/01/2021"
			},
			{
				ling: "JavaScript",
				texts: ["JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web."],
				experience: "01/01/2021"
			},
			{
				ling: "TypeScript",
				texts: ["TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem."],
				experience: "26/05/2021"
			},
			{
				ling: "Bootstrap 5",
				texts: ["Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web, usando HTML, CSS e JavaScript, baseado em modelos de design para a tipografia, melhorando a experiência do usuário em um site amigável e responsivo."],
				experience: "16/02/2021"
			},
			{
				ling: "React.js (Redux / Next.js)",
				texts: [
					"O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.",
					"Redux é uma biblioteca JavaScript de código aberto para gerenciar o estado do aplicativo. É mais comumente usado com bibliotecas como React ou Angular para criar interfaces de usuário. Semelhante pela arquitetura Flux do Facebook, foi criado por Dan Abramov e Andrew Clark.",
					"Next.js é uma estrutura da web de desenvolvimento front-end React de código aberto criada por Vercel que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos da web baseados em React."
				],
				experience: "20/03/2021"
			},
			{
				ling: "Angular",
				texts: ["Angular é uma plataforma de aplicações web de código-fonte aberto e front-end baseado em TypeScript liderado pela Equipe Angular do Google e por uma comunidade de indivíduos e corporações. Angular é uma reescrita completa do AngularJS, feito pela mesma equipe que o construiu."],
				experience: "07/01/2022"
			},
			{
				ling: "Wordpress",
				texts: ["WordPress é um sistema livre e aberto de gestão de conteúdo para internet, baseado em PHP com banco de dados MySQL, executado em um servidor interpretador, voltado principalmente para a criação de páginas eletrônicas e blogs online."],
				experience: "17/03/2020"
			},
			{
				ling: "Figma",
				texts: ["Figma é um editor gráfico de vetor e prototipagem de projetos de design baseado principalmente no navegador web, com ferramentas offline adicionais para aplicações desktop para GNU/Linux, macOS e Windows."],
				experience: "01/02/2021"
			},
			{
				ling: "Adobe XD",
				texts: ["Adobe XD é uma ferramenta de design de experiência do usuário baseada em vetores para aplicativos da web e aplicativos móveis, desenvolvida e publicada pela Adobe Inc."],
				experience: "01/02/2021"
			}

		],
		back: [
			{
				ling: "Node.js (Express)",
				texts: [
					"Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. A principal característica do Node.js é sua arquitetura assíncrona e orientada por eventos.",
					"O Express é um framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel."
				],
				experience: "20/02/2021"
			},
			{
				ling: "Java",
				texts: [
					"Java é uma linguagem de programação orientada a objetos desenvolvida na década de 90 por uma equipe de programadores chefiada por James Gosling, na empresa Sun Microsystems, que em 2008 foi adquirido pela empresa Oracle Corporation."
				],
				experience: "24/04/2022"
			},
			{
				ling: "TypeScript",
				texts: ["TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem."],
				experience: "26/05/2021"
			},
			{
				ling: "API (REST)",
				texts: [
					"API significa Application Programming Interface (Interface de Programação de Aplicação). São mecanismos que permitem que dois componentes de software se comuniquem usando um conjunto de definições e protocolos.",
					"Representational State Transfer, em português Transferência Representacional de Estado, é um estilo de arquitetura de software que define um conjunto de restrições a serem usadas para a criação de web services."
				],
				experience: "20/02/2021"
			},
			{
				ling: "MongoDB (mongoose)",
				texts: [
					"MongoDB é um software de banco de dados orientado a documentos livre, de código aberto e multiplataforma, escrito na linguagem C++. Classificado como um programa de banco de dados NoSQL, o MongoDB usa documentos semelhantes a JSON com esquemas.",
					"Mongoose é uma biblioteca de programação orientada a objetos JavaScript que cria uma conexão entre o MongoDB e o ambiente de tempo de execução JavaScript Node.js."
				],
				experience: "20/04/2021"
			},
			{
				ling: "Mysql (Msql2)",
				texts: [
					"O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. É atualmente um dos sistemas de gerenciamento de bancos de dados mais populares da Oracle Corporation, com mais de 10 milhões de instalações pelo mundo.",
					"Mysql2 é uma versão melhorada do Mysql, ele tem um foco maior na orientação a objetos, é mais performático, tem alguns métodos que podem facilitar alguns tipos de manipulações no banco de dados, porém, ele não é tão usado quando o Mysql."
				],
				experience: "20/02/2021"
			},
			{
				ling: "Puppeteer (Web Crawler / Scraper)",
				texts: [
					"Puppeteer é uma biblioteca Node que fornece uma API de alto nível para controlar o Chrome ou o Chromium, possibilitando a automação de tarefas.",
					"Web Crawling é o ato de baixar automaticamente os dados de uma página web, extrair os hiperlinks contidos nela e segui-los. Os dados baixados são geralmente armazenados em um índice ou banco de dados para facilitar sua busca. Web crawling, também conhecido como Indexação, é usado para indexar as informações em uma página web usando bots, também chamados de crawlers. Web Crawlers são basicamente utilizados pelos principais motores de busca como o Google, Bing e Yahoo.",
					"Assim com o Web Crawling, o Web Scraping é o ato de baixar automaticamente os dados de uma página web e extrair informações. Ao contrário do anterior, ele captura informações mais específicas."
				],
				experience: "20/02/2021"
			},
			{
				ling: "Cloud (AWS, GCP e Heroku)",
				texts: [
					"Cloud computing, ou computação na nuvem, é uma tecnologia que permite acesso remoto a softwares, armazenamento de arquivos e processamento de dados por meio da internet. É uma alternativa para acessar dados importantes de qualquer computador, em qualquer lugar.",
					"Amazon Web Services, também conhecido como AWS, é uma plataforma de serviços de computação em nuvem, que formam uma plataforma de computação na nuvem oferecida pela Amazon.com. Os serviços são oferecidos em várias áreas geográficas distribuídas pelo mundo.",
					"Google Cloud Platform (GCP) é uma suíte de computação em nuvem oferecida pelo Google, funcionando na mesma infraestrutura que a empresa usa para seus produtos dirigidos aos usuários, dentre eles o Buscador Google e o Youtube.",
					"Heroku é uma plataforma de nuvem como serviço que suporta várias linguagens de programação. Uma das primeiras plataformas em nuvem, o Heroku está em desenvolvimento desde junho de 2007, quando suportava apenas a linguagem de programação Ruby, mas agora suporta Java, Node.js, Scala, Clojure, Python, PHP e Go."
				],
				experience: "16/03/2021"
			},
			{
				ling: "Nginx",
				texts: ["Nginx é um servidor leve de HTTP, proxy reverso, proxy de e-mail IMAP/POP3, feito por Igor Sysoev em 2005, sob licença BSD-like 2-clause. O Nginx consome menos memória que o Apache, pois lida com requisições Web do tipo “event-based web server”; e o Apache é baseado no “process-based server”, podendo trabalhar juntos."],
				experience: "16/03/2021"
			},
			{
				ling: "Git e GitHub",
				texts: [
					"Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.",
					"GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. Ele permite que programadores, utilitários ou qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo."
				],
				experience: "01/01/2021"
			}
		],
		soft: [
			{
				ling: "Comunicação",
				texts: ["Excelente habilidade de comunicação verbal e escrita, com a capacidade de expressar ideias e informações de forma clara e concisa, além de ouvir atentamente e fornecer feedback construtivo."],
				experience: null
			},
			{
				ling: "Trabalho em equipe",
				texts: ["Habilidade comprovada em trabalhar de forma colaborativa e efetiva com colegas de equipe, liderando e contribuindo para projetos em equipe com entusiasmo e comprometimento."],
				experience: null
			},
			{
				ling: "Autonomia",
				texts: ["Capacidade de trabalhar de forma independente, definindo prioridades, tomando decisões e assumindo responsabilidades sem supervisão direta."],
				experience: null
			},
			{
				ling: "Pensamento crítico",
				texts: [" Capacidade de analisar informações e dados, identificar padrões e tendências, avaliar alternativas e tomar decisões informadas e fundamentadas."],
				experience: null
			},
			{
				ling: "Adaptabilidade",
				texts: ["Habilidade em se adaptar rapidamente a mudanças no ambiente de trabalho, ajustando planos e estratégias para alcançar objetivos de forma efetiva e eficiente. Além disso, capacidade de aprender novas habilidades e conhecimentos para se manter atualizado e relevante."],
				experience: null
			},
			{
				ling: "Gerenciamento de tempo",
				texts: ["Habilidade em gerenciar tarefas de forma eficiente, estabelecendo prioridades, definindo prazos realistas e utilizando técnicas comprovadas para maximizar a produtividade. Capacidade de trabalhar sob pressão e entregar projetos dentro do prazo estabelecido."],
				experience: null
			},

		]
	}
}

export default list;