const express = require("express")
const bp = require("body-parser")
const PORT = process.env.PORT || 3000;
const path = require("path")
const index_routes = require("./routes/index")

const app = express()
app.set("view engine","ejs")
app.use(bp({extended:false}))
app.use(bp.json())
app.use(express.static(path.join(__dirname,"public")))
app.use(index_routes)
app.listen(PORT,()=> console.log("escuchando desde",PORT))