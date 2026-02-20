# Portfólio – Vinícius Benevides

Landing page pessoal que apresenta meu trabalho como engenheiro de software full stack, com foco em sistemas distribuídos em Go e aplicações web em Next.js. O site está publicado no GitHub Pages e pode ser acessado em: **https://vinicius-benevides.github.io/Portifolio/**.

## Objetivo e proposta
- Destacar experiência em back-end com Go, mensageria (RabbitMQ), caching (Redis) e modelagem relacional.
- Expor projetos selecionados que evidenciam concorrência, event-driven e SSR focado em SEO.
- Disponibilizar currículo (PDF), contato rápido e links profissionais.
- Demonstrar identidade visual autoral com modo claro/escuro e microinterações.

## Stack e decisões técnicas
- **HTML5 + CSS3** com layout responsivo, tema claro/escuro e efeitos de vidro/flutuação.
- **Bootstrap 5.3** e **Bootstrap Icons** para grid, utilidades e ícones.
- **JavaScript vanilla** (`assets/app.js`) para:
  - Toggle de tema via atributo `data-theme`;
  - Controle da navbar mobile e botão “voltar ao topo”;
  - Animações de entrada usando `IntersectionObserver`;
  - Atualização automática do ano no rodapé.
- **Google Fonts** (Space Grotesk, Manrope) para tipografia.
- **Assets** organizados em `assets/images`, `assets/styles`, `assets/app.js`.
- Currículo disponível em `docs/CV.pdf`.

## Estrutura do repositório
- `index.html` – página principal do portfólio.
- `assets/styles/style.css` – tema, tipografia, componentes e animações.
- `assets/app.js` – interações, tema e observador de scroll/viewport.
- `assets/images/` – imagens utilizadas na interface (foto e covers dos projetos).
- `docs/CV.pdf` – currículo para download direto.

## Principais seções do site
- **Hero**: headline, CTA para projetos, download do CV e e-mail.
- **Sobre**: enfoque em microsserviços, concorrência em Go e SSR em Next.js.
- **Projetos**: quatro estudos/provas de conceito (GoCommerce, GoFlow, StreamMetrics, NextCommerce SSR) com links para GitHub.
- **Experiências**: linha do tempo de experiências recentes (Avanade, Termomecanica, IC, voluntariado).
- **Stack**: visão das ferramentas backend, mensageria, banco de dados, frontend e práticas de engenharia.
- **Idiomas** e **CTA final** com links para e-mail, LinkedIn e GitHub.

## Como executar localmente
1) Clone o repositório:
   ```bash
   git clone https://github.com/vinicius-benevides/Portifolio.git
   cd Portifolio
   ```
2) Sirva estaticamente (opcional, mas recomendado para testar rotas âncora e assets):
   ```bash
   # Python 3
   python -m http.server 8000
   # ou, com Node 18+
   npx http-server -p 8000
   ```
3) Acesse `http://localhost:8000` no navegador. Também é possível abrir `index.html` diretamente, mas um servidor local evita bloqueios de CORS em alguns navegadores.

## Deploy (GitHub Pages)
- Publicado diretamente da branch `main` via GitHub Pages (build estático).
- URL de produção: **https://vinicius-benevides.github.io/Portifolio/**
- Para atualizar o site, basta commitar as alterações em `main` e fazer push; o Pages publica automaticamente a nova versão.

## Contato
- E-mail: viniciusbenevidesdasilva16@gmail.com  
- LinkedIn: https://www.linkedin.com/in/vinicius-benevides/  
- GitHub: https://github.com/vinicius-benevides  
- CV: disponível em `docs/CV.pdf` ou pelo botão “Baixar CV” na página.
