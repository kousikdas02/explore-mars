import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import "./Home.scss";
import React, { useEffect, useState } from "react";
import marsGif from "../../../assets/images/mars.png";
// import moment from "moment";
import axios from "axios";
import Select from 'react-select'


const Home = () => {
    // const formatDate = moment().format("DD-MM-YYYY");


    const [isClearable, setIsClearable] = useState(true);
    const options = [
        { value: 'curiosity', label: 'Curiosity' },
        { value: 'spirit', label: 'Spirit' },
        { value: 'opportunity', label: 'Opportunity' },
        { value: 'perseverance', label: 'Perseverance' }
      ]

    
    const [roverName, setRoverName] = useState("")
    const handleTypeSelect = (e) => {
        setRoverName(e.value);
      };

    
    const [roverData, setRoverData] = useState([])

    const getEachRoverData = async(e) =>{
        try {
            const BaseUrl = "https://mars-photos.herokuapp.com/api/v1/rovers";
            const response = await axios.get(`${BaseUrl}/${roverName}/latest_photos`)
            setRoverData(response?.data.latest_photos)
        } catch (error) {
            console.log("error", error);
        }
        
    };

    useEffect(() => {
        getEachRoverData()  
    }, [roverName])

    
    // console.log(roverData);
    // console.log(roverName);

    // modal
    const [modalIsOpen, setModalIsOpen] = useState(false);
   const [modalData, setModalData] = useState(null);
   console.log(modalData);


    //    load more
    // const imagePerRow = 3;
    // const [loadMoreImg, setloadMoreImg] = useState(imagePerRow);
    // const handleMoreImage = () => {
    //     setloadMoreImg(loadMoreImg + imagePerRow);
    // };

    return (
        <>
            <div className='homeBanner'>
                <Container>
                    <div className='homeBanner_inner'>
                        <Row>
                            <Col lg={7}>
                                <div className='HomeBanner_left'>
                                    <h1>
                                        Explore <span>MARS</span>
                                    </h1>
                                    <h3>
                                        Explore mars by exploring Pictures Sent
                                        by the <a href='/rovers'>Rovers</a>
                                    </h3>
                                </div>
                            </Col>
                            <Col lg={5}>
                                <div className='HomeBanner_right'>
                                    <img src={marsGif} alt='' />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>

            <div className="recentPics common_gap">
                <Container>
                    <h2>Choose Rover to see the photos :</h2>
                    <div className="roverSelect">
                        <Select options={options} isClearable={isClearable} onChange={handleTypeSelect} value={options.find(function (option) {
          return option.value === setRoverName;
        })}/>
                    </div>

                    
                        {
                            roverName? 
                            <>
                                    <h3>Recent photos taken by : <span className="orange">{roverName}</span> Rover</h3>

                            </> : 
                            <>
                            <h3>Please Slect Rover</h3>
                            </>
                        }
                    

                    <Row className="recentPhotos_row">
                        {
                            roverData?.map((photos =>{
                                // console.log(photos);
                                return(
                                    <>
                                        <Col lg={4} key={photos.id}>
                                            <button href="javascript:void(0);" onClick={()=>{setModalData(photos); setModalIsOpen(true);}} className="modal_link">
                                                <span>
                                                    <img src={photos.img_src} alt="" />
                                                </span>
                                            </button>
                                        </Col>
                                    </>
                                )
                            }))
                        }
                        {/* {loadMoreImg < roverData?.length && (
                            <Button className='mt-4 loadMore_btn' onClick={handleMoreImage}>
                                Load more
                            </Button>
                        )} */}
                    </Row>
                    <Modal className="RoverModal" show={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} size="lg" centered>
                        <Modal.Header >
                        <Modal.Title>Photo Information</Modal.Title>
                        <button type="button" class="btn-close" aria-label="Close" onClick={() => setModalIsOpen(false)}></button>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="modalImage">
                                <figure><img src={modalData?.img_src} alt="" /></figure>
                            </div>
                            <h2><span className="orange">Photo Taken : </span>{modalData?.earth_date}</h2>
                            <h2><span className="orange">Camera : </span>{modalData?.camera.full_name}</h2>
                            <h2><span className="orange">Rover : </span>{modalData?.rover.name}</h2>
                            <h2><span className="orange">Rover Status : </span>{modalData?.rover.status}</h2>
                        </Modal.Body>
                        
                    </Modal>
                    
                </Container>
            </div>
            
        </>
    );
};

export default Home;