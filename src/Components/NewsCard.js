import React from 'react'
import styles from "../styles/newscard.module.css"

const NewsCard = (props) => {
    return (
        <div className={styles.card}>
            <img className={styles.media} src={props.media} alt="" />
            <div className={styles.details}>
                <h6 className={styles.header}>{props.header}</h6>
                <h3 className={styles.title}>{props.title}</h3>
                <div>
                    <span className={styles.time}>
                        {props.time}
                    </span>
                    <span className={styles.comments}>
                        {props.comments} comments
                    </span>
                </div>
            </div>
        </div>
    )
}

export default NewsCard
