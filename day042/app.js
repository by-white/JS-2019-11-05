const express = require('express');
const bodyParser = require('body-parser');
const  app = express();
let sql = [
    {
        id:-1,
        name:'zy'
    },
    {
        id:0,
        name:'baiwei',
        type:0
    },
    {
        id:1,
        name:'zzk',
        type:1
    },
    {
        id:2,
        name:'lyp',
        type:9
    }
]

app.use(express.static('www')); //静态文件 中间件  
app.use(bodyParser.json());  //解决axios不能用对象的问题
app.use(bodyParser.urlencoded({extended:false}));

//
app.post('login',(req,res)=>{
    console.log(req.body);
    setTimeout(()=>{
        res.json({code:0})
    },2000)
});

app.post('/login2',(req,res)=>{
    const {body} = req;
    console.log(body);
    let o = sql.find(item=>item.name === body.name);//拿到name的值
    let obj = null;  //存参数的值
    if (o) { //成功拿到name的值
        obj = {
            code:0,
            type:o.type,
            user:o.name
        }
    }else{//没有拿到name的值
        obj = {
            code:1
        }
    }
    setTimeout(()=>{
        res.json(obj)
    },6000)
})

app.get('/getary',(req,res)=>{
    setTimeout(()=>{
        res.json({code:0,ary:[1,2,3,4]})
    },4000);
})

app.get('/noloading',(req,res)=>{
    setTimeout(()=>{
        res.json({code:1})
    },3000);
})

app.listen(80);