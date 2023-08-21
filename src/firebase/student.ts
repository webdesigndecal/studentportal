import { doc, getDoc } from "firebase/firestore";
import db from "./firebaseApp";

export type Student = {
    studentId: string;
    name: string;
    assignedTa: string;
    email: string;
    // TODO: Change from any to specific data
    grades: {[key: string]: number};
}

export async function getStudentById(studentId: string) {
    const docRef = doc(db, 'students', studentId);
    const studentSnapshot = await getDoc(docRef)
    if (studentSnapshot.exists()) {
        const data = {
            id: studentSnapshot.id,
            ...studentSnapshot.data()
        }
        const student = parseStudent(data);
        return student;
    }
    // None found
    console.error("No document with id", studentId)
    return undefined;
}

// Change from any
function parseStudent(studentData: any) : Student {
    const student = {
        studentId: studentData.id,
        name: studentData.name,
        assignedTa: studentData.assigned_ta,
        email: studentData.email,
        grades: studentData.grades,
    } as Student;
    return student;
}