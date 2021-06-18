//Iniciando servidor(localhost) com o express
const express = require("express") //importando a biblioteca
const app = express() //Iniciando o express(Estânciando)

//Rotas = caminhos para respostas diferentes na aplicação
app.get("/", function(req, res){ //Criando rotas(apontando para alguma)
    res.send("Bem vindo à introducao em node!")
}) 
app.get("/blog/:artigo?", function(req, res){ //"?" usa interrogacao anetes do parametro para deixar ele opcional
    var artigo = req.params.artigo
    if(artigo){ //Se o artigo EXISTIR; se o parametro artigo foi digitado, ele é verdadeiro, ele existe
        res.send("Bem vindo ao meu blog, " +artigo)
    }else{
        res.send("Indentifique-se, por gentileza")
    }
})
app.get("/ola/:nome", function(req, res){ //Rota com parametro. Só funciona quando é passado algum valor
    var nome = req.params.nome // retora no valor digitado como parametro pelo usuário
//    var empresa = req.params.empresa
    res.send("<h1> Oi " +nome+ "</h1>")
})
app.get("/canal/youtube", function(req, res){ //REQ = Dados enviados pelo usuário. RES = RESPOSTA QUE VAI SER ENVIADA PARA O USUÁRIO
    res.send("<h1>Bem vindo ao meu canal!</h1>")
})

//Iniciar servidor com carregamento(atualização) automático:
//npm install nodemon -g  -> instalando biblioteca
//Abrir arquivos no terminal com o nodemon + nome do arquivo
//ao invés de node + nome do arquivo






app.listen(4000, function(erro){ //Chamada quando o servidor é iniciado
    if(erro){
        console.log("Ocorreu um erro")
    }else{
        console.log("Servidor iniciado com sucesso !")
    }
})