const express=require('express')
const path=require('path')
const app=express()
const hbs=require('hbs')
const port=process.env.PORT || 5500
const partial_path=path.join(__dirname,'../views/partials')
const staticpath=path.join(__dirname,'../public')
const viewsPath = path.join(__dirname, '../views'); // Provide the c path to  views directory
console.log(viewsPath)
app.set('views', viewsPath); 
app.set('view engine','hbs')
app.use(express.static(staticpath))
hbs.registerPartials(partial_path)

app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/weather',(req,res)=>{
    res.render('weather')
})
app.get('/*',(req,res)=>{
    res.render('404',{
        errorMsg:"OOps! Page Not Found"
    })
})


app.listen(port,'127.0.0.1')