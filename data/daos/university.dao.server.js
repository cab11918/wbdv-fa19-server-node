let students = require('../students')
let questions = require('../questions')
let answers = require("../answers")

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

findAllQuestions = () => {
  return questions
}

findAllAnswers = () => {
  return answers
}

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


