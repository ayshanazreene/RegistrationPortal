import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Table } from 'react-bootstrap'
import { getAllStudProfileAPI } from '../Services/allAPI'

function StudentDetails() {
    const [allStudents, setAllStudents] = useState([{
        fname:'',lname:'',email:'',mob:'',course:'',joinDate:''
    }])
    useEffect(() => {
      getAllStudProfiles();
  
    }, [])
    const getAllStudProfiles = async () => {
      const result = await getAllStudProfileAPI()
      if (result.status === 200) {
        console.log(result);
        setAllStudents(result.data)
      console.log(allStudents);
      } else {
        console.log("API failed");
        setAllStudents([{
          fname:'',lname:'',email:'',mob:'',course:'',joinDate:''
      }])
      }
    }

  return (
    <div>
    <Header bgColor='rgb(71, 71, 196)' />    
    <>
      <Table responsive className='m-5 w-75 border'>
        <thead>
          <tr>
           
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Course</th>
            <th>Join Date</th>
            <th></th>


          </tr>
        </thead>
        <tbody>
          {
            allStudents?.length > 0 ? allStudents.map(student => (
              <tr key={student._id} className='border'>
                
                <td>{student.fname + ' ' + student.lname}</td>
                <td>{student.email}</td>
                <td>{student.mob}</td>
                <td>{student.course}</td>
                <td>{student.joinDate}</td>
              

              </tr>
            )) : null
          }


        </tbody>
      </Table>
    </>
    </div>
  )
}

export default StudentDetails