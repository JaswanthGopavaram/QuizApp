import  {questionData}  from "./QuizData"

function QuizResult(props){
    return(
        <div className="resultPage">
            <center>
            <h1>Score : {props.score}</h1>
            <h3>You answered correctly {props.correctans} of {questionData.length}</h3>
            <button onClick={props.handlePlayagain} className="playagain">Play Again</button>
            </center>

        </div>
    )
}
export default QuizResult