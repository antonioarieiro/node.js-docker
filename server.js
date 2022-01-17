const bodyParser = require('body-parser');
const express = require('express');
const NotasController = require('./controller/controllerNotasAluno');

const PORT = 3000

app = express();
app.use(bodyParser.json())

app.get('/', async (req, res) => {
  const { status, student, aprovedStudents, reprovedStudenst } = await NotasController.getAll();
  res.status(status).json({ 
    'AllNotes': student, 
    'AprovedStudentsId': aprovedStudents, 
    'ReprovedStudentes': reprovedStudenst
  })
})

//get user by id exmp localhost:3000/user/1 Retorna o user com id 1 no banco
app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  const { status, studentById } = await NotasController.getStudentById(id)
  res.status(status).json({ 'Student': studentById})
})

//Cadastra um novo usuario recebendo um corpo json {id e name} id é a pk e fk importante para criar o aluno e ja vincular sua nova
app.post('/new-student', async (req,res) => {
  const { id, name } = req.body;
  const { status, message, ident, studentName } = await NotasController.createNewStudent(id, name)
  res.status(status).json({ message:message, 'IdNewUser': ident, 'studentName': studentName })
})

app.get('/adm', async (req, res) => {
  const { status, AdmView } = await NotasController.getAllAdm();
  res.status(status).json({'All Students and notes': AdmView})
})

// rota para os adm atulizar as notas com o id do aluno
app.put('/notas-admin', async (req,res) => {
  const {id, n1,n2,n3,n4 } = req.body;
  const { status, message, student, newN1, newN2, newN3,newN4
  } = await NotasController.updateNotesAdmin(id, n1, n2, n3, n4)
  res.status(status).json({message:message, 'idSTudent': student, "N1": newN1, "N2": newN2, "N3": newN3, "N4": newN4})
})

app.listen(PORT)
