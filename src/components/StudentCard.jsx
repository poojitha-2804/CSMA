import { Link } from "react-router-dom";
function StudentCard({ student, onDelete }) {
    return (
        <div>
            <h3>{student.name}</h3>
            <p>Email: {student.email}</p>
            <p>Course: {student.course}</p>
            <p>Year: {student.year}</p>
            <Link to={`/students/edit/${student.id}`}>
            <button>Edit</button></Link>{" "}
            <button onClick={() => onDelete(student.id)}>
                Delete</button>
            <hr />
        </div>
    );
}
export default StudentCard;