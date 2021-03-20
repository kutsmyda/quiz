import React, {Component} from 'react';
import styles from './Quiz.module.css'
import ActiveQiuz from "../../Components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../Components/FinishedQuiz/FinishedQuiz";


class Quiz extends Component {
    state = {
        activeQuestion: 0,
        isFinished: false,
        answerState: null,
        quiz: [
            {
                id: 1,
                question: 'Коли хан батий зруйнував Київ?',
                rightAnswerId: 2,
                answers: [
                    {text: '1200', id: 1},
                    {text: '1240', id: 2},
                    {text: '1243', id: 3},
                    {text: '1323', id: 4},


                ],
            },
            {
                id: 2,
                question: 'Президент України діючий?',
                rightAnswerId: 3,
                answers: [
                    {text: 'Янукуович', id: 1},
                    {text: 'Ющенко', id: 2},
                    {text: 'Зеленський', id: 3},
                    {text: 'Порошенко', id: 4},


                ],
            }
        ],

    }

    onAnswerClickHandler = (id) => {
        if(this.state.answerState){
            const key = Object.keys(this.state.answerState)[0]
            if(this.state.answerState[key]==='success'){
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestion]
        if (question.rightAnswerId === id) {
            this.setState({
                answerState: {[id]: 'success'}
            })
            const timerId = window.setTimeout(() => {
                if (this.isQuizFineshed()) {
                    this.setState({isFinished:true})
                    console.log('Finished')
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null,

                    })
                }

                window.clearTimeout(timerId)
            }, 1000)


        } else {
            this.setState({
                answerState: {[id]: 'error'}
            })
        }


    }

    isQuizFineshed = () => {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }


    render() {
        return (
            <div className={styles.Quiz}>
                <div className={styles.QuizWrapper}>
                    <h1>Дайте відповідь на всі запитання : </h1>
                    {
                        this.state.isFinished ?
                            <FinishedQuiz

                            /> :
                            <ActiveQiuz
                                answers={this.state.quiz[this.state.activeQuestion].answers}
                                question={this.state.quiz[this.state.activeQuestion].question}
                                onAnswerClick={this.onAnswerClickHandler}
                                quizLength={this.state.quiz.length}
                                anserNumber={this.state.activeQuestion + 1}
                                state={this.state.answerState}
                            />
                    }

                </div>
            </div>
        );
    }
}

export default Quiz;