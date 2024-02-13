import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import { ButtonGroup, Dropdown, ToggleButton } from 'react-bootstrap';
import Header from '../Components/Header'
import { registerAPI } from '../Services/allAPI';
import {useNavigate} from'react-router-dom'

function Registration() {
 const navigate =new useNavigate();
    const [studProfile, setStudProfile] = useState({
        fname: "", lname: "", email: "", addr1: "", pwd: "", mob: "", gender: "", course: "", joinDate: "", appStatus: "Incomplete"
    })
    const [validated, setValidated] = useState(false);
   
    const [radioValue, setRadioValue] = useState('Male');
    const radios = [
        { name: 'Male', value: '1' },
        { name: 'Female', value: '2' },

    ];
    useEffect(() => {
        setStudProfile({ ...studProfile, appStatus: "Registrationcomplete" })

    }, [validated]);
    useEffect(() => {
        setStudProfile({ ...studProfile, gender: radioValue})

    }, [radioValue]);

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault(); 
                event.stopPropagation();
        }

        event.preventDefault();

        console.log(studProfile);
        const{fname, lname, email, addr1, pwd, mob, gender, course,joinDate}=studProfile;

        if(!fname, !lname, !email, !addr1, !pwd, !mob, !gender, !course, !joinDate){
            alert("Please fill the form completely")
        }else{
           try{
            const result =await registerAPI(studProfile)
            console.log(result);
            if(result.status==200){
                alert(`Registered successfully`)
                setStudProfile({
                    fname: "", lname: "", email: "", addr1: "", pwd: "", mob: "", gender: "", course: "", joinDate: "", appStatus: "Incomplete"
                })
                navigate('/students')

            }else{
                alert(result.response.data)
            }
           }catch(err){
            console.log(err);
           }
        }
    };

    const handleDropdown = (event, eventKey) => {
        console.log(eventKey.target.innerHTML);
        document.getElementById('dropdown-basic').innerHTML = eventKey.target.innerHTML
        setStudProfile({ ...studProfile, course: eventKey.target.innerHTML })
    };


    return (
        <div>
            <Header bgColor='rgb(71, 71, 196)' />
            <div className='mt-5 '>
                <div style={{ width: '80%', height: '80vh' }}>
                    <div style={{ width: '100%', height: '50px' }} className='bg-primary text-light p-2 ps-5 fs-5 fw-bolder text-center'>Personal Details</div>

                    <div className="personal">
                        <Form id="regForm" noValidate validated={validated} className='w-75 p-3' style={{ marginLeft: '200px' }}>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="4" controlId="validationCustom01">
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="First name"
                                        defaultValue=""
                                        onChange={e => setStudProfile({ ...studProfile, fname: e.target.value })}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationCustom02">
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Last name"
                                        defaultValue=""
                                        onChange={e => setStudProfile({ ...studProfile, lname: e.target.value })}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                    <Form.Label>Email</Form.Label>
                                    <InputGroup hasValidation>

                                        <Form.Control
                                            type="text"
                                            placeholder="Email"
                                            required
                                            onChange={e => setStudProfile({ ...studProfile, email: e.target.value })}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Enter a valid Email
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Row>

                            <Form.Group as={Col} md="12" controlId="validationCustom07">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    required
                                    as="textarea"
                                    rows={2}
                                    placeholder=""
                                    defaultValue=""
                                    onChange={e => setStudProfile({ ...studProfile, addr1: e.target.value })}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>



                            <Row className="mb-3">
                                <Form.Group as={Col} md="6" controlId="validationCustom03">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" required onChange={e => setStudProfile({ ...studProfile, pwd: e.target.value })} />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid password.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} md="3" controlId="validationCustom05">
                                    <Form.Label>Mobile</Form.Label>
                                    <Form.Control type="number" placeholder="" required onChange={e => setStudProfile({ ...studProfile, mob: e.target.value })} />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid number.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="3" controlId="validationCustom04">
                                    <Form.Label>Gender</Form.Label>
                                    {/* <Form.Control type="text" placeholder="" required onChange={e => setStudProfile({ ...studProfile, gender: e.target.value })} /> */}
                                    <ButtonGroup className='m-2'>
                                        {radios.map((radio, idx) => (
                                            <ToggleButton
                                                key={idx}
                                                id={`radio-${idx}`}
                                                type="radio"
                                                variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                                                name="radio"
                                                value={radio.value}
                                                checked={radioValue === radio.name}
                                                onChange={(e) => setRadioValue(radio.name)}
                                            >
                                                {radio.name}
                                            </ToggleButton>
                                        ))}
                                    </ButtonGroup>
                                </Form.Group>
                            </Row>

                            {/* <Button type="submit">Save</Button> */}
                        </Form>
                    </div>

                    <div style={{ width: '100%', height: '50px' }} className='bg-primary text-light p-2 ps-5 fs-5 fw-bolder align-items center'>Educational Details</div>
                    <div className="education">
                        <Form noValidate validated={validated} onSubmit={handleSubmit} className='w-75 p-3' style={{ marginLeft: '200px' }}>
                            <Row className="mb-3">

                                <Form.Group as={Col} md="4" controlId="">
                                    <Form.Label>Course</Form.Label>
                                    <Dropdown onSelect={handleDropdown} >
                                        <Dropdown.Toggle variant="success" id="dropdown-basic" >
                                            Choose from the options
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu >
                                            <Dropdown.Item href="#" eventKey="1" className='fw-bolder'>MEARN Stack</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item href="#" eventKey="2" className='fw-bolder'>Software Testing</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item href="#" eventKey="3" className='fw-bolder'>Python Django</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item href="#" eventKey="4" className='fw-bolder'>Java Programming</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item href="#" eventKey="5" className='fw-bolder'>ASP.net MVC</Dropdown.Item>
                                            <Dropdown.Divider />
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Form.Control.Feedback>Good</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationCustom10">
                                    <Form.Label>Joining Date</Form.Label>
                                    <Form.Control
                                        required
                                        type="date"
                                        placeholder="Select Date"
                                        defaultValue=""
                                        onChange={e => setStudProfile({ ...studProfile, joinDate: e.target.value })}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>

                            </Row>

                            <Button type="submit" onClick={handleSubmit} className='me-3'>Register</Button>
                        </Form>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Registration