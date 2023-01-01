const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { response } = require('express');
const blogRoutes = require('./routes/blogroutes');

//express app
const app = express();


//connect to mongodb
const dbURI = 'mongodb+srv://chillfill:HBSoacOAOEy1tUKU@nodetutorial.dmjnzox.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(dbURI,{useNewUrlParser: true, useUnifiedTopology: true}).then((result)=> app.listen(3000)).catch((err)=>console.log(err))

//second arg above is for deprecation warnings

//how does ejs know to go to relative_path/views ?
//register view engine
app.set('view engine', 'ejs');
//app.set('views','myviews')
//listen
;
//HBSoacOAOEy1tUKU
//middleware and static files:

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));


app.use(morgan('dev'));//3rd party morgan middlware//gives GET/CODE time ms

app.get('/add-blog',(req,res)=>{
const blog = new Blog(
    {title: 'new Blog2'
,snippet: 'about my new blog'
,body:'more about my new blog'
});
blog.save().then((result)=>{
res.send(result)}).catch((err) =>{
    console.log(err)});
})

app.get('/all-blogs',(req,res)=>{
Blog.find().then((result) =>{
    res.send(result);
}).catch((err)=>{
    console.log(err);
})

})


app.get('/single-blog',(req,res)=>{
    Blog.findById('63b0db94ffc785494f18f32f').then((result)=>{
        res.send(result)
    }).catch((err)=>{
        console.log(err)
    })
})

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
    res.redirect('/blogs');
});

app.get('/about',(req,res)=>{
res.render('about',{title:'About'});
    //res.send('<p>about page</p>')
    //res.sendFile('./views/about.html',{root:__dirname});


});



//redirect from about-us to about
app.get('/about-us',(req,res)=>{
    res.redirect('/about');


})


//blog routes
app.use('/blogs',blogRoutes)

//404 MUST BE AT THE BOTTOM because it is middleware
app.use((req,res)=>{
    res.status(404).render('404',{title:'404 page'});
    //res.status(404).sendFile('./views/404.html',{root:__dirname});
})