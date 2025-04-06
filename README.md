<!-- Capa -->
<p align="center">
  <img src="https://s32519.pcdn.co/es/wp-content/uploads/sites/3/2020/08/accenture-logo-672x284px.png" alt="Accenture Logo" width="250"/>
</p>

---

# 🚀 Desafio Técnico Cypress - Academia Accenture 2025

Projeto desenvolvido como parte da **Academia de QA da Accenture**, com foco em automação de testes web utilizando **Cypress** e boas práticas de QA.

---

## 🗂️ Índice

- [🧠 Sobre o Projeto](#-sobre-o-projeto)
- [🔍 Fluxo Automatizado (Happy Path)](#-fluxo-automatizado-happy-path)
- [🛠️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [🧱 Estrutura do Projeto](#-estrutura-do-projeto)
- [📋 Boas Práticas Aplicadas](#-boas-práticas-aplicadas)
- [🌪️ Diferencial (em desenvolvimento)](#️-diferencial-em-desenvolvimento)
- [▶️ Como Executar o Projeto](#️-como-executar-o-projeto)
- [👩‍💻 Autora](#-autora)

---

## 🧠 Sobre o Projeto

Este projeto tem como objetivo automatizar o fluxo de preenchimento do formulário no portal [Tricentis Sample App](http://sampleapp.tricentis.com/101/app.php), aplicando práticas de testes de software modernas.

### 🔍 Fluxo Automatizado (Happy Path)

A automação cobre todo o fluxo positivo da aplicação, passando pelas seguintes etapas:

1. **Enter Vehicle Data**
2. **Enter Insurant Data**
3. **Enter Product Data**
4. **Select Price Option**
5. **Send Quote**

---

## 🛠️ Tecnologias Utilizadas

| Ferramenta | Descrição |
|-----------|-----------|
| ![Cypress](https://img.shields.io/badge/Cypress-17202C?style=flat&logo=cypress&logoColor=white) | Framework de testes end-to-end |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | Linguagem utilizada |
| ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=flat&logo=postman&logoColor=white) | Requisições HTTP na etapa "Send Quote" |
| ![VSCode](https://img.shields.io/badge/VSCode-007ACC?style=flat&logo=visual-studio-code&logoColor=white) | Editor de código utilizado |

---

## 🧱 Estrutura do Projeto

```
Academia_Accenture2025/
├── cypress/
│   ├── e2e/                  # Features e specs dos testes
│   ├── support/              # Page Objects e comandos customizados
│   ├── fixtures/             # Dados de apoio (não utilizados neste projeto)
│   └── env.json              # Dados sensíveis e configuráveis
├── .gitignore
├── cypress.config.js
└── README.md
```

---

## 📋 Boas Práticas Aplicadas

✅ Estrutura de testes no padrão **Page Object Model (POM)**  
✅ Escrita de cenários em **Gherkin (Given, When, Then)**  
✅ Dados sensíveis tratados via `Cypress.env`  
✅ Separação de responsabilidades entre specs e páginas  
✅ Organização de pastas clara e intuitiva  
✅ Requisição **HTTP POST** feita na aba **Send Quote** via Postman

---

## 🌪️ Diferencial (em desenvolvimento)

📌 *Será adicionado ao projeto:*

- **Cenários negativos de teste**, simulando falhas ou preenchimentos incorretos no formulário
- Validações específicas para campos obrigatórios e mensagens de erro

> ⚠️ Esta seção será atualizada quando os testes negativos forem concluídos!

---

## ▶️ Como Executar o Projeto

1. Clone o repositório:
```bash
git clone https://github.com/IngridGermano/Academia_Accenture2025.git
```

2. Instale as dependências:
```bash
npm install
```

#### - biblioteca faker
```bash
npm install @faker-js/faker
```

3. Importe as bibliotecas necessárias:

#### - biblioteca moment
```bash
import moment from 'moment';
```

4. Execute os testes:
```bash
npx cypress open
```
*ou*
```bash
npx cypress run
```

---

## 👩‍💻 Autora

**Ingrid Luiza Rios Germano**  
📎 [GitHub](https://github.com/IngridGermano)  
💼 [LinkedIn](https://www.linkedin.com/in/ingridgermano)

---

### ✨ Projeto desenvolvido durante a Academia QA da Accenture - 2025.
