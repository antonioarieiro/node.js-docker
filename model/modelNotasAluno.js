const db = require('./db');

const getAllStudents = async () => {
  const con = await db.connect()
  //retorna todos os alunos
  const AllStudents = await con.query(
    `SELECT (idaluno, n1,n2,n3,n4) FROM notas`
  );
  con.end()
  return AllStudents
}

const getApprovedStudents = async () => {
  const con = await db.connect()
  const ApproveStudents = await con.query(
    `
    SELECT (idaluno, n1, n2, n3, n4 ) 
    FROM notas WHERE ( n1 + n2 + n3 + n4 ) / 4 >= 6
    `
  );
  con.end();
  return ApproveStudents;
}

const getReprovedStudents = async () => {
  const con = await db.connect()
  const ApproveStudents = await con.query(
    `
    SELECT (idaluno, n1, n2, n3, n4 )
    FROM notas WHERE ( n1 + n2 + n3 + n4 ) / 4 < 6
    `
  );
  con.end();
  return ApproveStudents;
}

const getStudentById = async (id) => {
  const con = await db.connect()
  const studentById = await con.query(
    `
    SELECT * FROM notas WHERE notas.id = ${id}
    `
  )
  con.end();
  return studentById
}

const newStudent = async (id, name) => {
  const con = await db.connect();
  const newStudent = await con.query(
    `INSERT INTO alunos(id, name) VALUES(${id}, '${name}')`,
    // or INSERT INTO alunos (id, name) VALUES (?, ?), [id], [name]
  );
  con.end();
  return newStudent
}

const createNotesForStudent = async (id) => {
  const con = await db.connect();
  const createNotes = await con.query(
    `INSERT INTO notas(id) VALUES (${id})`
  )
  con.end();
  return createNotes;
}

const updateNotes = async (id, n1, n2, n3, n4) => {
  const con = await db.connect();
  const updateNotes = await con.query(
    `UPDATE notas SET n1 = ${n1}, n2 = ${n2}, n3 = ${n3}, n4 = ${n4} WHERE id = ${id}`
  );
  con.end()
  return updateNotes;
}

const adminView = async() => {
  const con = await db.connect();
  const updateNotes = await con.query(
    `SELECT * FROM notas INNER JOIN alunos ON  notas.id = alunos.id `
  )
  con.end()
  return updateNotes;
}

module.exports = {
  getAllStudents,
  getApprovedStudents,
  getReprovedStudents,
  getStudentById,
  newStudent,
  createNotesForStudent,
  updateNotes,
  adminView
}
