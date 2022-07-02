import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Header from "./components/Shared/Header";
import AddTodo from "./components/Todo/AddTodo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./components/Login/RequireAuth";
import Calendar from "./components/Calendar/Calendar.jsx";
import Footer from "./components/Shared/Footer/Footer.jsx";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/addtodo"
          element={
            <RequireAuth>
              <AddTodo />
            </RequireAuth>
          }
        />
        <Route path="/calendar" element={<Calendar></Calendar>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
