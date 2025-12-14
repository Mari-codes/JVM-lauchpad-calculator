# React Calculator — JVM Launchpad Challenge

## Leia em outros idiomas

- [English](../README.md)

Este projeto foi desenvolvido como parte de um **desafio técnico para ingresso em uma das squads do JVM Launchpad**.  
O objetivo foi construir uma **calculadora totalmente funcional** utilizando **React, Vite e TypeScript**, com foco em **organização de código, padronização e boas práticas de frontend**.

---

## Objetivo do desafio

- Construir uma calculadora funcional em React
- Utilizar TypeScript com tipagem explícita
- Aplicar boas práticas de arquitetura baseada em componentes
- Implementar alternância de temas
- Manter um padrão visual consistente

---

## Funcionalidades

- Operações matemáticas básicas:
  - Adição (`+`)
  - Subtração (`-`)
  - Multiplicação (`x`)
  - Divisão (`/`)
- Teclas especiais:
  - `DEL` – remove o último caractere
  - `RESET` – limpa toda a operação
  - `=` – executa o cálculo
- Suporte a números decimais
- Três temas visuais:
  - **Dark** (tema principal com cores do JVM Launchpad: preto e vermelho)
  - Light
  - Color
- Layout baseado em grid
- Interface responsiva

---

## Tecnologias e ferramentas

| Tecnologia      | Finalidade                           |
| --------------- | ------------------------------------ |
| React           | Interface de usuário                 |
| Vite            | Configuração e build do projeto      |
| TypeScript      | Tipagem estática                     |
| SCSS            | Estilização                          |
| CSS Modules     | Escopo de estilos                    |
| Metodologia BEM | Convenção de nomenclatura de classes |
| Prettier        | Formatação de código                 |

---

## Arquitetura e organização

- Componentes reutilizáveis e desacoplados
- Lógica de cálculo centralizada em um **custom hook**
- Separação clara entre:
  - components
  - hooks
  - types
  - utils
- Variáveis Sass utilizadas para definir a paleta de cores
- Temas implementados com **CSS custom properties**, alternados dinamicamente via atributo `data-theme`
- Componentes consomem apenas variáveis CSS, sem dependência direta do tema ativo
- Cálculos implementados sem uso de `eval`

---

## Primeiros Passos

### Pré-requisitos

- Node.js (>= 14.x)
- npm ou yarn

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/mari-codes/devfinder.git
   ```
2. Navegue até a pasta do projeto:
   ```bash
   cd devfinder
   ```
3. Instale as dependências:

   ```bash
   npm install
   ```

   ou

   ```bash
   yarn install
   ```

## Executando o Projeto

```sh
npm run dev
```

ou

```bash
yarn dev
```

---

## Temas

### 1. JVM Launchpad

![JVM Launchpad Theme](/src/assets/screenshots/jvm-theme.png)

### 2. Light

![Light Theme](/src/assets/screenshots/light-theme.png)

### 3. Color

![Color Theme](/src/assets/screenshots/color-theme.png)
