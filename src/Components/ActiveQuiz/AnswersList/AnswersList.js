import React, {Component} from 'react';
import styles from './AnswersList.module.css'
import AnswersItem from "./AnswersItem/AnswersItem";


const AnswersList= props => {
    return (
        <ul className={styles.AnswersList}>

            {props.answers.map((answer,index)=>{
                return (
                    <AnswersItem
                        key ={index}
                        answer={answer}
                        onAnswerClick={props.onAnsweClick}
                        state={props.state ? props.state[answer.id] : null}

                    />
                )
            })}
        </ul>
    )


}

export default AnswersList;