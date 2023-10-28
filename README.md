# Questões Teoricas 
1. Git é um sistema de controle de versão distribuído usado para rastrear e gerenciar alterações no código-fonte de projetos de software, permitindo que várias pessoas trabalhem em um projeto simultaneamente, mantendo um histórico de todas as alterações, facilitando a colaboração, o gerenciamento de versões e a reversão a estados anteriores do código.

2. A staging área é um espaço intermediário no Git onde você prepara as alterações antes de efetuar um commit, permitindo  que você selecione quais alterações nos arquivos do seu projeto serão incluídas no próximo commit.

3. O working directory é o diretório do seu sistema de arquivos onde você edita, cria e exclui arquivos do seu projeto. É onde você faz alterações no código-fonte do seu projeto antes de prepará-las na staging area e fazer um commit.

4. Um commit é uma operação no Git que registra um conjunto de alterações em um repositório. Cada commit possui um identificador único (hash) e uma mensagem que descreve as alterações realizadas. Os commits criam um histórico de versões no projeto e permitem que você volte a versões anteriores, se necessário.

5. Uma branch é uma linha independente de desenvolvimento no Git. Ela permite que você trabalhe em uma nova funcionalidade ou correção de bug sem afetar o código em outras branches. 

6. O HEAD é um ponteiro especial no Git que aponta para o commit atual em que você está trabalhando. Ele representa a versão mais recente do código no branch atual.

7. Um merge é uma operação no Git que combina o conteúdo de duas ou mais branches em um único branch. Isso é feito para incorporar as alterações feitas em uma branch em outra, criando uma única linha de desenvolvimento.

8.
Untracked: O arquivo ainda não está sendo rastreado pelo Git.
Unmodified: O arquivo não foi alterado desde o último commit.
Modified: O arquivo foi alterado após o último commit.
Staged: O arquivo foi modificado e foi colocado na staging area, pronto para ser incluído no próximo commit.

9. git init é usado para criar um novo repositório Git em um diretório. Ele inicializa um novo repositório vazio e configura a estrutura do Git, incluindo o diretório .git que armazena os metadados do repositório. 

10. git add é usado para adicionar alterações de arquivos ao staged area (área de preparação) do Git. Ele prepara as alterações para serem incluídas no próximo commit. 

11. git status é usado para verificar o estado atual do seu repositório Git. Ele mostra quais arquivos foram modificados, quais estão na staging area e quais não estão sendo rastreados. É uma ferramenta útil para entender o que precisa ser adicionado ou confirmado no repositório.

12. git commit é usado para criar um novo commit que registra as alterações preparadas (staged) na staging area. Um commit é acompanhado de uma mensagem que descreve as alterações feitas no commit. Isso cria um novo ponto no histórico do repositório que reflete o estado atual do código.

13. git log é usado para visualizar o histórico de commits do repositório. Ele lista todos os commits, exibindo informações como o hash do commit, autor, data, mensagem e relacionamentos entre commits. É uma ferramenta útil para entender o histórico do projeto.

14. git checkout -b é usado para criar uma nova branch e mudar para ela em um único passo. 

15.
git reset é usado para redefinir o estado do repositório para um commit anterior. Existem três opções principais:
git reset --soft: Move a HEAD e a branch para o commit especificado, mantendo as alterações no staged area.
git reset --mixed (padrão): Move a HEAD e a branch para o commit especificado e desfaz as alterações no staged area.
git reset --hard: Move a HEAD e a branch para o commit especificado, desfazendo todas as alterações no staged area e no working directory.

16. git revert é usado para criar um novo commit que desfaz as alterações introduzidas por um commit anterior. Ele não remove o commit original, mas cria um novo commit que inverte as alterações. Isso é útil quando você deseja manter um histórico consistente e não deseja eliminar commits anteriores.

17. git clone é usado para criar uma cópia de um repositório Git existente. Ele clona todo o histórico e os arquivos do repositório remoto para a sua máquina local, permitindo que você trabalhe com o código e contribua para o projeto.

18. git push é usado para enviar os commits locais para um repositório remoto. Ele sincroniza o repositório local com o repositório remoto, tornando as alterações disponíveis para outras pessoas que colaboram no projeto.

19.  git pull é usado para obter as atualizações do repositório remoto e mesclá-las automaticamente com o seu repositório local. É equivalente a executar git fetch seguido de git merge.

20. Para ignorar arquivos no Git poderá ser usado o arquivo .gitignore no diretório raiz do seu repositório. Nesse arquivo, pode listar padrões de arquivos e diretórios que deseja ignorar, como arquivos de compilação, caches, arquivos temporários, etc. 

21.
A branch "master" (ou "main") é muitas vezes considerada a branch principal do repositório. Ela deve conter apenas código que foi testado, revisado e está pronto para ser implantado em produção.
A branch "develop" é onde a maior parte do desenvolvimento ativo ocorre. É usada para integrar e testar novas funcionalidades e correções de bugs antes de serem mescladas na "master" (ou "main").
A branch "staging" é usada como um ambiente de pré-produção para testar as alterações antes de serem implantadas na "master" (ou "main"). É um ambiente que replica o ambiente de produção.

# Questões Praticas

3. O código inicial da calculadora realiza a soma de dois valores passados por linha de comando. Com o comando "node calculadora.js 5 10" conseguimos executar o código, onde também passamos os valores 5 e 10 para realizar a soma.

4. O código inicial com o tipo feat de commit.
O README.md com o tipo docs de commit.

6. Para executar o novo código será passado o nome da função e os dois valores de entrada, por exemplo, “node calculadora sub 10 5” com esse comando será realizado uma subtração dos valores passados por comando. 

10. A função “evaluate” avalia uma expressão matemática em forma de string aceitando 3 parâmetros , sendo eles dois operandos e um operador que irá realizar a operação entre eles e a função eval faz a avaliação dessa string como uma expressão JavaScript. Com o novo código a forma de execução 

