const express = require('express');
const morgan = require('morgan')
const app = express();
//how does ejs know to go to relative_path/views ?
//register view engine
app.set('view engine', 'ejs');
//app.set('views','myviews')
//listen
app.listen(3000);

//middleware and static files:

app.use(express.static('public'));


app.use(morgan('dev'));//3rd party morgan middlware//gives GET/CODE time ms

app.use((req,res, next) => {//app.use is middleware
console.log('new request made:');
console.log('host: ', req.hostname);
console.log('path:',req.path);
console.log('method: ',req.method);
next()
});
//app.get('/')
app.use((req,res, next) => {//app.use is middleware
    console.log('next middleware');
    next()
    });

app.get('/',(req,res)=>{
    const blogs = [{title: 'Phil number 1',snippet:'Why phil is the best'},
{title: 'how phil became the best', snippet:'step 1: be phil'}]


res.render('index',{title: 'Home',blogs:blogs});
//index is just file name in views....
//second parameter: {title: 'Home'}
//is used in index
//look for ejs tag: <%= title%>
//on site: hover over tab to see
    //res.send('<p>home page</p>')
    
    //res.sendFile('./views/index.html',{root:__dirname});
});

app.get('/about',(req,res)=>{
res.render('about',{title:'About'});
    //res.send('<p>about page</p>')
    //res.sendFile('./views/about.html',{root:__dirname});


});

app.get('/blogs/create',(req,res)=>{

    res.render('create',{title:'Create a blog'});
})

//redirect from about-us to about
app.get('/about-us',(req,res)=>{
    res.redirect('/about');
})

//404 MUST BE AT THE BOTTOM because it is middleware
app.use((req,res)=>{
    res.status(404).render('404',{title:'404 page'});
    //res.status(404).sendFile('./views/404.html',{root:__dirname});
})