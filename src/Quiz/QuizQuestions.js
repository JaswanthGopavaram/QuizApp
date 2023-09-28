import { useState } from "react"
import { questionData } from "./QuizData"
import "../Components/page.css"
import QuizResult from "./QuizResult"
import qLogo from "../assorted-color-paper-pieces-on-white-surface-thumbnail.jpg"


function QuizQuestions() {

    const [currentQ, setCurrentQ] = useState(0)
    const [score, setScore] = useState(0)
    const [correctans, setCorrectAns] = useState(0)
    const [showResult, setShowResult] = useState(false)
    const [clicked, setClicked] = useState(false)

    const handleNext = () => {
        setClicked(false)
        const nextQuestion = currentQ + 1
        if (nextQuestion < questionData.length) {
            setCurrentQ(nextQuestion)
        } else {
            setShowResult(true)
        }
    }
    const handlePrev = () => {
        const prevQuestion = currentQ - 1
        if (prevQuestion > 0) {
            setCurrentQ(prevQuestion)
        }


    }
    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 5)
            setCorrectAns(correctans + 1)
        }
        setClicked(true)
    }
    const handlePlayagain = () => {
        setCurrentQ(0)
        setScore(0)
        setCorrectAns(0)
        setShowResult(false)
    }

    return (
        <>
            <div className="QuestionPage">
                <img src={qLogo} alt="logo" ></img>
                <div className="questionContainer">
                    {showResult ? (<QuizResult score={score} correctans={correctans} handlePlayagain={handlePlayagain} />) : (<>
                        <div>
                            <center>
                            <h3>Score: {score}</h3>
                            <h2>Question {currentQ + 1} of {questionData.length}</h2>
                            </center>
                        </div>
                        <p className="questionStyle">{questionData[currentQ].questionText}</p>
                        <div className="answer-options">
                            <ul key={questionData.id}>
                                {
                                    questionData[currentQ].answerOptions.map((ans, i) => {
                                        return (
                                            <div className="optionbutton">
                                                <li key={i} className={`li ${clicked & ans.isCorrect ? "correct" : "li"}`} onClick={() => handleAnswer(ans.isCorrect)} disabled={clicked}>
                                                    <input
                                                        type="radio"
                                                        name="options"
                                                        id="options" />
                                                    <label >{ans.answerText}</label>

                                                </li>
                                            </div>
                                        )
                                    })
                                }

                            </ul>
                        </div>
                        <div className="actions">
                            {/* <button onClick={handlePrev} disabled={clicked}>Prev</button> */}
                            <button onClick={handleNext} disabled={!clicked}>Next</button>
                        </div>
                    </>)}
                </div>

            </div>

        </>
    )
}

export default QuizQuestions;