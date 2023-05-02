import express from 'express'
const app = express();
import path from 'path';
import { fileURLToPath } from 'url';
import hbs from 'hbs'
const Port =  8000 ;

//to get static file from public folder
const __filename = fileURLToPath(import.meta.url) // this will give path to our current file
const __dirname = path.dirname(__filename); //this will give current directory
const staticPath = path.join(__dirname , '../public');
const staticPath2 = path.join(__dirname , '../templates/partials');
const staticPath3 = path.join(__dirname , '../templates/views');
hbs.registerPartials(staticPath2)
app.set('view engine'  , 'hbs')
app.set('views' , 'templates/views')
app.use(express.static(staticPath));

app.get("/" , (req , res)=>{
    res.render('index')
})
app.get("/about" , (req , res)=>{
    // res.sendFile(path.join(__dirname , '../public/about.html'))
    res.render('about')
})
app.get("/weather" , (req , res)=>{
    res.render('weather')
})
app.get("/*" , (req , res)=>{
    res.render("404Page")
})
app.listen(Port , ()=>{
    console.log("Listeningg");
})
