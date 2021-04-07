import React from 'react'
import styles from './BackDrop.module.css'

const BackDrop = (props) => {
    return <div
        className={styles.BackDrop}
        onClick={props.onClose}
    />

}
export default BackDrop;