const Notes = require('../model/modelNotasAluno');

const getAllStudent = async () => {
  const allStudents = await Notes.getAllStudents();
  const aprovedStudents = await Notes.getApprovedStudents();
  const reprovedStudenst = await Notes.getReprovedStudents();
  // console.log('students do service',students.rows)
  return {
    allStudents: allStudents.rows,
    aprovedStudents: aprovedStudents.rows,
    reprovedStudenst: reprovedStudenst.rows
  }
}

const getStudentById = async (id) => {
  const studentById = await Notes.getStudentById(id);
  if (studentById.rows.length > 0 && id !== 'undefined') {
    return {
      status: 200,
      studentById: studentById.rows
    }
  } else {
    return {
      status: 404,
      studentById: "dont exists"
    }
  }
}

const newStudent = async (id, name) => {
  if(id && name) {
    const student = await Notes.newStudent(id, name);
    const createNotes = await Notes.createNotesForStudent(id);
    return {
      status: 201,
      message: 'create sucefull',
      ident: id,
      studentName: name
    }
  }else {
    return {
      status:404,
      message:'error'
    }
  }
}

const updateNotesAdmin = async (id, n1, n2, n3, n4) => {
  const updateNotes = await Notes.updateNotes(id, n1, n2, n3, n4);
  return {
    status:200,
    message:'Update sucefull',
    updateNotes
  }
}

const getAllAdmin = async() => {
  const allNameAndNotes = await Notes.adminView()
  return {
    status: 200,
    AdmView: allNameAndNotes.rows
  }
}

module.exports = {
  getAllStudent,
  getStudentById,
  newStudent,
  updateNotesAdmin,
  getAllAdmin
}
