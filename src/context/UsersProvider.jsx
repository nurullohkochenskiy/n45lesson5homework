import React, { createContext, useState, useContext, useEffect } from "react";

const UsersContext = createContext();

export function UsersProvider({ children }) {
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/teachers")
      .then((response) => response.json())
      .then((data) => setTeachers(data));
    fetch("http://localhost:3001/students")
      .then((response) => response.json())
      .then((data) => setStudents(data));
  }, []);

  return (
    <UsersContext.Provider value={{ teachers, students }}>
      {children}
    </UsersContext.Provider>
  );
}

export function useUsers() {
  return useContext(UsersContext);
}
