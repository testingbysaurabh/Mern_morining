const express = require('express')
const { v4: uuid } = require("uuid")
const router = express.Router()


let db = [
    {
        id: uuid(),
        name: "Saurabh Singh",
        age: 34,
        degination: "devloper"
    },
    {
        id: uuid(),
        name: "aaaaa",
        age: 34,
        degination: "devloper"
    },
    {
        id: uuid(),
        name: "bbbb",
        age: 34,
        degination: "devloper"
    },
    {
        id: uuid(),
        name: "cccccc",
        age: 34,
        degination: "devloper"
    },
]


///READ
router.get("/data", (req, res) => {
    res.status(200).json(db)
})



/////CREATE
router.post("/adddata", (req, res) => {
    const { name, age, degination } = req.body
    db.push({ name, age, degination, id: uuid() })

    res.status(201).json({ msg: "Data Added", Data: db })
})



////edit
router.patch("/edit/:id", (req, res) => {
    const { name, age, degination } = req.body
    const { id } = req.params

    for (let item of db) {
        if (item.id === id) {
            item.name = name,
                item.age = age,
                item.degination = degination,
                isUpdated = true;
            break;
        }
    }
    // console.log(db)
    res.status(201).json({ msg: "data Update", data: db })

})



///delete
router.delete("/delete/:id", (req, res) => {
    const { id } = req.params
    const filtered = db.filter((items) => {
        return items.id !== id
    })
    db=filtered
    res.status(200).json({ msg: "data delete", Data: db })
})





module.exports = {
    CrudRoutes: router
}
