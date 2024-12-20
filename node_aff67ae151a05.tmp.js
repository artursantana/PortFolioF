

<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title> &lt;/&gt; Artur Pereira</title>
  <link rel="stylesheet" href="/css/main.css">
  <script src="/scripts/Main.js" defer></script>
</head>
<body>











  <header>
    <nav>
      <div class="logo">
        <h1>&lt;AP/&gt;</h1>
      </div>
      <ul id="menu">
        <a href="#first">
            <li id="inicio">Início</li>
        </a>
        <a href="#second">
            <li id="sobre">Sobre</li>
        </a>
        <a href="#thirt">
            <li id="projetos">Projetos</li>
        </a>
        <a href="#for">
            <li id="experiencia">Experiência</li>
        </a>
        <a href="#five">
            <li id="contato">Contato</li>
        </a>
      </ul>
      <div class="toggle-switch">
        <img src="/assets/imgs/brl.png" alt="brl" width="20">
        <input type="checkbox" id="language-toggle">
        <label for="language-toggle"></label>
        <img src="/assets/imgs/eua.png" alt="eua" width="20">
      </div>
    </nav>
  </header>




  <section id="first" class="intro">
        <h1 id="bigMainName" class="bigMainName"></h1>
    <p id="descricao">
      Um desenvolvedor web ajudando empresas a darem vida às suas ideias com tecnologia, expertise e um pouco de café. <br> Confira meus
      <a href="#thirt" class="link">projetos paralelos</a> abaixo.
    </p>
  </section>



  <div id="second" class="terminal">
    <p>> <span class="variable">Artur.currículo</span> <span class="value"> <a href="/assets/pdfs/Artur Santana.pdf" target="_blank">"CV-Artur-Pereira.pdf"</a></span></p>

    <p>> <span class="variable">Artur.educação</span> <span class="value">"Desenvolvimento Web - Tokio School"</span></p>

    <p>> <span class="variable">Artur.experiência</span> <span class="value"><a href="https://task4it.pt/" target="_blank">"Task4iT"</a>, <a href="https://criterios.pt/" target="_blank">"Critérios"</a></span></p>

    <p>> <span class="variable">Artur.localizacao</span> <span class="value">"Porto, PT - Portugal"</span></p>

    <p>> <span class="variable">Artur.interesses</span> <span class="value">"Programação web", "Linguas", "Games", "Marvel"</span></p>

    <p>> <span class="variable">Artur.contato </span> 
        <span class="value">
            <a href="mailto:artursantana843@gmail.com">artursantana843@gmail.com</a>, 
            <a href="https://www.linkedin.com/in/artur-santana-8a9902238" target="_blank"> <img src="/assets/imgs/circle-linkedin-512.webp" alt="" width="20">Linkedin</a>, 
            <a href="https://github.com/artursantana" target="_blank"> <img src="/assets/imgs/git.png" alt="" width="20">gitHub</a>, 
            <a href="https://www.instagram.com/artur.santana.843/profilecard/?igsh=MWJubnZoMmc1M3BkYQ==" target="_blank"> <img src="/assets/imgs/insta.png" alt="" width="20">Instagram</a>
        </span>
    </p>
    

    <p>> <span class="variable">Artur.stacks</span> <span class="value">"PHP", "JavaScript", "Typescript" "HTML", "CSS", "React.js", "Wordpress", "Elementor Pro", "Next.js", "Node.js", "MYsql", "Style-Components", "Emotion.js", "Tailwind", "Bootstrap", "GitHub", "Bitbucket"</span></p>
</div>





