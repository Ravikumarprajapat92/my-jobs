import './LandingPage.scss';
import '../../index.scss'


import Button from 'react-bootstrap/Button';

import { IMAGES } from '../../utils/constants/Constants';
import { useNavigate } from 'react-router-dom';


export const LandingPage = () => {
  const navigate = useNavigate()
  

  const handleGetStarted = () => {
    const access_token = localStorage.getItem('access_token');
    if(access_token){
      navigate('/job-posts')
    }else{
      navigate('/login')
    }
  }

  return (
    <div className='landing-page-container'>
      <section className='section-dark'>
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-6 d-flex flex-column justify-content-center text-light pb-5">
              <h1 className='heading'>Welcome To <br /> My<span className='logo-color'>Jobs</span></h1>
              <Button className='primary-btn mb-2' onClick={handleGetStarted}>Get Started</Button>
            </div>
            <div className="col-md-6">
              <img className='landing-image shadow' src={IMAGES.LANDING_IMAGE} alt="LandingPageImage" width='100%' />
            </div>
          </div>
        </div>
      </section>
      <section className='section-light why-us-container'>
        <div className="container mb-5">
          <h4 className='why-us-heading'>Why Us</h4>
          <div className="row">
            <div className="col-md-4 mb-2 m-md-0 why-card-container">
              <div className="card border-light shadow">
                <div className="card-body py-4">
                  <h4 className='mb-3 card-heading'>Get More Visibility</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-2 m-md-0 why-card-container">
              <div className="card border-light shadow">
                <div className="card-body py-4">
                  <h4 className='mb-3 card-heading'>Organize Your Candidates</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-2 m-md-0 why-card-container">
              <div className="card border-light shadow">
                <div className="card-body py-4">
                  <h4 className='mb-3 card-heading'>Verify Their Abilities</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container pt-4'>
          <h4 className='why-us-heading'>Companies Who Trust Us</h4>
          <div className="row justify-content-center">
            <div className="col companies-img-container">
              <img src={IMAGES.SOLAYTIC} alt="solaytic" width="100%"/>
            </div>
            <div className="col companies-img-container">
              <img src={IMAGES.KANBA} alt="kanba" width="100%"/>
            </div>
            <div className="col companies-img-container">
              <img src={IMAGES.LIGHTING} alt="lightAi" width="100%"/>
            </div>
            <div className="col companies-img-container">
              <img src={IMAGES.ZTOS} alt="zots" width="100%"/>
            </div>
            <div className="col companies-img-container">
              <img src={IMAGES.KANBA} alt="KANBA" width="100%"/>
            </div>
            <div className="col companies-img-container">
              <img src={IMAGES.GOLD_LINE} alt="GOLD_LINE" width="100%"/>
            </div>
            <div className="col companies-img-container">
              <img src={IMAGES.IDEAA} alt="IDEAA" width="100%"/>
            </div>
            <div className="col companies-img-container">
              <img src={IMAGES.LIVA} alt="LIVA" width="100%"/>
            </div>
            <div className="col companies-img-container">
              <img src={IMAGES.VELOCITY} alt="VELOCITY" width="100%"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}