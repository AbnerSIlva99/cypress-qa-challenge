# DEFECTS

## DEFECT-001: Practice Form aceita e-mail invalido

- Titulo: E-mail invalido aceito no envio do formulario
- Area: Forms
- Severidade: Major
- Prioridade: Alta
- Justificativa: Fluxo principal aceita dado invalido e compromete integridade.

### Passos para Reproduzir
1. Acessar `https://demoqa.com/automation-practice-form`
2. Preencher campos obrigatorios validos
3. Informar `email-invalido` no campo de e-mail
4. Clicar em Submit

### Resultado Esperado
Sistema deve bloquear envio e exibir mensagem de validacao.

### Resultado Atual
Formulario e submetido sem validacao do formato de e-mail.

### Evidencia
Opcional: anexar screenshot/video/link de execucao.
