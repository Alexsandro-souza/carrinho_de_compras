
# 🛒 Projeto Carrinho de Compras

## 🚀 Como usar
Basta digitar no terminal:


npm run dev


## 📋 Planejamento

### 📂 Onde será salvo os itens cadastrados?
Foi decidido usar arquivos .txt como banco de dados.
Um dos critérios definidos foi persistência de dados, e precisava de algo rápido e simples.
O módulo fs do Node.js, com os métodos readFile e writeFile, atendeu perfeitamente, então optei por utilizá-lo.

### 🛍️ Funcionalidades do carrinho
O objetivo é replicar as funcionalidades de um carrinho de compras online padrão:

- ✅ Cálculo automático do subtotal

- ✅ Adicionar item

- ✅ Remover item

- ✅ Alterar quantidade do item

### 🔮 Funcionalidades futuras
Em breve serão adicionadas as seguintes funcionalidades:

- 🔑 Sistema de administrador

- Somente o administrador poderá criar produtos.

- Login com usuário e senha mockados no projeto.

- ⭐ Favoritar produtos

- 👤 Carrinho por usuário
