import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useStudents} from "../context/StudentContext";
function AddStudent() {
    const navigate = useNavigate();
    const {
        addStudent
    } = useStudents();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [course, setCourse] = useState("");
    const [year, setYear] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !course || !year) {
            alert("Please fill all fields");
            return;
        }
        const student = {
            name: name,
            email: email,
            course: course,
            year: Number(year)
        };
        addStudent(student);
        alert("Student Added Successfully");
        navigate("/students");
    };
    return (
        <div>
            <h1>
                Add Student
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
                    Add Student
                </button>
            </form>
        </div>
    );
}
export default AddStudent;