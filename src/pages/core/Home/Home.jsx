import { Col, Container, Row } from "react-bootstrap";
import "./Home.scss";
import React, { useEffect, useState } from "react";
import marsGif from "../../../assets/images/mars.png";
import moment from "moment";
import axios from "axios";

const Home = () => {
    /* `const formatDate = moment().format("DD-MM-YYYY");` is creating a variable `formatDate` that
    contains the current date formatted as a string in the format "DD-MM-YYYY". The `moment()`
    function is a part of the Moment.js library and returns the current date and time. The
    `format()` method is then used to format the date as a string in the desired format. This
    formatted date is later used in the component to display the current date in the UI. */
    const formatDate = moment().format("DD-MM-YYYY");

    /** "selected" here is state variable which will hold the
     * value of currently selected dropdown.
     */
    const [selected, setSelected] = React.useState("");

    /** Function that will set different values to state variable
     * based on which dropdown is selected
     */
    // const changeSelectOptionHandler = (event) => {
    //     setSelected(event.target.value);
    // };

    /** Different arrays for different dropdowns */
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
    

    /** Type variable to store different array for different dropdown */
    let type = null;

    /** This will be used to create set of options that user will see */
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

    /** If "Type" is null or undefined then options will be null,
     * otherwise it will create a options iterable based on our array
     */
    if (type) {
        options = type.map((el) => <option key={el}>{el}</option>);
    }

    const [status, setStatus] = useState(null);
    function changeStatus(e) {
        setStatus(e.target.value);
        setSelected(e.target.value);

      }
      


    // const [roverData, setRoverData] = useState([])

    // const getEachRoverData = async() =>{
    //     const BaseUrl = "https://mars-photos.herokuapp.com/explore/";
    //     const response = await axios.get(`${BaseUrl}/${roverName}`)
    //     setRoverData(response?.data)
    // };

    // useEffect(() => {
    //     getEachRoverData()  
    // }, [])

    
    console.log(status);

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
                        <h2>Pictues Taken Today ({formatDate})</h2>

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
                                        <select>
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
