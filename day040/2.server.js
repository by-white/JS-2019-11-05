const http = require('http'),
fs = require('fs'),
urlModel = require('url'),
qs = require('querystring');  

const app = http.createServer((req,res)=>{
    const {pathname,query} = urlModel.parse(req.url);
    let lastName = ['\.js$','\.html$','\.css$','\.less$','\.jpg$'];
    let re = new RegExp(lastName.join('|'));
    if(pathname === '/'){
        let data = fs.readFileSync('www2/index.html');
        res.end(data.toString());
    }
});

let port = 80;

app.listen(port);
/* 
    当服务器报错的时候触发
*/
app.on('error',(e)=>{
    console.log(e);
    //端口被占用的错误
    if (e.code === 'EADDRINUSE') {
        port ++;
        console.log(port);
        app.listen(port);
    }
})