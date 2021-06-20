import React from 'react'
import styles from "../styles/testimonial.module.css"

const TestimonialCard = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.profile}>
                <img className={styles.avatar} src={props.avatar} alt="" />
                <h5 className={styles.name}>{props.name}</h5>
                <span className={styles.header}>{props.header}</span>
            </div>
            <p className={styles.description}>{props.description}</p>
        </div>
    )
}

export default TestimonialCard
