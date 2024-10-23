## Tópicos

<div>
 • <a href="#-sobre-o-projeto">Sobre o Projeto</a> </br>
 • <a href="#-tecnologias">Tecnologias</a> </br>
 • <a href="#-layout">Layout</a> </br>
 • <a href="#-funcionalidades">Funcionalidades</a> </br>
 • <a href="#-estrutura-de-pastas">Estrutura de Pastas</a> </br>
 • <a href="#-estrutura-de-componentes">Estrutura de Componentes</a> </br>
 • <a href="#-como-executar-o-projeto">Como Executar</a> </br>
 • <a href="#-como-contribuir">Como Contribuir</a> </br>
 • <a href="#-entre-em-contato">Entre em Contato</a> </br>
</div>

## Sobre o Projeto

Este projeto foi criado para a matéria de PMI - Projeto Multidisciplinar Integrador. 

**Nome do Projeto**: Bind.it

🙁 **Problema**: Após notar uma dificuldade na comunicação entre pessoas em jogos online, nosso grupo decidiu desenvolver um site que facilite e proporcione a união de pessoas com interesses mútuos.

🙂 **Nicho**: O site será desenvolvido para usuários que buscam reunir-se para formar grupos em jogos online e trocar experiências.

🎁 **Proposta de Valor**: O site visa solucionar a dificuldade de unir pessoas com os mesmos interesses em jogos online, criando um ambiente agradável para os jogadores, onde eles se sintam protagonistas de suas ideias e possam compartilhar bons momentos jogando.

## Tecnologias

#### **Website** ([ReactJS](https://reactjs.org/) + [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) + [NodeJS](https://nodejs.org/en))

