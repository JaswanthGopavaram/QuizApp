import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import "./page.css"
import logo from "../Horizontal-Logo---Full-Colour-3x.png"

function StartPage() {
  const navigate=useNavigate()
  const navigateToQuiz=()=>{
    navigate("/QuizQuestions.js")
  }

  return (
      <div className='viewPage'>
        <div>
        <img src={logo} alt='logo' className='logo'></img>
        </div>
      <div className='QuizTitle'>
        <h1 className='titleText'>Quiz</h1>
      </div>
      <div>
        <button onClick={(navigateToQuiz)} className='startButton'> Start </button>
      </div>
      </div>
  )
}

export default StartPage