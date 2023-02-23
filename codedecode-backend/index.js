const User=require("./databaseHelper")
const express=require("express")
const app=express()
const cors=require("cors")
const dotenv=require("dotenv")
const { Pool} = require('pg')
const jwt=require("jsonwebtoken")
const mongoose=require("mongoose")

dotenv.config()
mongoose.connect(process.env.MONGODB).then(()=> console.log("connection successful")).catch(()=>console.log("error"))



const pool = new Pool({
    user: 'ubuntu',
    database: 'codedecode',
    password: 'Sirajudeen1',
    port: 5432,
    host: process.env.IP,
  })



app.use(cors())
app.use(express.json())
app.post("/verifier",(req,res)=>{
    try{
    const verified=jwt.verify(req.body.token,process.env.SECRET_KEY)
    if(verified){
        res.send({status:200,data:"verification successful"})
    }else{
        res.send({status:403,data:"improper token"})
    }}
    catch(error){
        res.send({status:403,data:"improper token"})
    }
})

app.post("/login",async (req,res)=>{
    console.log(req.body)
    const client=await pool.connect()
    try{
        const data=await client.query('SELECT * FROM users WHERE username=$1',[req.body.username])
        
        if(data.rows[0].password===req.body.password && req.body.username===data.rows[0].username){
            //send token here
            let token=jwt.sign({
                username:data.rows[0].username,
                phone:data.rows[0].phone
            },process.env.SECRET_KEY)
            res.send({"status":200,data:"login successful",token:token})
            client.end()
        }
        else{
            res.send({status:403,data:"please check your username and password"})
            client.end()
        }
    }
    catch(error){
        res.send({status:503,data:"internal error"})
        client.end()
    }
})

app.post("/signup",async (req,res)=>{
    const client=await pool.connect()
    try{
        const data=await client.query('SELECT * FROM users WHERE username=$1',[req.body.username])
        console.log(data.rows)
        if(data.rows.length!==0){
            res.send({status:403,data:"username already present"})
        }else{
            client.query('INSERT INTO users(username,password,phone) VALUES($1,$2,$3)',
            [req.body.username,req.body.password,req.body.number]).then(()=>{
                let userLevel=new User({
                    username:req.body.username,
                    level1:"pending",
                    level2:"pending",
                    level3:"pending",
                    level4:"pending",
                    level5:"pending"
                })
                userLevel.save((err,doc)=>{
                    if(!err){
                        console.log("error occured")
                    }else{
                        console.log("error occured")
                    }
                }) 
                res.send({status:"200","data":"success proceed to login"})
                client.end()
            }).catch(()=>{
                res.send({status:503,"data":"internal network error"})

                client.end()
            })

        }

    }catch(error){
        console.log(error)
        res.send({status:503,data:"internal error or your sql injection has failed"})
    }
})

app.post("/progress",(req,res)=>{
    try{
    const decoded=jwt.verify(req.body.token,process.env.SECRET_KEY)
    let username=decoded.username
    User.find({username:username}).then((level)=>{
        res.send({status:200,data:level[0]})
    }).catch(()=> res.send({status:403,data:null})) 
    }
    catch(error){
        res.send({status:403,data:"internal error"})
    }

})

app.post("/level1",(req,res)=>{
    try{
    if(req.body.flag==="7907140006"){
        const decoded=jwt.verify(req.body.token,process.env.SECRET_KEY)
        if(decoded){
            let username=decoded.username
            User.updateOne({ username: username }, { level1: "success" }).then(()=>console.log("success"))
            .catch(()=>console.log("error"))
            res.send({status:200,flag:"success"})
        }
        else{
            res.send({status:403,data:"token impaired"})
        }
    }else{
        res.send({status:200,flag:"failure"})
    }
    }
    catch(error){
        res.send({status:403,data:"internal error"})
    }

    
})


