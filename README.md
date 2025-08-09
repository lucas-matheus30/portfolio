# Portfolio - Lucas Matheus

Portfolio pessoal desenvolvido com React, TypeScript e Tailwind CSS.

## 🚀 Tecnologias

- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Vite** - Build tool e dev server
- **Lucide React** - Ícones SVG

## 📋 Pré-requisitos

- Node.js 18+ 
- npm ou yarn

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd portfolio
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Execute o projeto em desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

4. Abra [http://localhost:5173](http://localhost:5173) no seu navegador.

## 📦 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run lint` - Executa o linter ESLint
- `npm run preview` - Visualiza a build de produção localmente

## 🚀 Deploy no Vercel

1. **Conecte com GitHub:**
   - Acesse [vercel.com](https://vercel.com)
   - Faça login com sua conta GitHub
   - Clique em "New Project"

2. **Importe o repositório:**
   - Selecione o repositório do portfolio
   - Vercel detectará automaticamente que é um projeto Vite

3. **Configure o projeto:**
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

4. **Deploy:**
   - Clique em "Deploy"
   - Aguarde a build ser concluída

5. **Configurações adicionais (opcional):**
   - **Environment Variables:** Se necessário
   - **Domain:** Configure um domínio personalizado

## 📁 Estrutura do Projeto

```
portfolio/
├── src/
│   ├── App.tsx          # Componente principal
│   ├── main.tsx         # Ponto de entrada
│   ├── index.css        # Estilos globais
│   └── vite-env.d.ts    # Tipos do Vite
├── public/
│   └── images/          # Imagens estáticas
├── index.html           # HTML principal
├── package.json         # Dependências e scripts
├── tailwind.config.js   # Configuração do Tailwind
├── tsconfig.json        # Configuração do TypeScript
└── vite.config.ts       # Configuração do Vite
```

## 🎨 Características

- **Design Responsivo** - Adaptável a todos os dispositivos
- **Animações CSS** - Partículas animadas no background
- **Navegação Suave** - Scroll suave entre seções
- **SEO Otimizado** - Meta tags e estrutura semântica
- **Performance** - Build otimizada com Vite

## 📱 Seções

1. **Hero** - Apresentação principal
2. **Sobre Mim** - Informações pessoais e formação
3. **Habilidades** - Tecnologias e ferramentas
4. **Projetos** - Portfolio de trabalhos
5. **Contato** - Informações de contato

## 🔧 Personalização

- **Cores:** Edite as classes do Tailwind no `App.tsx`
- **Conteúdo:** Atualize textos e informações nas constantes
- **Projetos:** Modifique o array `projects` no `App.tsx`
- **Estilos:** Personalize o `index.css` e `tailwind.config.js`

## 📄 Licença

Este projeto é de uso pessoal. Todos os direitos reservados.

## 👨‍💻 Autor

**Lucas Matheus**
- Email: lucas-matheusdev@outlook.com
- LinkedIn: [lucas-matheus-lima](https://www.linkedin.com/in/lucas-matheus-lima/)
- GitHub: [lucas-matheus30](https://github.com/lucas-matheus30)

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!
