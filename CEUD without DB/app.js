require("dotenv").config()
const express = require("express")
const { CrudRoutes } = require("./src/Routes/Crud")
const app = express()


app.use(express.json())
app.use("/api", CrudRoutes)



app.listen(process.env.PORT, () => {
    console.log(process.env.PORT)
})