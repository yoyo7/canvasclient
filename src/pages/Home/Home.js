import React, { useEffect, useState } from "react";
import "./App.css";
import Course from "../../components/Course";
import axios from "axios";

const Home = () => {
  
  const apiKey = window.localStorage.getItem("apikey");
  const canvasurl = window.localStorage.getItem("site");
  const corsurl = window.localStorage.getItem("cors");
  const instance = axios.create({
    baseURL:  corsurl  +"https://" + canvasurl + "/api/v1/",
    headers: {'Authorization': `Bearer ${apiKey}`},
    responseType: 'json',
    
  });
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = async () => {
    await instance.get('courses')
    .then(res => {
      setCourses(res.data)
      console.log(res)
    })
  };

  if (!apiKey) {
    return (
      <a className="textcontent" href="/key">
        Please set api key here
      </a>
    );
  }
  return (
    <div className="App">
      {courses.map((course) => (
        <Course className="textcontent" name={course.name}/>
      ))}
    </div>
  );
};

export default Home;
