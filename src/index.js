import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StartPage from './Components/StartPage'
import QuizQuestions from './Quiz/QuizQuestions'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/QuizQuestions.js" element={<QuizQuestions />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
