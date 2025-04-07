#utf-8
#language: pt

Funcionalidade: Testes negativos - 01 - Select Price Option
  Cenário: Usuário tenta prosseguir para selecionar o "Price Option" sem preencher os campos obrigatórios nas etapas anteriores
    Dado que acesso o portal Tricentis
    E clico no botão Automobile
    E valido o acesso a página Automobile
    Quando clico na página "Select Price Option" sem preencher os campos obrigatórios nas etapas anteriores
    Então o sistema deve exibir uma mensagem informando que os campos anteriores são obrigatórios para poder exibir a tabela de preços