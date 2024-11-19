import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Classroom = () => {
    const [classroom, setClassroom] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/auth/classroom')
            .then(result => {
                if (result.data.Status) {
                    setClassroom(result.data.Result)
                } else {
                    alert(result.data.Error)
                }
            }).catch(err => console.log(err))
    }, [])

    return (
        <div className='px-5 mt-3'>
            <div className='d-flex justify-content-center'>
                <h3>Classrooms List</h3>
            </div>

            {/* <Link to='/dashboard/add_classroom' className='btn btn-success'>Add Classroom</Link> */}
            
            <div className='mt-3'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Classrooms</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classroom.map(c => {
                                <tr key={c.class_code}>
                                    <td>{c.classname}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Classroom
