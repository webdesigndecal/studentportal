import { Student } from "@/firebase/student";

function setLocalStorageUser(student: Student) {
    const studentAsString = JSON.stringify(student);
    return localStorage.setItem("user", studentAsString);
}

function getLocalStorageUser(): Student | null {
    const studentAsString = localStorage.getItem("user");
    if (!studentAsString) {
        return null;
    }
    const student = JSON.parse(studentAsString) as Student;
    return student;
}

export { setLocalStorageUser, getLocalStorageUser };