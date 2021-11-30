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
- As tabelas da interface da dashboard devem ser padronizados seguindo a biblioteca Material-UI versão 5.2.0.
- O sistema deverá funcionar em qualquer edição [suportada](https://docs.microsoft.com/pt-PT/lifecycle/faq/windows) do Windows 10 Pro, Home e Education.
- O sistema deverá ser desenvolvido no framework React versão 17.0.2 e NodeJS versão 16.13.0 com banco de dados MySQL Community versão 8.0.27.
- O sistema deverá ter alta disponibilidade, de no mínimo, 90% do tempo de 24/7.

<hr>

## Regras de uso do Git

- Utilize o .gitignore para excluir arquivos muito pesados.
- Utilize o .gitignore para excluir arquivos desnecessários para a atualização do projeto no git.
- Para os ícones, utilizar imagens vetoriais (extensão .svg).
- Não alterar a estrutura de pastas.
- Mantenha os arquivos de mídia dentro da pasta src/assets.
- Se for adicionar 5 ou mais arquivos de mídia dentro de uma mesma página, criar uma nova pasta dentro de str/assets.
- Mantenha os arquivos do back-end para operações CRUD nas pastas controllers, models, persistencia e routes.
- Ao terminar a tarefa de uma issue, marcar a checkbox.
- Ao terminar todas as tarefas de uma issue, colocá-la na coluna "To Test".

## Boas práticas de codificação

- Utilize a extensão prettier do VSCode para formatar o código, mantendo as configurações padrão.
- Utilize os cinco princípios [SOLID](https://pt.wikipedia.org/wiki/SOLID).
- O CSS deve ficar em um arquivo separado, nomeado como <Nome_do_arquivo>.module.css e importado no componente.
- Os arquivos, com exceção do App.js e index.js devem ser feitos utilizando a extensão '.jsx'.
- Nomeie os arquivos, funções e variáveis de forma significativa, de forma com que faça sentido.
- Comentários devem ser limitados a até 150 caracteres.
