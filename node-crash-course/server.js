const http = require('http');
const server = http.createServer((req,res)=>{
console.log(req.url, req.method);

//set header content type
res.setHeader('Conent-Type','text/html');
res.write('<p>hello, world<p>');
res.write(`<body>
        
<button onclick="doSomething()" style="background-color:#333333;color:#00FF00;border-radius:5px">click me!</button>


<p id="test">Hello</p>

<script>
var x = 1;
function doSomething(){
    document.getElementById("test").innerHTML = x;
    x+=1;
}
</script>
</body>`)
res.end()
});

server.listen(3000, 'localhost',() =>{

    console.log('listening for requests on port 3000');
})