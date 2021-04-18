import React, {Component} from 'react';
import {Button} from "../../../Components/UI/Button/Button";
import Input from "../../../Components/UI/input/input";
import is from 'is_js'

import styles from './Auth.module.css'

class Auth extends Component {

    state = {
        isFormValid: false,
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'ВВедіть коректний email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true,
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Пароль',
                errorMessage: 'ВВедіть коректний пароль',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6,
                }
            }
        }
    }

    submitHandler = event => {
        event.preventDefault()
    }

    onLoginHandler() {

    }

    onRegisterHandler() {

    }

    validateControl(value, validation) {
        if (!validation) {
            return true
        }
        let isValid = true
        if (validation.required) {
            isValid = value.trim() !== '' && isValid
        }
        if (validation.email) {
            isValid = is.email(value) && isValid
        }
        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid
        }
        return isValid
    }

    onChangeHandler = (event, controlName) => {
        console.log(`${controlName}:`, event.target.value)
        const formControls = {...this.state.formControls}
        const control = {...formControls[controlName]}
        control.value = event.target.value
        control.touched = true
        control.valid = this.validateControl(control.value, control.validation)
        formControls[controlName] = control
        let isFormValid = true
        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid
        })


        this.setState({
            formControls, isFormValid
        })
    }

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    shouldValidate={!!control.validation}
                    errorMessage={control.errorMessage}
                    onChange={event => this.onChangeHandler(event, controlName)}
                />
            )
        })
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

                        {this.renderInputs()}

                        <Button
                            type='success'
                            onclick={this.onLoginHandler}
                            disabled={!this.state.isFormValid}
                        >Зайти
                        </Button>
                        <Button
                            type='primary'
                            onclick={this.onRegisterHandler}
                            disabled={!this.state.isFormValid}
                        >Реєстрація
                        </Button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Auth;