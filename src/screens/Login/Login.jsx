import './Login.scss'

import LoginForm from '../../components/LoginForm/LoginForm'

export const Login = () => {
    return (
        <div className="login-container">
            <section className="section-dark sec-dark-height"></section>
            <section className="section-light sec-light-height">
                <div className="container d-flex justify-content-center">
                    <div className="card login-card">
                        <div className="card-body p-4">
                            <h5 className='card-heading'>Login</h5>
                            <LoginForm/>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}