import React, {Component} from 'react';
import styles from './Drawer.module.css'
import BackDrop from "../../UI/BackDrop/BackDrop";


const links = ['dad', 'da', 'www']

class Drawer extends Component {


    renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index}
                >
                    <a>
                        Link {link}
                    </a>
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