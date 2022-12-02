const Todos = require('../models/todos')

module.exports.getAllTodos = (req, res) => {
    Todos.find((err, todos) => {
        if (err) {
            res.json({
                message: 'Error',
            })
        }

        res.json({
            data: todos,
            message: 'sukses mendapatkan semua data',
        })
    })
}

module.exports.getTodoById = (req, res) => {
    const id = req.params.id
    Todos.findById(id, (err, todo) => {
        if (err){
            res.json({
                message: 'Error while gettind todo',
                error: err,
            })
        }

        res.json({
            data: todo,
            message: 'Success get todo',
        })
    })
}

module.exports.addTodo = (req, res) => {
    const body = req.body

    const NewTodo = new Todos({ name: body.name })
    NewTodo.save().then(() => {
        res.json({
            message: 'data berhasil di simpan',
        })
    })
}

module.exports.deleteTodoById = (req, res) => {
    const id = req.params.id

    Todos.findByIdAndDelete(id, (err, doc) => {
        if(err) {
            res.json({
                message: "failed to delete todo",
                error: err,
            })
        }

        res.json({
            message: `Success delete Todo with id ${id}`,
        })
    })
}

module.exports.updateTodoById = (req, res) => {
    const id = req.params.id
    const payload = req.body
    Todos.findByIdAndUpdate(id, payload, (err, doc) => {
        if(err){
            res.json({
                message: `gagal ubah data dengan id ${id}`
            })
        }
        res.json({
            message: `berhasil ubah data id ${id}`
        })
    })
}