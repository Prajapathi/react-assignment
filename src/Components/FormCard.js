import React from 'react'
import styles from "../styles/formcard.module.css"

const FormCard = (props) => {
    return (
        <div className={styles.card}>
            <form action="" className={styles.form}>
                <h2>Subscribe for Quote</h2>
                <div className={styles.input}>
                    <label className={styles.label} htmlFor="">Name</label>
                    <input className={styles.inputfield} type="text" />
                </div>
                <div className={styles.input}>
                    <label className={styles.label} htmlFor="">Password</label>
                    <input className={styles.inputfield} type="password" />
                </div>
                <div>
                    <button className={styles.quote}>Get a Quote</button>
                </div>
                <div>Let's do great things together for free <a href="#">Signup</a></div>
            </form>
        </div>
    )
}

export default FormCard
