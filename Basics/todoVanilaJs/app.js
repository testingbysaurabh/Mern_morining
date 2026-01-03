let title = document.getElementById("title")
let Description = document.getElementById("Description")
let isCompleted = document.getElementById("isCompleted")
let addBtn = document.getElementById("addTodo")
let right = document.getElementById("right")

let todo = []
let editId = null   // edit ke liye

// ADD / UPDATE
addBtn.addEventListener("click", () => {

    if (!title.value || !Description.value) {
        alert("enter all field")
        return
    }

    if (editId === null) {
        //  ADD
        let id = Date.now()
        let date = new Date().toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",
        })

        todo.push({
            id: id,
            update: date,
            title: title.value,
            description: Description.value,
            completed: isCompleted.checked
        })

    } else {
        //  UPDATE
        todo = todo.map((item) => {
            return (
                item.id === editId
                    ? {
                        ...item,
                        title: title.value,
                        description: Description.value,
                        completed: isCompleted.checked
                    }
                    : item
            )
        })
        editId = null
        addBtn.textContent = "Add Todo"
    }

    title.value = ""
    Description.value = ""
    isCompleted.checked = false

    renderTodos()
})




// RENDER (map)
function renderTodos() {
    right.innerHTML = ""

    todo.map(item => {

        let div = document.createElement("div")

        let t = document.createElement("p")
        t.textContent = item.title

        let d = document.createElement("p")
        d.textContent = item.description

        let i = document.createElement("p")
        i.textContent = "TaskId : " + item.id

        let c = document.createElement("p")
        c.textContent = "completed : " + item.completed

        let editBtn = document.createElement("button")
        editBtn.textContent = "Edit"
        editBtn.onclick = () => loadEdit(item)

        let delBtn = document.createElement("button")
        delBtn.textContent = "Delete"
        delBtn.onclick = () => deleteTodo(item.id)

        div.appendChild(t)
        div.appendChild(d)
        div.appendChild(i)
        div.appendChild(c)
        div.appendChild(editBtn)
        div.appendChild(delBtn)

        right.appendChild(div)
    })
}

// DELETE
function deleteTodo(id) {
    todo = todo.filter(item => item.id !== id)
    renderTodos()
}

// LOAD DATA FOR EDIT
function loadEdit(item) {
    title.value = item.title
    Description.value = item.description
    isCompleted.checked = item.completed

    editId = item.id
    addBtn.textContent = "Update Todo"
}
