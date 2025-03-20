# Blog Sinko

Este é um blog moderno desenvolvido com Next.js 15, utilizando Strapi como CMS (Content Management System) e uma interface elegante construída com Tailwind CSS e shadcn/ui.

## 🚀 Tecnologias

Este projeto utiliza as seguintes tecnologias:

- [Next.js 15](https://nextjs.org/)
- [React 19](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Strapi CMS](https://strapi.io/)

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- Node.js (versão conforme .nvmrc)
- npm ou yarn
- Git

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
cd blog-sinko
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente:
   - Copie o arquivo `.env.example` para `.env`
   - Preencha as variáveis necessárias

## 🚀 Executando o projeto

Para desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

Para produção:
```bash
npm run build
npm start
# ou
yarn build
yarn start
```

O projeto estará disponível em [http://localhost:3000](http://localhost:3000)

## 📝 Scripts Disponíveis

- `dev`: Inicia o servidor de desenvolvimento com Turbopack
- `build`: Gera a versão de produção
- `start`: Inicia o servidor de produção
- `lint`: Executa a verificação de linting
- `lint:fix`: Corrige automaticamente problemas de linting
- `format`: Formata o código usando Prettier

## 🐳 Docker

O projeto inclui configuração Docker. Para executar usando Docker:

```bash
# Construir a imagem
docker build -t blog-sinko .

# Executar o container
docker run -p 3000:3000 blog-sinko
```

## 🔧 Configuração do Editor

O projeto inclui configurações para VSCode e EditorConfig para manter a consistência do código. Recomendamos instalar as extensões sugeridas no arquivo `.vscode/extensions.json`.

## 📜 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE.md](LICENSE.md) para mais detalhes.

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request
