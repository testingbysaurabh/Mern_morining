require("dotenv").config()
const express = require("express")
const cors = require("cors")
const { CrudRoutes } = require("./src/Routes/Crud")
const app = express()


app.use(express.json())
app.use(cors())
app.use("/api", CrudRoutes)



app.listen(process.env.PORT, () => {
    console.log(process.env.PORT)
})