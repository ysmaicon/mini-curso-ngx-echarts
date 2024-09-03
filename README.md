
# Mini Curso NgxECharts

Este repositório contém o código-fonte do minicurso **"Visualização de Dados com NgxECharts"**, que tem como objetivo capacitar os participantes a criar visualizações de dados interativas e dinâmicas utilizando a biblioteca NgxECharts. Durante o curso, os alunos aprenderão desde a configuração do ambiente de desenvolvimento até a criação de gráficos avançados.

## Pré-requisitos

Antes de começar, certifique-se de ter os seguintes requisitos instalados em sua máquina:

- **Node.js** (recomendado: versão 14.x ou superior): [Baixar Node.js](https://nodejs.org/)
- **npm** (Node Package Manager): Geralmente, o npm já é instalado junto com o Node.js.
- **nvm** (Node Version Manager) - opcional, mas recomendado: Permite gerenciar múltiplas versões do Node.js. [Instalar NVM](https://github.com/nvm-sh/nvm)
- **Angular CLI** (versão 13.3.11 ou superior): Instale globalmente usando o comando abaixo:

## Clonando o Repositório

1. Clone o repositório para sua máquina local:

   ```bash
   git clone https://github.com/ysmaicon/mini-curso-ngx-echarts
   cd mini-curso-ngx-echarts
   ```

2. Se você estiver utilizando o **nvm**, instale e use a versão correta do Node.js:

   ```bash
   nvm install 14
   nvm use 14
   ```

3. Instale o **Angular CLI**:

    ```bash
    npm install -g @angular/cli@13.3.11
    ```

4. Instale as dependências do projeto:

   ```bash
   npm install
   ```

## Servidor de Desenvolvimento

Para iniciar o servidor de desenvolvimento, execute:

```bash
ng serve
```

Abra o navegador e acesse `http://localhost:4200/`. A aplicação recarregará automaticamente sempre que você fizer alterações nos arquivos fonte.

## Estrutura do Projeto

Este projeto foi gerado com o [Angular CLI](https://github.com/angular/angular-cli) versão 13.3.11.

Alguns comandos úteis:

- **Gerar um novo componente:**

  ```bash
  ng generate component nome-do-componente
  ```

- **Gerar uma nova diretiva, pipe, serviço, classe, guard, interface, enum ou módulo:**

  ```bash
  ng generate directive|pipe|service|class|guard|interface|enum|module nome
  ```

## Documentação do Angular Material

Durante o minicurso, utilizaremos componentes do Angular Material para melhorar a interface do usuário das visualizações de dados. A documentação oficial do Angular Material é uma excelente referência para aprender como utilizar seus diversos componentes e diretivas.

- [Documentação do Angular Material](https://material.angular.io/)

## Recursos Úteis

Aqui estão alguns links que serão úteis durante o minicurso:

- **PokeAPI**: Uma API pública para acessar dados sobre Pokémon, que será utilizada em exemplos de visualização.
  - [PokeAPI](https://pokeapi.co/)
  - [Documentação GraphQL da PokeAPI](https://beta.pokeapi.co/graphql/console/)

- **Documentação do ECharts**: Guia oficial para a biblioteca ECharts, com exemplos e configurações detalhadas.
  - [ECharts Documentation](https://echarts.apache.org/en/index.html)

- **Documentação do ngx-echarts**: Guia oficial para integrar ECharts com Angular usando ngx-echarts.
  - [ngx-echarts Documentation](https://xieziyu.github.io/ngx-echarts/)

## Suporte Adicional

Para mais ajuda sobre o Angular CLI, utilize \`ng help\` ou consulte a [documentação oficial do Angular CLI](https://angular.io/cli).

## Equipe

Este projeto foi desenvolvido por:

- [Gianluca Borges Mendes](https://github.com/GianlucaBorges)
- [Ytalo Ysmaicon Gomes](https://github.com/ysmaicon)