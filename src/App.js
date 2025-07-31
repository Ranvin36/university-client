import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/login.tsx';
import Dashboard from './Pages/dashboard.tsx';
import Student from './Pages/student.tsx';
import Lecturers from './Pages/lecturers.tsx';

function App() {
  return (
   <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/students' element={<Student/>}/>
      <Route path='/lectures' element={<Lecturers/>}/>
   </Routes>
  );
}

export default App;
