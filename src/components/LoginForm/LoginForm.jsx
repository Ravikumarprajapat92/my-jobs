import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './LoginForm.scss';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import REQUEST from '../../utils/request';
import axios from '../../Axios'

const LoginForm = () => {
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            handleLogin(event);
        }
        setValidated(true);
    };

    const handleLogin = (e) => {
        const data = {
            email: e.target[0].value,
            password: e.target[1].value
        }
        axios.post(REQUEST.LOGIN, data).then(
            (res) => {
                asyncLocalStorage.setItem('access_token', res.data.data.token).then(
                    () => {
                        asyncLocalStorage.getItem('access_token').then(
                            
                            res => navigate('/job-posts')
                        )
                    }
                )
            }, (err) => {
                console.log(err, 'err')
            }
        )
    }

    const asyncLocalStorage = {
        setItem: function (key, value) {
            return Promise.resolve().then(function () {
                localStorage.setItem(key, value);
            });
        },
        getItem: function (key) {
            return Promise.resolve().then(function () {
                return localStorage.getItem(key);
            });
        }
    };

    return (
        <Form className='mb-4' noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className='mb-2' controlId="validationCustomEmail">
                <Form.Label>Email Address</Form.Label>
                <InputGroup hasValidation>
                    <Form.Control
                        type="email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        placeholder="Enter your email"
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter your email.
                    </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
            <Form.Group className='mb-2' controlId="validationCustomPassword">
                <Form.Label>Password</Form.Label>
                <InputGroup hasValidation>
                    <Form.Control
                        type="password"
                        placeholder="Enter your password"
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter your password.
                    </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
            <div className='d-flex justify-content-center align-items-center py-4'>
                <Button className='primary-btn' type="submit">Login</Button>
            </div>
        </Form>
    )
}

export default LoginForm