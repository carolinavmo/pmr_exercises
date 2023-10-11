const express = require('express')
const ejs = require('ejs')
const path = require('path')
const puppeteer = require('puppeteer')
const app = express()



const regions = [
    {
        id: "1",
        name: "Ombro",
    },
    {
        id: "2",
        name: "Cotovelo",
    },
    {
        id: "3",
        name: "Punho e mão",
    },
    {
        id: "4",
        name: "Coluna",
    },
    {
        id: "5",
        name: "Anca",
    },
    {
        id: "6",
        name: "Joelho",
    },
    {
        id: "7",
        name: "Tornozelo e pé",
    },
    {
        id: "8",
        name: "Outros",
    },

];


app.set('view engine', 'ejs')


app.get('/', (request, response) => {
     response.render("index", { regions })
})

const exerciseRouter = require("./routes/exercises")

app.use("/exercises", exerciseRouter)

app.listen(3000)
