const express=require("express")
const app=express()
const cors=require("cors")
const { Pool} = require('pg')


const pool = new Pool({
    user: 'ubuntu',
    database: 'codedecode',
    password: 'Sirajudeen1',
    port: 5432,
    host: '65.0.124.164',
  })



app.use(cors())
app.use(express.json())


app.get("/login",(req,res)=>{
    res.send("hello world")
})

app.post("/signup",async (req,res)=>{
    const client=await pool.connect()
    try{
        const data=await client.query('SELECT * FROM users WHERE username=$1',[req.body.username])
        console.log(data.rows)
        if(data.rows.length!==0){
            res.send({status:200,data:"username already present"})
        }else{
            client.query('INSERT INTO users(username,password,phone) VALUES($1,$2,$3)',
            [req.body.username,req.body.password,req.body.number]).then(()=>{
                res.send({status:"200","data":"success proceed to login"})
            }).catch(()=>{
                res.send({status:200,"data":"internal network error"})
            })

        }

    }catch(error){
        console.log(error)
        res.send({status:503,data:"internal error"})
    }


    

})
app.listen(2000,()=>{
    console.log("server started")
})