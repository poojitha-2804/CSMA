import { useState } from "react";
import {useNavigate,useParams} from "react-router-dom";
import {useStudents} from "../context/StudentContext";
function EditStudent() {
    const { id } = useParams();
    const navigate = useNavigate();
    const {
        students,
        updateStudent
    } = useStudents();
    const student = students.find(
        (student) =>
            student.id === Number(id)
    );
    const [name, setName] = useState(
        student ? student.name : ""
    );
    const [email, setEmail] = useState(
        student ? student.email : ""
    );
    const [course, setCourse] = useState(
        student ? student.course : ""
    );
    const [year, setYear] = useState(
        student ? student.year : ""
    );
    if (!student) {
        return (
            <div>
                <h1>
                    Student Not Found
                </h1>
                <button
                    onClick={() =>
                        navigate("/students")
                    }
                >
                    Back to Students
                </button>
            </div>
        );
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedStudent = {
            id: student.id,
            name: name,
            email: email,
            course: course,
            year: Number(year)
        };
        updateStudent(updatedStudent);
        alert("Student Updated Successfully");
        navigate("/students");
    };
    return (
        <div>
            <h1>
                Edit Student
            </h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name:
                    </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) =>
                            setName(e.target.value)
                        }
                    />
                </div>
                <br />
                <div>
                    <label>
                        Email:
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                    />
                </div>
                <br />
                <div>
                    <label>
                        Course:
                    </label>
                    <input
                        type="text"
                        value={course}
                        onChange={(e) =>
                            setCourse(e.target.value)
                        }
                    />
                </div>
                <br />
                <div>
                    <label>
                        Year:
                    </label>
                    <input
                        type="number"
                        value={year}
                        onChange={(e) =>
                            setYear(e.target.value)
                        }
                    />
                </div>
                <br />
                <button type="submit">
                    Update Student
                </button>
                {" "}
                <button
                    type="button"
                    onClick={() =>
                        navigate("/students")
                    }
                >
                    Cancel
                </button>
            </form>
        </div>
    );
}
export default EditStudent;