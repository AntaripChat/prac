const app = require('./app');
const PORT = 7000;

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.listen(PORT,()=>{
    console.log(`Port running on ${PORT}`);
})