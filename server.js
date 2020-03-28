const express = require("express")
const server = express()   


const ideas = [ 
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Curso de Programação",
        category: "Curso de Programação",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid quisquam, fuga iure nostrum ratione, in voluptatum deserunt expedita ullam debitis voluptates quaerat ad doloremque cupiditate laboriosam necessitatibus. Ea, illum impedit!",
        url: "http://rocketseat.com.br"
    },

    {
        img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title: "Exercicios",
        category: "Saude",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid quisquam, fuga iure nostrum ratione, in voluptatum deserunt expedita ullam debitis voluptates quaerat ad doloremque cupiditate laboriosam necessitatibus. Ea, illum impedit!",
        url: "http://rocketseat.com.br"
    },

    {
        img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Meditação",
        category: "Mentalidade",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid quisquam, fuga iure nostrum ratione, in voluptatum deserunt expedita ullam debitis voluptates quaerat ad doloremque cupiditate laboriosam necessitatibus. Ea, illum impedit!",
        url: "http://rocketseat.com.br"
    },

    {
        img: "https://image.flaticon.com/icons/svg/2729/2729032.svg",
        title: "Karaokê",
        category: "Diversão em Familia",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid quisquam, fuga iure nostrum ratione, in voluptatum deserunt expedita ullam debitis voluptates quaerat ad doloremque cupiditate laboriosam necessitatibus. Ea, illum impedit!",
        url: "http://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729038.svg",
        title: "Pintura",
        category: "Criatividade",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid quisquam, fuga iure nostrum ratione, in voluptatum deserunt expedita ullam debitis voluptates quaerat ad doloremque cupiditate laboriosam necessitatibus. Ea, illum impedit!",
        url: "http://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729048.svg",
        title: "Recortes",
        category: "Diversão em Familia",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid quisquam, fuga iure nostrum ratione, in voluptatum deserunt expedita ullam debitis voluptates quaerat ad doloremque cupiditate laboriosam necessitatibus. Ea, illum impedit!",
        url: "http://rocketseat.com.br"
    },
]

server.use(express.static("public"))

const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true,
})


server.get("/", function(req, res) {

    const reversedIdeas = [...ideas].reverse()

    let lastIdeas = []
    for(let idea of reversedIdeas) {
        if(lastIdeas.length < 2) {
            lastIdeas.push(idea)
        }
    }



    return res.render("index.html", {ideas: lastIdeas})
})

server.get("/ideas", function(req, res) {

    const reversedIdeas = [...ideas].reverse()

    
    return res.render("ideas.html", {ideas: reversedIdeas})
})

server.listen(3000)



