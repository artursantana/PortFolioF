
const menuItems = {
    pt: {
      inicio: "Início",
      sobre: "Sobre",
      projetos: "Projetos",
      experiencia: "Experiência",
      contato: "Currículo"
    },
    en: {
      inicio: "Home",
      sobre: "About",
      projetos: "Projects",
      experiencia: "Experience",
      contato: "Curriculum"
    }
  };
  
  const textos = {
    pt: {
      nome: "> Artur Pereira.",
      descricao: " Desenvolvedor Web com foco em criar interfaces modernas e funcionais. Gosto de transformar ideias em experiências digitais intuitivas. Confira meus",
      projetos: "Projetos"
    },
    en: {
      nome: "> Artur Pereira.",
      descricao: "Web developer focused on creating modern and functional interfaces. I like to transform ideas into intuitive digital experiences. Check out my",
      projetos: "Projects"
    }
  };

  const titleTextos = {
    pt: {
      titlePro: "&lt;Projetos /&gt;",
      titleExp: "&lt;Experiência /&gt;"
    },
    en: {
      titlePro: "&lt;Projects /&gt;",
      titleExp: "&lt;Experience /&gt;"
    }
  };
  
const terminalTexts = {
    pt: {
      
      educacao: '><span class="variable"> Artur.educação</span> <span class="value">"Desenvolvimento Web - Tokio School"</span>',

      experiencia: '><span class="variable"> Artur.experiência</span> <span class="value"> <a href="https://task4it.pt/" target="_blank">"Task4iT"</a>, <a href="https://criterios.pt/" target="_blank">"Critérios"</a></span>',

      localizacao: '><span class="variable"> Artur.localização</span> <span class="value">"Porto, PT - Portugal"</span>',

      interesses: '><span class="variable"> Artur.interesses</span> <span class="value">"Programação web", "Linguas", "Games", "Marvel"</span>',
      
      stacks: '><span class="variable" > Artur.tecnologias</span> <span class="value">"PHP", "JavaScript", "Typescript" "HTML", "CSS", "React.js", "Wordpress", "Elementor Pro", "Next.js", "Node.js", "MYsql", "Style-Components", "Emotion.js", "Tailwind", "Bootstrap", "GitHub", "Bitbucket"</span>'
    },

    en: {
      
      educacao: '><span class="variable"> Artur.education</span> <span class="value">"Web Development - Tokio School"</span>',

      experiencia: '><span class="variable"> Artur.experience</span> <span class="value"> <a href="https://task4it.pt/" target="_blank">"Task4iT"</a>, <a href="https://criterios.pt/" target="_blank">"Critérios"</a></span>',

      localizacao: '><span class="variable"> Artur.location</span> <span class="value">"Porto, PT - Portugal"</span>',

      interesses: '><span class="variable"> Artur.interests</span> <span class="value">"Web programming", "Languages", "Games", "Marvel"</span>',

      stacks: '><span class="variable"> Artur.stacks</span> <span class="value">"PHP", "JavaScript", "Typescript" "HTML", "CSS", "React.js", "Wordpress", "Elementor Pro", "Next.js", "Node.js", "MYsql", "Style-Components", "Emotion.js", "Tailwind", "Bootstrap", "GitHub", "Bitbucket"</span>'
    }
  };
  

