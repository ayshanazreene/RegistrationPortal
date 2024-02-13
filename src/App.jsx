
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Registration from './Pages/Registration'
import StudentDetails from './Pages/StudentDetails'

function App() {


  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<Registration/>} />
      <Route path='/students' element={<StudentDetails/>} />
     </Routes>
      
    </>
  )
}

export default App
