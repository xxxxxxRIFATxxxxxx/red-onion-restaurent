import React from 'react';
import { Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Signup.css';
import logo from '../../images/logo-black.png';

const Signup = () => {
    return (
        <div className="form small-font">
            <div className="text-center pt-5">
                <img className="img-fluid logo" src={logo} alt="red onion logo" />
            </div>

            <Form className="container mx-auto">
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control className="silver-bg text-muted small-font border-1 p-3" type="text" placeholder="Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className="silver-bg text-muted small-font border-1 p-3" type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className="silver-bg text-muted small-font border-1 p-3" type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Control className="silver-bg text-muted small-font border-1 p-3" type="password" placeholder="Confirm Password" />
                </Form.Group>

                <button className="btn btn-danger w-100 small-font p-3 mb-3">Sign up</button>

                <div className="text-center">
                    <NavLink to="/login" className="text-danger text-decoration-none small-font">Already have an account</NavLink>
                </div>
            </Form>
        </div>
    );
};

export default Signup;