- **[Axios](https://github.com/axios/axios)**: Biblioteca para fazer requisições HTTP, simplificando a comunicação com APIs.
- **[React Bootstrap](https://react-bootstrap.github.io/)**: Conjunto de componentes Bootstrap adaptados para React, para criar interfaces responsivas.
- **[React Router](https://reactrouter.com/)**: Biblioteca para gerenciamento de rotas em aplicações React, facilitando navegação sem recarregar a página.
- **[EmailJS](https://www.emailjs.com/)**: Serviço que permite o envio de e-mails diretamente do front-end, sem back-end dedicado.
- **[CORS](https://github.com/expressjs/cors)**: Middleware que permite requisições entre diferentes domínios, essencial para APIs.
- **[Testing Library](https://testing-library.com/)**: Ferramenta para testes de comportamento e interações de usuários em aplicações React.
- **[Web Vitals](https://github.com/GoogleChrome/web-vitals)**: Ferramenta para medir métricas de performance web, como carregamento e interatividade.

#### **Servidor** ([Node.js](https://nodejs.org/en/) + [Express](https://expressjs.com/))

- **[bcrypt](https://www.npmjs.com/package/bcrypt)**: Biblioteca para criptografia de senhas.
- **[CORS](https://github.com/expressjs/cors)**: Middleware para lidar com Cross-Origin Resource Sharing (CORS).
- **[crypto](https://nodejs.org/api/crypto.html)**: Módulo nativo do Node.js para criptografia.
- **[crypto-js](https://www.npmjs.com/package/crypto-js)**: Biblioteca de criptografia para JavaScript.
- **[Express](https://expressjs.com/)**: Framework minimalista para criação de servidores web.
- **[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)**: Biblioteca para geração e verificação de JSON Web Tokens (JWT), usada para autenticação.
- **[Mongoose](https://mongoosejs.com/)**: Biblioteca de modelagem de dados para MongoDB no Node.js.

#### **API** 

- **[Mongoose](https://mongoosejs.com/)**: Facilita a interação com o banco de dados MongoDB, fornecendo uma interface baseada em objetos para trabalhar com os dados.
- **[Express](https://expressjs.com/pt-br/)**: Framework que permite criar APIs e aplicações web com facilidade.
- **[EmailJS](https://www.emailjs.com/)**: Serviço que permite o envio de e-mails diretamente do front-end, sem back-end dedicado.

#### **Utilitários**

- **Banco de Dados**: **[MongoDB](https://www.mongodb.com/)**
- **Protótipo**: **[Figma](https://www.figma.com/)** → **[Protótipo (Projeto)](https://www.figma.com/proto/xvHERxFmPstB6KobbESWqx/prot%C3%B3tipo-bind.it?node-id=21-372&node-type=canvas&t=0wHp8uD7bftUkLJH-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=21%3A372)**
- **Editor**: **[Visual Studio Code](https://code.visualstudio.com/)** 
- **Versionamento**: **[Git](https://git-scm.com)**

## Layout

Os layouts criados da aplicação estão disponíveis no Figma:

<a href="https://www.figma.com/proto/wGJW1fZExMD6gH7T7Y6rWk/Bind.it?node-id=16-3&node-type=canvas&t=DjrchBjuM27pQWFp-1&scaling=min-zoom&content-scaling=fixed&page-id=16%3A2&starting-point-node-id=16%3A3">
  <img alt="Acessar Layout Figma" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361">
</a>

<a href="https://www.figma.com/proto/xvHERxFmPstB6KobbESWqx/prot%C3%B3tipo-bind.it?node-id=21-372&node-type=canvas&t=0wHp8uD7bftUkLJH-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=21%3A372">
  <img alt="Acessar Protótipo Figma" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361">
</a>

## Funcionalidades

Features que estão sendo adicionadas na aplicação:

**Front-end Web**

- [ ] Adicionar telas:
  - [ ] Perfil
  - [x] Login
  - [x] Home
  - [x] Visão
  - [x] Sobre nós

**Front-end Mobile**

- [ ] Responsividade no dispositivo mobile

**Banco de Dados**

- [ ] Estrutura e tratamento de dados completa do site

**Back-end**

- [ ] Linkar o login no banco de dados
- [ ] Autenticação de login
- [ ] Verificação de login
- [ ] Tela de perfil

**Documentação**

- [ ] Documentação do código

## 🛠 Estrutura de Pastas e Componentes

A fim de facilitar a organização e manutenção do código, foi definido um padrão para a organização das pastas neste projeto.

**Front-end Web**

→ **Components**: Todos os componentes globais do projeto; <br />
→ **Css**: Contém a estilização global, ícones, fontes, tema da aplicação, itens de estilo reutilizáveis e imagens; <br />
→ **Imagens**: Armazena as imagens da aplicação; <br />
→ **Video**: Armazena vídeos da aplicação; <br />
→ **Server**: Servidor; <br />
→ **[Terminar documentação]**

## Como Executar o Projeto

Este projeto é dividido em duas partes:

1. **Backend** (pasta Server)
2. **Frontend Web** (pasta Client)

💡 O Frontend precisa que o Backend esteja sendo executado para funcionar.

### Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina as seguintes ferramentas: <br />
→ [Git](https://git-scm.com);<br />
→ [Node.js](https://nodejs.org/en/);<br />

Além disso, é recomendado ter um editor para trabalhar com o código, como [VSCode](https://code.visualstudio.com/).

Para executar o banco de dados MongoDB, foi utilizada a aplicação do [MongoDB Community](https://www.mongodb.com/try/download/community), mas existem outras alternativas, como o [Docker Container](https://www.docker.com/resources/what-container/).

#### 🎲 Rodando a Aplicação (Backend)

```bash
# Clone este repositório
$ git clone https://github.com/victorkpiva/bindit.git
# Vá para a pasta da aplicação Back End
$ cd bindit/server
# Instale as dependências
$ yarn install ou install express + install react
# Rode a aplicação
$ yarn start ou npm start
# A aplicação será aberta na porta definida
```

---

#### 🧭 Rodando a aplicação web (Frontend)

```bash
# Clone este repositório
$ git clone https://github.com/estude-ce/Projeto.git
# Vá para a pasta da aplicação Front End
$ utilize o comando cd para ir até a pasta 
# Instale as dependências
yarn install ou install express + install react
# Rode a aplicação
yarn start ou npm start
# A aplicação será aberta na porta definida
```

# Como contribuir com o projeto

Caso queira contribuir, seja corrigindo bugs, adicionando comentários ou novas features, você pode seguir o seguinte tutorial:

- Faça um **[fork](https://help.github.com/pt/github/getting-started-with-github/fork-a-repo)** desse repositório
- **[Clone](https://help.github.com/pt/github/creating-cloning-and-archiving-repositories/cloning-a-repository)** o repositório que você fez o fork em seu computador
- Crie uma branch com a sua feature: `git checkout -b minha-alteracao`
- Envie suas alterações para a _staging area_: `git add .`
- Faça um commit contando o que você fez: `git commit -m "feat: minha nova alteracao!"`
- Faça um push para a sua branch: `git push origin minha-alteracao`
- Agora é só abrir uma _pull request!_

_Caso tenha alguma dúvida, confira este [guia de como contribuir no GitHub](https://github.com/firstcontributions/first-contributions/blob/master/translations/README.pt_br.md) :)_

<br />

# Entre em contato

**Bind.it**: 
Projeto desenvolvido por **Gabriel Ache de Souza, Matheus Marques e Victor Piva** 👋🏻