const experienciaTexts = {
    pt: {
      task: {
        title: "Front End Developer",
        date: "jun 2024 - Atual",
        company: '@ <a href="https://task4it.pt/" target="_blank">Task4iT</a>',
        description: "A Task4IT desenvolve temas corporativos a partir do zero, oferecendo flexibilidade e escalabilidade, com personalizações específicas para cada cliente.",
        experience: "Na Task4IT, desenvolvi e refinei minhas habilidades em Desenvolvimento Web, utilizando uma combinação de tecnologias.",
        skillsTitle: "<p class='colorspan'>Minha experiência inclui :</p>",
        skills: [
          "<span>HTML/CSS:</span> Criação de layouts responsivos e acessíveis, aplicando as melhores práticas de semântica e design. Utilizei SASS para facilitar a manutenção e escalabilidade dos estilos.",
            "<br/>",
          "<span>JavaScript:</span> Implementação de funcionalidades dinâmicas em projetos, utilizando bibliotecas como Alpine.js para melhorar a interatividade e a experiência do usuário.",
"<br/>",
          "<span>WordPress:</span> Desenvolvimento de temas personalizados desde o zero, integrando soluções robustas e flexíveis. Trabalhei com ACF Pro e Gutenberg para oferecer experiências únicas e adaptadas às necessidades dos clientes.",
"<br/>",
          "<span>React:</span> Utilização do React para criar interfaces de usuário dinâmicas e eficientes, aproveitando suas capacidades de gerenciamento de estado e reatividade.",
          "<br/>",
          "Essas habilidades me permitiram contribuir para a criação de projetos de alta qualidade e atender às necessidades específicas de cada cliente, sempre buscando a melhor solução técnica."
        ]
      },
      wakke: {
        title: "Estágio",
        date: "Nov 2023 - Jun 2024",
        company: '@ <a href="https://criterios.pt/" target="_blank">Critérios - Clínica Empresarial</a>',
        description: "Atua de forma precisa nos pontos-chave da sua organização, apoiando o desenvolvimento da sua estratégia de produção e produtividade com competência e sigilo.",
        skillsTitle: "<p class='colorspan'>Minha experiência inclui :</p>",
        skills: [
          "Durante meu estágio em Front-End, desenvolvi habilidades em HTML, CSS e JavaScript, contribuindo para a criação de interfaces responsivas e dinâmicas. Além disso, colaborei com a equipe de desenvolvimento para integrar as partes front-end com back-end, adquirindo uma compreensão sólida do ciclo de vida de desenvolvimento de aplicações web e a importância da colaboração entre as camadas."
        ]
      }
    },
    en: {
      task: {
        title: "Front End Developer",
        date: "jun 2024 - Present",
        company: '@ <a href="https://task4it.pt/" target="_blank">Task4iT</a>',
        description: "Task4IT develops corporate themes from scratch, offering flexibility and scalability, with specific customizations for each client.",
        experience: "At Task4IT, I developed and refined my skills in Web Development using a combination of technologies.",
        skillsTitle: "<p class='colorspan'>My experience includes:</p>",
        skills: [
          "<span>HTML/CSS:</span> Creation of responsive and accessible layouts, applying best practices for semantics and design. I used SASS to facilitate the maintenance and scalability of styles.",
          "<br/>",
          "<span>JavaScript:</span> Implementation of dynamic functionalities in projects, using libraries like Alpine.js to enhance interactivity and user experience.",
          "<br/>",
          "<span>WordPress:</span> Development of custom themes from scratch, integrating robust and flexible solutions. I worked with ACF Pro and Gutenberg to offer unique experiences tailored to clients' needs.",
          "<br/>",
          "<span>React:</span> Using React to create dynamic and efficient user interfaces, leveraging its state management and reactivity capabilities.",
          "<br/>",
          "These skills have allowed me to contribute to the creation of high-quality projects and meet the specific needs of each client, always seeking the best technical solution."
        ]
      },
      wakke: {
        title: "Internship",
        date: "Nov 2023 - Jun 2024",
        company: '@ <a href="https://criterios.pt/" target="_blank">Critérios - Business Clinic</a>',
        description: "Acts precisely on the key points of your organization, supporting the development of your production and productivity strategy with competence and confidentiality.",
        skillsTitle: "<p class='colorspan'>My experience includes:</p>",
        skills: [
          "During my Front-End internship, I developed skills in HTML, CSS, and JavaScript, contributing to the creation of responsive and dynamic interfaces. Additionally, I collaborated with the development team to integrate front-end with back-end, gaining a solid understanding of the web application development lifecycle and the importance of collaboration between layers."
        ]
      }
    }
  };
  
  
  

  
  // Seleção dos elementos HTML dos itens do menu
  const toggle = document.getElementById('language-toggle');
  const inicio = document.getElementById('inicio');
  const sobre = document.getElementById('sobre');
  const projetos = document.getElementById('projetos');
  const experiencia = document.getElementById('experiencia');
  const contato = document.getElementById('contato');
  
  // Seleção dos elementos HTML do conteúdo principal
  const nomeElement = document.getElementById("bigMainName");
  const descricaoElement = document.getElementById("descricao");
  
  let currentLang = 'pt'; // Define o idioma padrão como português
  let i = 0; // Variável usada no efeito de digitação
  let nome = textos.pt.nome; // Definindo o nome a ser digitado no início
  
  // Função para simular o efeito de digitação do nome
  function typeWriter() {
    if (i < nome.length) {
      nomeElement.textContent += nome.charAt(i);
      i++;
      setTimeout(typeWriter, 150); // Define a velocidade de digitação (150ms por caractere)
    }
  }
  
  // Função para atualizar os textos da página (nome, descrição, itens do menu)
  const enButton = document.getElementById('en-button');
const ptButton = document.getElementById('pt-button');

