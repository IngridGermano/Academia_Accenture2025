#utf-8
#language: pt

Funcionalidade: validacaoAutomobile-01 - Automobile
    Cenario: Validação Automobile Tricentis
        Dado que acesso o portal Tricentis
        Quando clico no botão Automobile
        Então valido o acesso a página Automobile
        E preencho os campos em Enter Vehicle Data
        E preencho os campos em Enter Insurant Data
        E preencho os campos em Enter Product Data
        E seleciono o plano desejado em Select Price Option
        E preencho os campos em Send Quote
        Então valido a mensagem de sucesso