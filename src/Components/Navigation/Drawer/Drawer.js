import React, {Component} from 'react';
import styles from './Drawer.module.css'
import BackDrop from "../../UI/BackDrop/BackDrop";
import {NavLink} from "react-router-dom";


const links = [
    {to: '/', label: 'Список', exact: true,},
    {to: '/auth', label: 'Авторизація', exact: false},
    {to: '/quiz-creator', label: 'Створити Тест', exact: false,},
]

class Drawer extends Component {

    handleClick = () => {
        this.props.onClose()
    }

    renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index}
                >
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        activeClassName={styles.active}
                        onClick={this.handleClick}
                    >
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }

    render() {

        const cls = [styles.Drawer]

        if (!this.props.isOpen) {
            cls.push(styles.close)
        }


        return (
            <>
                <nav
                    className={cls.join(' ')}
                >
                    <ul>

                        {this.renderLinks()}

                    </ul>
                </nav>
                {this.props.isOpen ? <BackDrop onClose={this.props.onClose}/> : null}

            </>

        );
    }
}

export default Drawer;