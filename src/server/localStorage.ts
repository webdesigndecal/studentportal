import { Student } from "@/firebase/student";

function setUser(student: Student) {
    const studentAsString = JSON.stringify(student);
    return localStorage.setItem("user", studentAsString);
}

function getUser(): Student | null {
    const studentAsString = localStorage.getItem("user");
    if (!studentAsString) {
        return null;
    }
    const student = JSON.parse(studentAsString) as Student;
    return student;
}

export { setUser, getUser };