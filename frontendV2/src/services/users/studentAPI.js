import axios from "axios";

const BASE_URL = "http://localhost:3001";

export async function fetchStudents() {
  const response = await axios.get(`${BASE_URL}/students`);

  if (response.data.status >= 400) {
    throw new Error(response.data.message);
  }

  return response.data.data.students;
}

export async function fetchStudent(studentId) {
  const response = await axios.get(`${BASE_URL}/students/${studentId}`);

  if (response.data.status >= 400) {
    throw new Error(response.data.message);
  }

  return response.data.data.student;
}

export async function createNewStudent(student) {
  const response = await axios.post(`${BASE_URL}/students`, student);

  if (response.data.status >= 400) {
    throw new Error(response.data.message);
  }

  return response.data.data.student;
}

export async function editStudent(updatedStudent) {
  const response = await axios.put(
    `${BASE_URL}/students/${updatedStudent.id}`,
    updatedStudent
  );

  if (response.data.status >= 400) {
    throw new Error(response.data.message);
  }

  return response.data.data.student;
}

export async function deleteStudent(studentId) {
  const response = await axios.delete(`${BASE_URL}/students/${studentId}`);

  if (response.data.status >= 400) {
    throw new Error(response.data.message);
  }

  return response.data;
}