// Função para atualizar os textos da página (nome, descrição, itens do menu)
function updateText(language) {
  currentLang = language;

  // Atualiza o nome com o efeito de digitação
  nome = textos[language].nome;
  nomeElement.textContent = ''; // Limpa o texto do nome antes de iniciar o efeito
  i = 0; // Reinicia a contagem para o efeito de digitação
  typeWriter();

  // Atualiza a descrição com a nova tradução
  descricaoElement.innerHTML = textos[language].descricao + ' <a href="#thirt" class="link" id="projetos">' + textos[language].projetos + '</a> abaixo.';

  // Atualiza os itens do menu
  inicio.textContent = menuItems[language].inicio;
  sobre.textContent = menuItems[language].sobre;
  projetos.textContent = menuItems[language].projetos;
  experiencia.textContent = menuItems[language].experiencia;
  contato.textContent = menuItems[language].contato;

  const terminalDiv = document.querySelector('.terminal');
  terminalDiv.innerHTML = `
    <p>${terminalTexts[language].educacao}</p>
    <p>${terminalTexts[language].experiencia}</p>
    <p>${terminalTexts[language].localizacao}</p>
    <p>${terminalTexts[language].interesses}</p>
    <p>${terminalTexts[language].stacks}</p>
  `;


  const TitleChangeLanguagePro = document.querySelector('#language-projects');
  const TitleChangeLanguageExp = document.querySelector('#language-experience');
  
  // Atualiza o conteúdo dos elementos com base no idioma
  TitleChangeLanguagePro.innerHTML = titleTextos[language].titlePro;
  TitleChangeLanguageExp.innerHTML = titleTextos[language].titleExp;











  // Atualiza a seção de experiência
  const taskSection = experienciaTexts[language].task;
  const wakkeSection = experienciaTexts[language].wakke;

  // Atualiza a experiência da Task4iT
  const taskInfoDiv = document.getElementById('task');
  taskInfoDiv.innerHTML = `
    <h3>${taskSection.title}<span class="date">${taskSection.date}</span></h3>
    <p>${taskSection.company}</p>
    <p>${taskSection.description}</p>
    <p>${taskSection.experience}</p>
    <p>${taskSection.skillsTitle}</p>
    <ul>
      ${taskSection.skills.map(skill => `<li>${skill}</li>`).join('')}
    </ul>
  `;

  // Atualiza a experiência da Critérios
  const wakkeInfoDiv = document.getElementById('wakke');
  wakkeInfoDiv.innerHTML = `
    <h3>${wakkeSection.title}<span class="date">${wakkeSection.date}</span></h3>
    <p>${wakkeSection.company}</p>
    <p>${wakkeSection.description}</p>
    <p>${wakkeSection.skillsTitle}</p>
    <ul>
      ${wakkeSection.skills.map(skill => `<li>${skill}</li>`).join('')}
    </ul>
  `;
}

// Listener para os botões de idioma
enButton.addEventListener('click', () => {
  updateText('en'); // Muda para inglês ao clicar em "EN"
});

ptButton.addEventListener('click', () => {
  updateText('pt'); // Muda para português ao clicar em "PT"
});
  

  
























const themeToggle = document.getElementById('theme-toggle');

// Carregar tema do localStorage
if (localStorage.getItem('dark-mode') === 'true') {
  document.body.classList.add('dark-theme');
  themeToggle.checked = true;
}

// Alternar tema ao clicar no checkbox
themeToggle.addEventListener('change', function() {
  if (this.checked) {
    document.body.classList.add('dark-theme');
    localStorage.setItem('dark-mode', 'true'); // Salvar no localStorage
  } else {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('dark-mode', 'false'); // Salvar no localStorage
  }
});



























// script.js
document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const menu = document.getElementById("menu");
    const toggleSwitch = document.querySelector(".toggle-switch");
    const menuLinks = document.querySelectorAll("#menu a"); // Seleciona todos os links do menu
  
    // Função para mover o toggle-switch
    function moveToggleSwitch() {
      if (window.innerWidth < 725) {
        // Mover para dentro do menu
        if (!toggleSwitch.parentNode.isEqualNode(menu)) {
          menu.appendChild(toggleSwitch); // Adiciona o toggle ao menu
        }
      } else {
        // Mover para fora do menu
        const nav = hamburgerMenu.parentNode; // Pega o elemento pai do hamburgerMenu (nav)
        if (!toggleSwitch.parentNode.isEqualNode(nav)) {
          nav.appendChild(toggleSwitch); // Adiciona o toggle de volta ao nav
        }
      }
    }
  
    // Executar ao carregar a página
    moveToggleSwitch();
  
    // Executar ao redimensionar a janela
    window.addEventListener("resize", moveToggleSwitch);
  
    // Alternar o menu ao clicar no botão hamburguer
    hamburgerMenu.addEventListener("click", function() {
      menu.classList.toggle("active"); // Adiciona ou remove a classe active
    });
  
    // Recolher o menu ao clicar em qualquer item
    menuLinks.forEach(function(link) {
      link.addEventListener("click", function() {
        menu.classList.remove("active"); // Recolhe o menu removendo a classe active
      });
    });
});

  






























  function showCompany(company) {
    // Hide both companies
    document.getElementById('task').style.display = 'none';
    document.getElementById('wakke').style.display = 'none';

    // Remove active class from buttons
    document.getElementById('task-btn').classList.remove('active');
    document.getElementById('wakke-btn').classList.remove('active');

    // Show the selected company
    document.getElementById(company).style.display = 'block';
    
    // Add active class to selected button
    document.getElementById(company + '-btn').classList.add('active');
}

// Set task as default on page load
window.onload = function() {
    showCompany('task');
    typeWriter()
};



































































