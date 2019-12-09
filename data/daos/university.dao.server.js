let students = require('../students')
let questions = require('../questions')
let answers = require("../answers")
// let widgets = require("../data/widget.mock")

findAllStudents = () => {
  return students

}

createStudent = (student) => {
  students.push(student)
  return students
}

findStudentById = (id) => {
  let temp = null
  students.forEach(
      student => student._id === id ? temp = student : null)
  return temp
}
//
//   function updateStudentById(req, res) {
//     let temp = req.body
//     students.forEach(
//         function (student, i) {
//           if (student._id === req.params.id) {
//             students[i] = temp
//
//           }
//
//         })
//
//     res.json(temp)
//
//   }
//
//   function deleteStudent(req, res) {
//     const id = req.params.id
//     students = students.filter(student => {
//       return student._id !== id
//     })
//     res.send(students)
//   }
//
//   /////////////////////
//
findAllQuestions = () => {
  return questions
}

findAllAnswers = () => {
  return answers
}
//
createQuestion = (question) => {
  questions.push(question)
  return questions
}

answerQuestion = (studentId, questionId, answer) => {
  answers.push({
    answer
  })
  return answers
}
//
findQuestionById = (id) => {
  let temp = null
  questions.forEach(
      question => question._id === id ? temp = question : null)
  return temp
}

findAnswerById = (id) => {
  let temp = null
  answers.forEach(
      answer => answer._id === id ? temp = answer : null)
  return temp
}

findAnswersByStudent = (studentId) => {
  let temp = []
  answers.forEach(
      answer => answer.student == studentId ? temp.push(answer) : null)
  return temp
}

findAnswersByQuestion = (questionId) => {
  let temp = []
  answers.forEach(
      answer => answer.question == questionId ? temp.push(answer) : null)
  return temp
}

findAnswersByStudentAndQuestion = (studentId, questionId) => {
  let temp = []
  answers.forEach(
      answer => answer.question == questionId && answer.student == studentId
          ? temp.push(answer) : null)
  return temp
}
//
//   function updateQuestionById(req, res) {
//     let temp = req.body
//     questions.forEach(
//         function (question, i) {
//           if (question._id === req.params.id) {
//             questions[i] = temp
//
//           }
//
//         })
//
//     res.json(temp)
//
//   }
//
//   function deleteQuestion(req, res) {
//     const id = req.params.id
//     questions = questions.filter(question => {
//       return question._id !== id
//     })
//     res.send(questions)
//   }
//
//   app.post("/api/student", createStudent);
//   app.get("/api/student", findAllStudents);
//   app.get("/api/student/:id", findStudentById);
//   app.put("/api/student/:id", updateStudentById);
//   app.delete("/api/student/:id", deleteStudent);
// ////////////////////////////
//   app.post("/api/question", createQuestion)
//   app.get("/api/question", findAllQuestions);
//   app.get("/api/question/:id", findQuestionById);
//   app.put("/api/question/:id", updateQuestionById);
//   app.delete("/api/question/:id", deleteQuestion);
// ////////////////////////////
//   app.post("/api/student/:sid/question/:qid/answer",)

module.exports = {
  findAllStudents,
  createStudent,
  findStudentById,
  createQuestion,
  findAllQuestions,
  answerQuestion,
  findQuestionById,
  findAllAnswers,
  findAnswerById,
  findAnswersByStudent,
  findAnswersByQuestion,
  findAnswersByStudentAndQuestion
}


