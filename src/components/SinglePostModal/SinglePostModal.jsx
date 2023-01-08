import Modal from 'react-bootstrap/Modal';

import './SinglePostModal.scss'
import { useEffect, useState } from 'react';

import axios from '../../Axios';
import REQUEST from '../../utils/request';

const SinglePostModal = ({ show, onHide, singlePostData }) => {
    const [singlePostCandidates,setSinglePostCandidates] = useState([])
 

    useEffect(() => {
        if(show){
            getSingleJobPost()
        }
    }, [singlePostData,show])


    const getSingleJobPost = () => {
        const splitedUrl = REQUEST.GET_SINGLE_POST.split('{')
        const url = splitedUrl[0]+singlePostData?.id+splitedUrl[2]
        axios.get(url).then(
            (res)=>{
                setSinglePostCandidates(res.data.data)
            }
        )
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <div className='px-4'>

                <Modal.Header className='px-0' closeButton>
                    <Modal.Title className='h5' id="contained-modal-title-vcenter">
                        Applicants for this job
                    </Modal.Title>
                </Modal.Header>
                <p className='my-2'>Total {singlePostCandidates.length} applications</p>
                <Modal.Body className='single-post-modal-body'>
                    <div className="container-fluid">
                        <div className="row">
                        {singlePostCandidates.map((val, i)=> <div key={i} className="col-md-6 mb-4">
                                <div className="card single-post-card">
                                    <div className="card-body">
                                        <div className='d-flex mb-4'>
                                            <span className='avatar single-post-avatar'>{val.name.split('')[0]}</span>
                                            <span className='d-flex flex-column'>
                                                <span className='medium-font-family '>{val.name}</span>
                                                <span>{val.email}</span>
                                            </span>
                                        </div>
                                        <div>
                                            <p className='medium-font-family mb-1'>Skills</p>
                                            <span>{val.skills}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        </div>
                    </div>
                </Modal.Body>
            </div>
        </Modal>
    );
}

export default SinglePostModal