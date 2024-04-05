import React, { createContext, useState, useContext, useEffect } from "react";

const UsersContext = createContext();

export function UsersProvider({ children }) {
  const [teachers, setTeachers] = useState(
    JSON.parse(localStorage.getItem("teachers")) || []
  );
  const [students, setStudents] = useState(
    JSON.parse(localStorage.getItem("students")) || []
  );

  useEffect(() => {
    if (!teachers.length) {
      fetch("http://localhost:3001/teachers")
        .then((response) => response.json())
        .then((data) => setTeachers(data));
    }
    if (!students.length) {
      fetch("http://localhost:3001/students")
        .then((response) => response.json())
        .then((data) => setStudents(data));
    }
  }, []);

  const delTeacher = (id) => {
    const newList = teachers.filter((teacher) => teacher.id !== id);
    setTeachers(newList);
  };
  

  localStorage.setItem("teachers", JSON.stringify(teachers));
  localStorage.setItem("students", JSON.stringify(students));
  return (
    <UsersContext.Provider value={{ teachers, students,delTeacher }}>
      {children}
    </UsersContext.Provider>
  );
}

export function useUsers() {
  return useContext(UsersContext);
}
