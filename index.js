const express = require("express")
const mongoose= require("mongoose")
const app = express()
const PORT = 5000

app.use(express.json())

app.use ('/api',require('./routes/personRoutes'))
mongoose.connect("mongodb+srv://adembouguerra17:<zudgygoo>adem@cluster0.cbxndrx.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log ("database connected"))
.catch(()=>{ if (err) throw err})


app.listen(PORT , () => console.log('listening on port',PORT))