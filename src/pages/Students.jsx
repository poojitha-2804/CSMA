import StudentCard from "../components/StudentCard";
import { useStudents } from "../context/StudentContext";
function Students() {
    const { students, deleteStudent } = useStudents();
    return (
        <div>
            <h1>Students</h1>
            <p>
                Total Students: {students.length}
            </p>
            {students.length === 0 ? (
                <p>
                    No students available.
                </p>
            ) : (
                students.map((student) => (
                    <StudentCard
                        key={student.id}
                        student={student}
                        onDelete={deleteStudent}/>
                ))
            )}
        </div>
    );
}
export default Students;