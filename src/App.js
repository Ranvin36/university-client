import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/login.tsx';
import Dashboard from './Pages/dashboard.tsx';
import Student from './Pages/student.tsx';
import Lecturers from './Pages/lecturers.tsx';
import Courses from './Pages/Courses.tsx';
import Payments from './Pages/Payments.tsx';
import CourseDetail from './Pages/CourseDetails.tsx';
import { Navigate, Outlet } from 'react-router-dom'
import { getData } from './localStorage.tsx';
import PrivateRoute from './privateRoute.tsx';

function App() {
  return (
   <Routes>
      <Route path='/' element={<Login/>}/>
      <Route element={<PrivateRoute/>}>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/students' element={<Student/>}/>
        <Route path='/lectures' element={<Lecturers/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/courses/:id' element={<CourseDetail/>}/>
        <Route path='/payments' element={<Payments/>}/>
      </Route>
   </Routes>
  );
}

export default App;
