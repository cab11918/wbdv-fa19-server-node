let students = require("../data/students")
// let questions = require("../data/questions")
// let answers = require("../data/answers")
// let widgets = require("../data/widget.mock")


module.exports = function (app) {

  function findAllStudents(req, res) {
    res.send(students)
  }

  function findWidgetById(req, res) {

  }

  function createWidget(req, res) {

  }

  function updateWidget(req, res) {

  }

  function deleteWidget(req, res) {
    // const id = req.params.wid
    // widgets = widgets.filter(widget => {
    //   return widget._id !== id
    // })
    // res.send(widgets)
  }

  app.get("/api/students", findAllStudents);

}

