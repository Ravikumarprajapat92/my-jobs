import axios from '../../Axios';
import { useEffect, useState } from 'react';

import './JobPost.scss';

import { IMAGES } from '../../utils/constants/Constants'
import REQUEST from '../../utils/request'
import SinglePostModal from '../../components/SinglePostModal/SinglePostModal';

import Button from 'react-bootstrap/Button';



const JobPost = () => {
    const [postedJobs, setPostedJob] = useState([[]]);
    const [paggination, setPaggination] = useState(0);
    const [modalShow, setModalShow] = useState(false);
    const [singlePostData, setSinglePostData] = useState(null);

    useEffect(() => {
        fetchPostedJobs()
    }, [])

    useEffect(()=> {
        if(singlePostData){
            setModalShow(true)
        }
    },[singlePostData])


    const fetchPostedJobs = () => {
        axios.get(REQUEST.GET_POSTED_JOBS).then((res) => {
            setPostedJob(chunkArray(res.data.data.data, 12));
        }, (err) => {
            console.log(err, 'err')
        })
    }

    const chunkArray = (arr, size) => arr.length > size ? [arr.slice(0, size), ...chunkArray(arr.slice(size), size)] : [arr];

    const handlePaggination = (paggi) => {
        if (paggi === 'next') {
            if (paggination < postedJobs.length - 1) setPaggination(paggination + 1)
        } else {
            if (paggination > 0) setPaggination(paggination - 1)
        }
    }


    return (
        <div className='job-posts-container'>
            <section className='section-dark pb-5'>
                <div className='container text-light'>
                    <p className='breadcrumb'><img className='breadcrumb-img' src={IMAGES.HOME} alt="home"></img> Home</p>
                    <h5 className='mb-4'>Jobs posted by you</h5>
                </div>
            </section>
            <section className='section-light'>
                {
                    postedJobs[0].length !== 0 &&
                    <>
                        <div className="container">
                            <div className="row">
                                {postedJobs[paggination].map((el, i) => {
                                    return (
                                        <div className={`col-md-3 mb-4 job-card-container ${i < 4 ? 'job-post-top-card' : ''}`} key={i}>
                                            <div className="card border-light shadow w-100">
                                                <div className="card-body job-card-body">
                                                    <h5 className='job-title'>{el.title}</h5>
                                                    <p className='job-desc'>{el.description}</p>
                                                    <div className='d-flex job-card-footer'>
                                                        <span className='d-flex align-items-center job-location-container'>
                                                            <img src={IMAGES.LOCATION} width="10px" alt="location" />
                                                            <span className='mx-2 job-location-name'>{el.location}</span>
                                                        </span>
                                                        <button className='btn btn-view-job' onClick={() => {setSinglePostData(el)}}>View Applications</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className='paggi-container'>
                            <div className='d-flex justify-content-center align-items-center'>
                                <img src={IMAGES.PREV} className="paggi-prev" alt="prev" title='Previous' onClick={() => { handlePaggination('prev') }} />
                                <ul className='list-unstyled d-flex m-0'>
                                    {postedJobs.map((val, i) => <li key={i} className='paggi-item' onClick={() => { setPaggination(i) }}>{i + 1}</li>)}

                                </ul>
                                <img src={IMAGES.NEXT} alt="next" className="paggi-next" title='Next' onClick={() => { handlePaggination('next') }} />
                            </div>
                        </div>
                    </>
                }
                {!postedJobs[0].length &&
                    <div className='no-records-container'>
                        <div className='text-center'>
                            <img src={IMAGES.NO_RECORDS} className="mb-4" alt="NO_RECORDS" />
                            <p className='mb-4'>Your posted jobs will show here!</p>
                            <Button className='btn primary-btn'>Post a Job</Button>
                        </div>
                    </div>}
            </section>
            <SinglePostModal
                show={modalShow}
                singlePostData={singlePostData}
                onHide={() => setModalShow(false)}
            />
        </div>
    )
}

export default JobPost