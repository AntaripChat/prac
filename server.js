const app = require('./app');
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

