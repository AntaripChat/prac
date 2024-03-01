const app = require('./app');
<<<<<<< HEAD
const limit = require('rate-limiter-flexible')

const lim = new limit({
    points:1,
    duration:60,
})

app.get('/',(req,res)=>{
    res.send('Hello');
    console.log(req.ip);
});

app.listen(2000)

=======
const PORT = 7000;

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.listen(PORT,()=>{
    console.log(`Port running on ${PORT}`);
})
>>>>>>> 80abe85e12b66915003d543feb4d55d02e64c1e5
