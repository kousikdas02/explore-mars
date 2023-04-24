import axios from "axios";
import "./Rovers.scss"
import React, { useEffect, useState } from 'react'
import curiosityImg from "../../../assets/images/Curiosity_rover.jpeg"
import spiritImg from "../../../assets/images/Spirit_rover.jpeg"
import opportunityImg from "../../../assets/images/Opportunity_rover.jpeg"
import perseveranceImg from "../../../assets/images/Perseverance_rover.jpeg"
import roverBannerImg from "../../../assets/images/roverBanner.jpeg"
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Rovers = () => {
  const [allRover, setAllRover] = useState([])
  const BaseUrl = "https://mars-photos.herokuapp.com/api/v1/rovers";
  const roverListingData = async () => {
    try {
      const response = await axios.get(`${BaseUrl}`)
      setAllRover(response?.data)
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect (()=>{
    roverListingData()
  },[])

  console.log(allRover);

  const RoverImg = [curiosityImg, opportunityImg, perseveranceImg];


  return (
    <>
      <div className="innerBanner" style={{background: `url(${roverBannerImg})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", }}>
        <Container>
          <div className="innerBanner_inner">
            <h1>Chose Rover To Explore the Pictures Clicked by Them</h1>
          </div>
        </Container>
      </div>

      <div className="roverList">
        <Container>
          <h2>All Rovers</h2>
          <Row>
            {
              allRover.map((rovers, index) => {
                return(
                  <>
                    <Col lg={4}>
                      <Link className="eachRoverLink">
                        <figure className="">

                        </figure>
                      </Link>
                    </Col>
                  </>
                )
              })
            }
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Rovers