Desafio de backend da arch

desafio simples com um crud basico e somente uma querry de inner join (sem self nem left)

Start:
No terminal digite:
- npm install || yarn install
Apos instalar as dependencias do packge json Você pode optar por rodar no docker ou localmente

Local: npm start || yarn start

Docker Create: docker build -t arch/dockernode .
depois
Docker Run: docker run -p 3000:3000 -d arch/dockernode

o docker yml não esta incluso na pasta pois nele costa minhas chaves individuias de banco

########### LEMBRE-SE ############
<h1>ALTERE OS DADOS DO BANCO DE DADOS PGSQL PARA OS DE SUA MAQUINA</h1>
NA PASTA MODEL -> DB SE ENCONTRA TODAS AS CONFIGS DO BANCO, MUDE PARA SUAS E FAÇA OS TESTES
NA PASTA IMG ESTÃO AS IMAGENS DE EXEMPLOS DE REQUEST
