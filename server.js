const express = require("express")
const mongoose = require("mongoose")
const app = express()
const articleRouter = require('./routes/articles')


mongoose.connect('mongodb://localhost/blog')

app.set('view engine','ejs')

app.use('/articles',articleRouter)
app.use(express.urlencoded({extended:false})) // access all the parameters

app.get('/',(req,res)=>{
    const articles = [{
        title : 'Test Article 1',
        createdAt : new Date(),
        description : 'Test description 1'
    },
    {
        title : 'Test Article 2',
        createdAt : new Date(),
        description : 'Test description 2'
    },
    {
        title : 'Test Article 3',
        createdAt : new Date(),
        description : 'Test description 3'
    },
    {
        title : 'Test Article 4',
        createdAt : new Date(),
        description : 'Test description 3'
    }]
    res.render('articles/index' ,{
        articles: articles
    })

})

app.listen(8000)