<section id="thirt" class="project">
    <h2>&lt;projetos /&gt;</h2>
    <div class="project-content">
        <div class="project-image">
            <a href="https://crypto-place-omega.vercel.app/" target="_blank"><img src="/assets/imgs/cryptoPage.png" alt="iFlow+ Screenshot"></a>
        </div>
        <div class="project-info">
            <h3>Crypto Page</h3>
            <p>Permite você procurar cryptos e  ver gráficos delas com dados <br> do CoinMarketCap</p>
            <div class="tags">
                <span>Next.js</span>
                <span>Typescript</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>API</span>
            </div>
            <div class="buttons">
                <a href="https://github.com/artursantana/CryptoPlace" target="_blank" class="code-btn">GitHub <img src="/assets/imgs/git.png" alt="" width="15"></a>
                <a href="https://crypto-place-omega.vercel.app/" target="_blank" class="demo-btn">Demo <img src="/assets/imgs/link.png" alt="" width="15"></a>
            </div>
        </div>
    </div>
</section>









<section id="for" class="experience">
    <h2>&lt;experiencias /&gt;</h2>
    <div class="experience-container">
        <!-- Left side buttons -->
        <div class="companies">
            <button id="task-btn" onclick="showCompany('task')">Task4iT</button>
            <button id="wakke-btn" onclick="showCompany('wakke')">Critérios</button>
        </div>
        
        <!-- Right side content that changes -->
        <div id="company-info">
            <!-- Default company shown will be Sinck -->
            <div id="task" class="company">
                <h3>Front End Developer<span class="date">jun 2024 - Atual</span></h3>
                <p>@ <a href="https://task4it.pt/" target="_blank">Task4iT</a></p>
                <p>A Task4IT desenvolve temas corporativos a partir do zero, oferecendo flexibilidade e escalabilidade, com personalizações específicas para cada cliente.</p>

                <p>  Na Task4IT, desenvolvi e refinei minhas habilidades em Desenvolvimento Web, utilizando uma combinação de tecnologias.
                </p>
                <p class="colorspan">Minha experiência inclui : </p>
                <ul>
                        <li>
                            <span>HTML/CSS:</span> Criação de layouts responsivos e acessíveis, aplicando as melhores práticas de semântica e design. Utilizei SASS para facilitar a manutenção e escalabilidade dos estilos.
                        </li>
                        <br>
                        <li><span>JavaScript:</span> Implementação de funcionalidades dinâmicas em projetos, utilizando bibliotecas como Alpine.js para melhorar a interatividade e a experiência do usuário.</li>
                        <br>
                        <li>
                            <span>WordPress:</span> Desenvolvimento de temas personalizados desde o zero, integrando soluções robustas e flexíveis. Trabalhei com ACF Pro e Gutenberg para oferecer experiências únicas e adaptadas às necessidades dos clientes.
                        </li>
                        <br>
                        <li><span>React:</span> Utilização do React para criar interfaces de usuário dinâmicas e eficientes, aproveitando suas capacidades de gerenciamento de estado e reatividade.</li>
                        <br>
                        <li>Essas habilidades me permitiram contribuir para a criação de projetos de alta qualidade e atender às necessidades específicas de cada cliente, sempre buscando a melhor solução técnica.</li>
                    
                    
                </ul>
            </div>
            
            <!-- Hidden by default -->
            <div id="wakke" class="company" style="display:none;">
                <h3>Estágio<span class="date">Nov 2023 - Jun 2024</span></h3>
                <p>@ <a href="https://criterios.pt/" target="_blank">Critérios - Clínica Empresarial</a></p>
                <p>Atua de forma precisa nos pontos-chave da sua organização, apoiando o desenvolvimento da sua estratégia de produção e produtividade com competência e sigilo.</p>
                <p class="colorspan">Minha experiência inclui : </p>
                <ul>
                    <li>Durante meu estágio em Front-End, desenvolvi habilidades em HTML, CSS e JavaScript, contribuindo para a criação de interfaces responsivas e dinâmicas. Além disso, colaborei com a equipe de desenvolvimento para integrar as partes front-end com back-end, adquirindo uma compreensão sólida do ciclo de vida de desenvolvimento de aplicações web e a importância da colaboração entre as camadas.</li>
                </ul>
            </div>
        </div>
    </div>
</section>













</body>
</html>
