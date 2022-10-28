import React, { useState, useEffect } from "react";
import "./Section1.css";
import Btn1 from "./Img/Property 1=Default.svg";
import Patterndivider from "./Img/pattern-divider-desktop.svg";


const Section1 = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState("");

  const [Fetching, setFetching] = useState("false");
  const [id, setId] = useState("");

  const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setText(data.slip.advice);
    setId(data.slip.id)
    setFetching(true);
    console.log(data)
  };
  useEffect(() => {
    fetchAdvice();
  }, [text]);

  const test = ()=>{
    console.log('Hello')
    setImg(Patterndivider)
  }

  // const handleForm = () => {
  //   console.log("hello");
  // };
  return (
    <div>
      {Fetching}

      <div className="a">
        <div className="parentdiv">
          <h3 className="header1">Advice#{id}</h3>
          <div className="pdiv">
            <p className="p">"{text}"</p>
          </div>
          <img className="divider" src={Patterndivider} alt="" />
          <div className="bb">
          <button className=""><img 
          onMouseOver={()=>{
            test()
          }}
            onClick={() => {
              fetchAdvice();
            }}
            className="btn1"
            src={Btn1}
            alt=""
          /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
