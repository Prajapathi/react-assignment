import React from 'react'
import "../index.css"
import styles from "../styles/formcard.module.css";
import FormCard from './FormCard';

const Form = (props) => {
    return (
        <div className="page form-page">
            <div className="page-container formpage-container">
                <div className="formcard-container">

                    <div className="form-intro">
                        <h2 className={styles.header}>{props.header}</h2>
                        <p className={styles.description}>{props.description}</p>
                    </div>

                    <div className="form">
                        <FormCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form
