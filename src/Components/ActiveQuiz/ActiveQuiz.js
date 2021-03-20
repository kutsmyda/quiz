import styles from './ActiveQuiz.module.css'
import AnswersList from "./AnswersList/AnswersList";


const ActiveQiuz = (props) => {
    console.log(props.state)
    return (
        <div className={styles.ActiveQuiz}>
            <p className={styles.Question}>
                <span>
                    <strong>{props.anserNumber}.</strong>&nbsp;
                    {props.question}
                </span>

                <small>{props.anserNumber} from {props.quizLength}</small>
            </p>
            <AnswersList
                answers={props.answers}
                onAnsweClick={props.onAnswerClick}
                state={props.state}

            />
        </div>
    )
}
export default ActiveQiuz;