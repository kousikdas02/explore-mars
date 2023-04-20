import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useContextProvider = () => {
    const { name } = useParams();
    const [roverData, setRoverData] = useState([])
    const [photosByDate, setPhotosByDate] = useState([])
    
    const getEachRoverData = async() =>{
        const BaseUrl = "https://mars-photos.herokuapp.com/explore/";
        const response = await axios.get(`${BaseUrl}/${name}`)
        setRoverData(response?.data)
    };

    const getPhotosByDate = async () => {
        const BaseUrl = "https://mars-photos.herokuapp.com/explore/";
        const response = await axios.get(`${BaseUrl}/${name}/earth_date=${date}`)
        setPhotosByDate(response?.data)
    }

    const filterPhotosByCamera = async () => {
        const BaseUrl = "https://mars-photos.herokuapp.com/explore/";
        const response = await axios.get(`${BaseUrl}/${name}/earth_date=${date}&camera=${camera}`)

    }
    useEffect(() => {
        getEachRoverData()  
        getPhotosByDate()
    }, [])
    const AllApi={
        roverData, photosByDate
    }

    return <></>;
};
