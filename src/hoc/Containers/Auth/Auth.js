import React, {Component} from 'react';
import {Button} from "../../../Components/UI/Button/Button";

import styles from './Auth.module.css'

class Auth extends Component {

    submitHandler = event => {
        event.preventDefault()
    }

    onLoginHandler() {

    }

    onRegisterHandler() {

    }

    render() {
        return (
            <div className={styles.Auth}>
                <div>
                    <h1>Авторизація</h1>
                    <form
                        onSubmit={this.submitHandler}
                        className={styles.AuthForm}
                    >
                        <input type='text'/>
                        <input type='text'/>

                        <Button
                            type='success'
                            onclick={this.onLoginHandler}
                        >Зайти
                        </Button>
                        <Button
                            type='primary'
                            onclick={this.onRegisterHandler}
                        >Реєстрація
                        </Button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Auth;