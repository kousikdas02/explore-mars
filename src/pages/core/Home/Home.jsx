import { Col, Container, Row } from "react-bootstrap";
import "./Home.scss";
import React, { useEffect, useState } from "react";
import marsGif from "../../../assets/images/mars.png";
import moment from "moment";
import axios from "axios";

const Home = () => {
    const formatDate = moment().format("DD-MM-YYYY");

    const [selected, setSelected] = React.useState("");


    const Curiosity = [
        "FHAZ",
        "NAVCAM",
        "MAST",
        "CHEMCAM",
        "MAHLI",
        "MARDI",
        "RHAZ",
    ];
    const Spirit = ["FHAZ", "NAVCAM", "PANCAM", "MINITES", "ENTRY", "RHAZ"];
    const Opportunity = ["FHAZ", "NAVCAM", "PANCAM", "MINITES", "ENTRY", "RHAZ"];
    const Perseverance = ["EDL_RUCAM", "EDL_DDCAM", "EDL_PUCAM1", "EDL_PUCAM2", "NAVCAM_LEFT", "NAVCAM_RIGHT", "MCZ_RIGHT", "MCZ_LEFT", "FRONT_HAZCAM_LEFT_A", "FRONT_HAZCAM_RIGHT_A", "REAR_HAZCAM_LEFT", "REAR_HAZCAM_RIGHT", "EDL_RDCAM", "SKYCAM", "SHERLOC_WATSON", "SUPERCAM_RMI", "LCAM"];
    

    let type = null;
    let options = null;

    /** Setting Type variable according to dropdown */
    if (selected === "Curiosity") {
        type = Curiosity;
    } else if (selected === "Spirit") {
        type = Spirit;
    } else if (selected === "Opportunity") {
        type = Opportunity;
    } else if (selected === "Perseverance") {
        type = Perseverance;
    }

    if (type) {
        options = type.map((el) => <option key={el}>{el}</option>);
    }

    const [roverName, setRoverName] = useState(null);
    function changeStatus(e) {
        setRoverName(e.target.value);
        setSelected(e.target.value);
      }

    const [cameraName, setCameraName] = useState(null)
    function changeCamera(e){
        setCameraName(e.target.value);
    }

    const [roverData, setRoverData] = useState([])

    const getEachRoverData = async() =>{
        const BaseUrl = "https://mars-photos.herokuapp.com/api/v1/rovers/";
        const response = await axios.get(`${BaseUrl}/${roverName}/latest_photos&?camera=${cameraName}`)
        setRoverData(response?.data)
    };

    useEffect(() => {
        getEachRoverData()  
    }, [])

    
    console.log(roverData);

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
            <div className='picturesTakenToday'>
                <Container>
                    <div className='picturesTakenToday_inner'>
                        <h2>Recent Pictures Taken By Rover: <span>{roverName}</span> and Camera: <span>{cameraName}</span></h2>

                        <div className='rover_camera_chose'>
                            <div className='selectRover'>
                                <h3>Select Rover :</h3>
                                <select onChange={changeStatus} >
                                    <option>Choose Rover...</option>
                                    <option>Curiosity</option>
                                    <option>Spirit</option>
                                    <option>Opportunity</option>
                                    <option>Perseverance</option>
                                </select>
                            </div>
                            <div className='selectCamera'>
                                {options === null ? (
                                    <></>
                                ) : (
                                    <>
                                        <h3>Chose Camera :</h3>
                                        <select onChange={changeCamera}>
                                            {
                                                /** This is where we have used our options variable */
                                                options
                                            }
                                        </select>
                                    </>
                                )}
                            </div>
                        </div>

                        <Row>{}</Row>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Home;
