const axios=require("axios")
// axios.post("http://localhost:2000/flag4",{
//     data:"9633120385",
//     username:"ashitha"
// }).then((response)=>console.log(response))

// const jwt=require("jsonwebtoken")
// const decoded=jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbGFnIjoiNzkwNzE0MDAwNjEyMzQ1IiwiaWF0IjoxNjc3MTcxNTMyfQ.CxGPccF_O_zRw6eltRkVP7SZM9s7raAnrl7yUfZ-gYI","niccolomachiavelli")
// if(decoded){
//     console.log(decoded)
// }

axios.post("http://localhost:2000/flag5",{
    data:"790714000612345",
    token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFzaGl0aGEiLCJwaG9uZSI6Ijc5MDcxNDAwMDYiLCJpYXQiOjE2NzcxNzEzODJ9.PkqhYfc2MWJeTm3DfreVEer9L8CRbwiEXZz0ijjNWOQ'
}).then((response)=>console.log(response.data))