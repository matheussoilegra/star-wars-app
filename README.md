# Star Wars App

## Recursos utilizados

- **Editor de código:** Visual Studio Code
- **Linguagens de marcação:** HTML5 e Markdown
- **Linguagens de programação:** Typescript
- **Frameworks:** Angular 8
- **Ambiente de execução:** Node.js
- **Editores de código:** ESLint, Prettier e EditorConfig
- **Gerenciador de pacotes:** NPM
- **Arquitetura CSS**: ITCSS (Inverted Triangle CSS)

## Modelo de desenvolvimento

1. Inicializado um novo projeto com configurações padrão:
   ```bash
   $ npm init -y
   ```
2. Instalado o Angular CLI para criar o projeto:
   ```bash
   $ sudo npm install -g @angular/cli
   ```
3. Inicializado um novo projeto:
   ```bash
   $ ng new my-app
   ```
4. Verificado se o projeto estava rodando:
   ```bash
   $ ng serve --open
   ```
5. Criados os componentes necessários para o projeto:
   ```bash
   $ ng g c components/nome-componente
   ```
6. Criados os serviços necessários para o projeto:
   ```bash
   $ ng g s services/nome-serviço
   ```
7. Criadas as interfaces necessárias para o projeto:
   ```bash
   $ ng g models/nome-model
   ```
8. Estilizado cada componente utilizando arquitetura CSS e pré-processamento com SCSS.
9. Atribuidas rotas no arquivo `app-routing.module.ts` para cada componente criado.

## Execução do projeto

1. Instalar o Node.js para execução do projeto:
   ```bash
   $ sudo apt install nodejs
   ```
2. Instalar o NPM para gerenciamento de pacotes:
   ```bash
     $ sudo apt install npm
   ```
3. Adicionar especificações do projeto:  
    Abra o arquivo `package.json` localizado na pasta raíz do projeto e execute o comando a seguir:
   ```bash
   $ npm install
   ```
4. Renderizar o projeto:
   ```bash
   $ ng build
   ```

## Estrutura do projeto

```
Angular_Exam
├─ .angulardoc.json
├─ .git
└─ star-wars-app
   ├─ .angulardoc.json
   ├─ .editorconfig
   ├─ .eslintrc.json
   ├─ .gitignore
   ├─ README.md
   ├─ angular.json
   ├─ browserslist
   ├─ e2e
   ├─ karma.conf.js
   ├─ node_modules
   ├─ package-lock.json
   ├─ package.json
   ├─ src
   │  ├─ app
   │  │  ├─ app-routing.module.ts
   │  │  ├─ app.component.html
   │  │  ├─ app.component.scss
   │  │  ├─ app.component.spec.ts
   │  │  ├─ app.component.ts
   │  │  ├─ app.module.ts
   │  │  ├─ components
   │  │  │  ├─ about
   │  │  │  ├─ characters-list
   │  │  │  ├─ header
   │  │  │  ├─ home
   │  │  │  ├─ loading
   │  │  │  ├─ movie-details
   │  │  │  ├─ movies-list
   │  │  │  ├─ page-not-found
   │  │  │  ├─ planets-list
   │  │  │  ├─ species-list
   │  │  │  ├─ starships-list
   │  │  │  └─ vehicles-list
   │  │  ├─ models
   │  │  └─ services
   │  ├─ assets
   │  │  ├─ .gitkeep
   │  │  └─ img
   │  │     └─ bg-image.jpg
   │  ├─ environments
   │  ├─ favicon.ico
   │  ├─ index.html
   │  ├─ main.ts
   │  ├─ polyfills.ts
   │  ├─ styles
   │  │  ├─ colors.scss
   │  │  ├─ global.scss
   │  │  └─ mixins.scss
   │  ├─ styles.scss
   │  └─ test.ts
   ├─ tsconfig.app.json
   ├─ tsconfig.json
   ├─ tsconfig.spec.json
   └─ tslint.json
```

## Sobre o projeto

Projeto desenvolvido na Trilha de Estudos Front-end da ilegra a fim de exercitar a utilização de todas as habilidades adquiridas ao longo da trilha, estruturando o projeto através do framework Angular 8.
