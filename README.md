# Cypress Web QA Challenge

## Regra Inegociavel
Todo codigo da submissao final deve ser autoral do desenvolvedor.
Nao use codigo pronto gerado por IA como entrega final.

## Descricao do Projeto
Projeto de automacao web com Cypress para validar fluxos de:
- Forms
- Inputs
- Alerts / Modals

Aplicacao sob teste: https://demoqa.com/

## Pre-requisitos
- Node.js LTS
- npm
- Navegador Chromium instalado

## Instalacao
1. Instale dependencias:
   ```bash
   npm install
   ```
2. Valide a instalacao do Cypress:
   ```bash
   npx cypress --version
   ```

## Execucao dos Testes
- Headless:
  ```bash
  npm run test:headless
  ```
- Headed:
  ```bash
  npm run test:headed
  ```
- Comando unico padrao:
  ```bash
  npm test
  ```

## Como Ver Resultados
- Terminal: status de execucao por spec
- Evidencias locais:
  - `cypress/screenshots`
  - `cypress/videos`

## Estrutura e Convencoes
- `cypress/e2e`: specs por funcionalidade
- `cypress/pages`: Page Object Model
- `cypress/fixtures`: dados de teste
- `cypress/support`: comandos customizados e utilitarios

## Padroes de Qualidade Obrigatorios
- POM obrigatorio
- Seletores robustos (evitar CSS fragil)
- DRY e reuso de codigo
- Sem hard wait (`cy.wait` fixo)
- Priorizar qualidade sobre quantidade
