import express from 'express'

const app = express.Router();

const question = {
  _id: 1,
  title: '¿Como reutilizo un componente en android?',
  description: 'esta es una buena pregunta',
  createAt: new Date(),
  icon: 'devicon-android-plain',
  answers: [],
  user:{
    firstName: 'Alexander',
    lastName: 'Flores',
    email: 'alex@gmail.com',
    password: '1234'
  }
}

const questions = new Array(10).fill(question)

app.get('/',(req,res) => res.status(200).json(questions))

app.get('/:id', (req,res) => res.status(200).json(question))

export default app;
