import './Navbar.scss'

import { Link, Outlet, useNavigate } from 'react-router-dom'

import { IMAGES } from '../../utils/constants/Constants'
import { useEffect, useState } from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

export const Navbar = () => {
    const navigate = useNavigate();;
    const [isLogedIn, setIsLogedIn] = useState(false);
    const [logedInUserData, setLogedInUserData] = useState(null);

    useEffect(() => {
        if(!isLogedIn){
            checkIsLogin()
        }
    });

    const checkIsLogin = () => {
        const ACCESS_TOKEN = localStorage.getItem('access_token');
        if (ACCESS_TOKEN) {
            const userData = parseJwt(ACCESS_TOKEN);
            if (userData) {
                setIsLogedIn(true);
                setLogedInUserData(userData);
            }
        }

    }

    const parseJwt = (token) => {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    }

    const handleLogout = () => {
        localStorage.clear();
        setIsLogedIn(false);
        setLogedInUserData(null)
        navigate('/')
    }

    return (
        <>
            <nav className="container-fluid navContainer">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex justify-content-between align-items-center">
                            <Link to={'/'}>
                                <img src={IMAGES.LOGO} alt="Logo" />
                            </Link>
                            {isLogedIn && 
                            <div className='avatar-container'>
                                <span className='avatar'>{logedInUserData.name.split('')[0]}</span>
                                <OverlayTrigger
                                    trigger="click"
                                    rootClose
                                    placement="bottom"
                                    overlay={
                                        <Popover id={`popover-positioned-bottom`}>
                                            <Popover.Body className='py-2'>
                                                <ul className='list-unstyled m-0'>
                                                    <li className='nav-list' onClick={handleLogout}>Logout</li>
                                                </ul>
                                            </Popover.Body>
                                        </Popover>
                                    }
                                >
                                    <span className='down-arrow'></span>
                                </OverlayTrigger>

                            </div>}
                            {!isLogedIn && <button className='btn login-btn' onClick={() => { navigate('/login') }}>Login</button>}
                        </div>
                        <hr className='nav-hr' />
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}
