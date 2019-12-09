let students = require('../data/students')
let dao = require('../data/daos/university.dao.server')

module.exports = function (app) {

  function findAllStudents(req, res) {
    res.json(dao.findAllStudents())
  }

  function createStudent(req, res) {

    res.json(dao.createStudent(req.body))
  }

  function findStudentById(req, res) {

    res.send(dao.findStudentById(req.params.id))
  }

  function updateStudentById(req, res) {
    let temp = req.body
    students.forEach(
        function (student, i) {
          if (student._id === req.params.id) {
            students[i] = temp

          }

        })

    res.json(temp)

  }

  function deleteStudent(req, res) {
    const id = req.params.id
    students = students.filter(student => {
      return student._id !== id
    })
    res.send(students)
  }

  function findAllQuestions(req, res) {
    res.json(dao.findAllQuestions())
  }

  function createQuestion(req, res) {
    res.json(dao.createQuestion(req.body))
  }

  function findQuestionById(req, res) {

    res.send(dao.findQuestionById(req.params.id))
  }

  function updateQuestionById(req, res) {
    let temp = req.body
    questions.forEach(
        function (question, i) {
          if (question._id === req.params.id) {
            questions[i] = temp

          }

        })

    res.json(temp)

  }

  function deleteQuestion(req, res) {
    const id = req.params.id
    questions = questions.filter(question => {
      return question._id !== id
    })
    res.send(questions)
  }

  function findAllAnswers(req, res) {
    res.json(dao.findAllAnswers())
  }

  function findAnswerById(req, res) {
    res.send(dao.findAnswerById(req.params.id))
  }

  function findAnswersByStudent(req, res) {
    res.send(dao.findAnswersByStudent(req.params.sid))
  }

  function findAnswersByQuestion(req, res) {
    res.send(dao.findAnswersByQuestion(req.params.qid))

  }

  function findAnswersByStudentAndQuestion(req, res) {
    res.send(
        dao.findAnswersByStudentAndQuestion(req.params.sid, req.params.qid))
  }

  app.post("/api/student", createStudent);
  app.get("/api/student", findAllStudents);
  app.get("/api/student/:id", findStudentById);
  app.put("/api/student/:id", updateStudentById);
  app.delete("/api/student/:id", deleteStudent);
  app.post("/api/question", createQuestion)
  app.get("/api/question", findAllQuestions);
  app.get("/api/question/:id", findQuestionById);
  app.put("/api/question/:id", updateQuestionById);
  app.delete("/api/question/:id", deleteQuestion);
  app.post("/api/student/:sid/question/:qid/answer",)
  app.get("/api/answer", findAllAnswers),
      app.get("/api/answer/:id", findAnswerById);
  app.get("/api/student/:sid/answer", findAnswersByStudent);
  app.get("/api/question/:qid/answer", findAnswersByQuestion);
  app.get("/api/question/:qid/student/:sid/answer",
      findAnswersByStudentAndQuestion);
  app.get("/api/student/:sid/question/:qid/answer",
      findAnswersByStudentAndQuestion);

}

