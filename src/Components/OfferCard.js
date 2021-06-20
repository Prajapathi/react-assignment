import React from 'react'
import styles from "../styles/offercard.module.css"
const OfferCard = (props) => {
    return (
        <div className={styles.offercard}>
            <img className={styles.avatar} src={props.avatar} alt="" />
            <p className={styles.header}>{props.head}</p>
            <h3 className={styles.title}>{props.title}</h3>
            <a className={styles.link} href={props.link}>&#8594;</a>
        </div>
    )
}

export default OfferCard
