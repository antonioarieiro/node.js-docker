const notes = require('../service/serviceNotasAluno');

const getAll = async () => {
  const allNotes = await notes.getAllStudent();
  const { allStudents, aprovedStudents, reprovedStudenst } = await allNotes
  return {
    status: 200,
    student: allStudents,
    aprovedStudents: aprovedStudents,
    reprovedStudenst: reprovedStudenst
  }
};

const getStudentById = async (id) => {
  const { status, studentById } = await notes.getStudentById(id)
  return {
    status: status,
    studentById: studentById
  }
}

const createNewStudent = async (id, name) => {
  const { status, message, ident, studentName } = await notes.newStudent(id, name);
  return {
    status: status,
    message: message,
    ident: id,
    studentName: name
  }
}

const updateNotesAdmin = async (id, n1, n2, n3, n4) => {
  const { status, message } = await notes.updateNotesAdmin(id, n1, n2, n3, n4);
  return {
    status: status,
    message: message,
    student: id,
    newN1: n1,
    newN2: n2,
    newN3: n3,
    newN4: n4
  }
}

const getAllAdm = async () => {
  const { status, AdmView } = await notes.getAllAdmin();
  return { status: status, AdmView: AdmView }
}

module.exports = {
  getAll,
  getStudentById,
  createNewStudent,
  updateNotesAdmin,
  getAllAdm
}