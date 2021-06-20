import React from 'react'
import NewsCard from './NewsCard';
import "../index.css";
import desktop from "../Assets/desktop.png"
import girl from "../Assets/girl.jpg"
import programmer from "../Assets/programmer.svg"


const News = (props) => {
    return (
        <div className='page news-page'>
            <div className='page-container news-page-container'>
                <div className='header-container'>
                    <h2 className="header">{props.header}</h2>
                    <p className="description">{props.description}</p>
                </div>
                <div className="newscard-container">
                    <NewsCard
                        media={desktop}
                        header="Data Science"
                        title="Data Engineer, Data Analyst, Data Scientist"
                        time="May 21, 2021"
                        comments="0"
                    />
                    <NewsCard
                        media={girl}
                        header="Data Science"
                        title="How Artifical Intelligence is changing the industry"
                        time="May 21, 2021"
                        comments="0"
                    />
                    <NewsCard
                        media={programmer}
                        header="Data Science"
                        title="What are Service Graph Connectors in Service Now"
                        time="May 21, 2021"
                        comments="0"
                    />
                </div>
            </div>
        </div>
    )
}

export default News
