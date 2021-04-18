import styles from './FinishedQuiz.module.css'
import React from 'react';
import {Button} from "../UI/Button/Button";
import {Link} from 'react-router-dom'

function FinishedQuiz(props) {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        console.log(props.results[key])
        if (props.results[key] === 'success') {
            total++
        }
        return total
    }, 0)
    console.log(successCount)
    return (
        <div className={styles.FinishedQuiz}>
            <ul>
                {
                    props.quiz.map((quizItem, index) => {
                        const cls = [
                            'fas', 'far',
                            props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check-circle',
                            styles[props.results[quizItem.id]]
                        ]
                        return (
                            <li
                                key={quizItem.id}
                            >
                                <strong>{index + 1}</strong>.&nbsp;
                                {quizItem.question}
                                <i className={cls.join(' ')}/>
                            </li>
                        )
                    })
                }
                {/*<li>*/}
                {/*    <strong>1 </strong>*/}
                {/*    питаннячко тут*/}
                {/*    ICON!!!!*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <strong>2 </strong>*/}
                {/*    питаннячко тут 2 wrong*/}
                {/*    ICON!!!!*/}
                {/*</li>*/}
            </ul>

            <p>Правильно {successCount} з {props.quiz.length}</p>

            <div>
                <Button onClick={props.onRerender} type="primary">Повторити</Button>
                <Button type="success">Пройти до списку тестів</Button>
            </div>
        </div>
    );
}

export default FinishedQuiz;