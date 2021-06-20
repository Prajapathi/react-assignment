import React from 'react'
import OfferCard from './OfferCard';
import "../index.css";
import document from "../Assets/document.svg";
import science from "../Assets/science.svg"
import bulb from "../Assets/bulb.svg"
import ML from '../Assets/machine-learning.png'

const Offers = (props) => {
    return (
        <div className='page offerpage'>
            <div className='page-container'>
                <div className='header-container'>
                    <h2 className="header">{props.header}</h2>
                    <p className="description">{props.description}</p>
                </div>
                <div className="offercard-container">
                    <OfferCard
                        avatar={document}
                        head="Start your AI"
                        title="Data Strategies Start your AI"
                    />
                    <OfferCard
                        avatar={science}
                        head="Data Analysis"
                        title="Digital Data Consulting For Science Lab"
                    />
                    <OfferCard
                        avatar={bulb}
                        head="Data Intelligence"
                        title="Business Intelligent for Digital Science"
                    />
                    <OfferCard
                        avatar={ML}
                        head="Machine Learning"
                        title="Machine Learning is a method data analysis"
                    />
                </div>
                <div className="service-container">
                    <button className="services">
                        More Services
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Offers