app.post("/level2",(req,res)=>{
    try{
        console.log(req.body.flag)
    if(req.body.flag==="Y29tbW9kdXM="){
        const decoded=jwt.verify(req.body.token,process.env.SECRET_KEY)
        if(decoded){
            let username=decoded.username
            User.updateOne({ username: username }, { level2: "success" }).then(()=>console.log("success"))
            .catch(()=>console.log("error"))
            res.send({status:200,flag:"success"})
        }
        else{
            res.send({status:403,data:"token impaired"})
        }
    }else{
        res.send({status:200,flag:"failure"})
    }
    }
    catch(error){
        res.send({status:403,data:"internal error"})
    }

    
})

app.post("/level3",(req,res)=>{
    try{
        console.log(req.body.flag)
    if(req.body.flag==="adalovelace"){
        const decoded=jwt.verify(req.body.token,process.env.SECRET_KEY)
        if(decoded){
            let username=decoded.username
            User.updateOne({ username: username }, { level3: "success" }).then(()=>console.log("success"))
            .catch(()=>console.log("error"))
            res.send({status:200,flag:"success"})
        }
        else{
            res.send({status:403,data:"token impaired"})
        }
    }else{
        res.send({status:200,flag:"failure"})
    }
    }
    catch(error){
        res.send({status:403,data:"internal error"})
    }

    
})

app.post("/level4",(req,res)=>{
    try{
        console.log(req.body.flag)
    if(req.body.flag==="pagerank"){
        const decoded=jwt.verify(req.body.token,process.env.SECRET_KEY)
        if(decoded){
            
            // User.updateOne({ username: username }, { level3: "success" }).then(()=>console.log("success"))
            // .catch(()=>console.log("error"))
            res.send({status:200,flag:"success",nextflag:"083b66a64bcd03102f397b7fbba547f3451f9bd29e62b0c8b358d5743d3da4239f3df3cd532f8b1e59d0963868183175f1e0cf1b2dca37f8b4a2d5e5db110493"})

        }
        else{
            res.send({status:403,data:"token impaired"})
        }
    }else{
        res.send({status:200,flag:"failure"})
    }
    }
    catch(error){
        res.send({status:403,data:"internal error"})
    }

    
})

app.post("/flag4",(req,res)=>{
    try{
    console.log(req.body.data)
    if(req.body.data==="9633120385"){
        
        
        let username=req.body.username
        User.updateOne({ username: username }, { level4: "success" }).then(()=>console.log("success"))
        .catch(()=>console.log("error"))
        res.send({status:200,flag:"success move to the final level"})

    
     
    }else{
        res.send({status:200,flag:"failure"})
    }
    }
    catch(error){
        res.send({status:403,data:"internal error"})
    }

    
})
app.post("/level5",(req,res)=>{
    try{
        console.log(req.body.flag)
    if(req.body.flag==="niccolomachiavelli"){
        const decoded=jwt.verify(req.body.token,process.env.SECRET_KEY)
        if(decoded){
            
            // User.updateOne({ username: username }, { level3: "success" }).then(()=>console.log("success"))
            // .catch(()=>console.log("error"))
            const token=jwt.sign({flag:"790714000612345"},"niccolomachiavelli")
            res.send({status:200,flag:"success",nextflag:token})

        }
        else{
            res.send({status:403,data:"token impaired"})
        }
    }else{
        res.send({status:200,flag:"failure"})
    }
    }
    catch(error){
        res.send({status:403,data:"internal error"})
    }

    
})
app.post("/flag5",(req,res)=>{
    try{
        console.log(req.body.data)
    if(req.body.data==="790714000612345"){
        const decoded=jwt.verify(req.body.token,process.env.SECRET_KEY)
        if(decoded){
            let username=decoded.username
            User.updateOne({ username: username }, { level5: "success" }).then(()=>console.log("success"))
            .catch(()=>console.log("error"))
           
            res.send({status:200,flag:"success"})

        }
        else{
            res.send({status:403,data:"token impaired"})
        }
    }else{
        res.send({status:200,flag:"failure"})
    }
    }
    catch(error){
        res.send({status:403,data:"internal error"})
    }

    
})

app.listen(2000,()=>{
    console.log("server started")
})