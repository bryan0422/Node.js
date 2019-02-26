const express = require("express")
const router = express.Router()

router.get("/",(req,res,next)=> {
    res.render("index",{path:"/"})
    
})
router.get("/form",(req,res,next)=> {
    res.render("form",{path:"/form",nombre:"Enano"})
    res.send({nombre:"eknkenfkwef"})
})
router.post("",(req,res,next)=>{
    let nombre = req.body.nombre;
    res.render("form",{path:"/form",nombre:nombre})
})
module.exports=router