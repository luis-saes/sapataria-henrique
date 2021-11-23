# Sapataria Henrique

## Tecnologias

Para esse projeto de Engenharia de software, iremos utilizar as seguintes tecnologias:

- Linguagem desenvolvimento front-end: React versão 17.0.2
- Linguagem desenvolvimento back-end: NodeJS versão 16.13.0
- Banco de dados/servidor utilizado: MySQL Community versão 8.0.27

## Visão Geral do Produto

O sistema feito é para realizar a administração de uma loja da rede 'Sapataria Henrique'. De suas funcionalidades, o sistema possui autenticação de administradores, cadastro de Funcionários da loja, bem como suas informações necessárias, vendas, clientes e produtos. Além de permitir o cadastro, também permite a leitura, atualização e remoção de todos os dados.
Tem como finalidade, permitir ao franqueado ter controle administrativo sobre seus funcionários e suas vendas.

Requisitos funcionais:

- Realizar a autenticação do usuário ao entrar no sistema.
- Permitir o cadastro de novas informações em cada tabela.
- Permitir a leitura dos dados de cada tabela.
- Permitir a atualização dos dados de cada tabela.
- Permitir a remoção de dados de cada tabela.

Requisitos não funcionais:

- O sistema deverá realizar a inserção de uma linha nas tabelas em até 500 milissegundos.
- Os botões da interface da dashboard devem ser padronizados.
- O sistema deverá funcionar em qualquer edição [suportada](https://docs.microsoft.com/pt-PT/lifecycle/faq/windows) do Windows 10 Pro, Home e Education.
- O sistema deverá ser desenvolvido no framework React versão 17.0.2 e NodeJS versão 16.13.0 com banco de dados Oracle SQL versão 21c.
- O sistema deverá ter alta disponibilidade, de no mínimo, 90% do tempo de 24/7.

<hr>

## Regras de uso do Git

- Para mudanças de código, utilize a branch dev e quando for atualizar a main, criar um pull request.
- Utilize o .gitignore para excluir arquivos muito pesados desnecessários para a atualização do projeto no git.
- Dê preferência a imagens vetorizadas ao tratar-se da utilização de ícones.
- Mantenha o padrão da estrutura de pastas.
- Para o front-end, mantenha os arquivos de mídia dentro de src/assets, criando uma nova pasta dentro desta, se julgar necessário.

## Boas práticas de codificação

- Utilize a extensão prettier do VSCode para formatar o código, mantendo as configurações padrão.
- Evite componentes com códigos muito extensos, tente manter cada arquivo com uma única função primordial.
- O CSS deve ficar em um arquivo separado, nomeado como <Nome_do_arquivo>.module.css e importado no componente.
- Os arquivos, com exceção do App.js e index.js devem ser feitos utilizando a extensão '.jsx'.
- Nomeie os arquivos, funções e variáveis de forma significativa, de forma com que faça sentido.
- Evite comentários extensos, garanta que o código seja legível sem precisar de comentários para explicar cada passo.
