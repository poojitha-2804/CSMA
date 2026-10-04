import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";
import About from "./pages/About";
import Contact from "./pages/Contact";
function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <hr />
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/home"
                    element={<Home />}
                />
                <Route
                    path="/students"
                    element={<Students />}
                />
                <Route
                    path="/students/add"
                    element={<AddStudent />}
                />
                <Route
                    path="/students/edit/:id"
                    element={<EditStudent />}
                />
                <Route
                    path="/about"
                    element={<About />}
                />
                <Route
                    path="/contact"
                    element={<Contact />}
                />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}
export default App;