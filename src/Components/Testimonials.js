import React from 'react'
import TestimonialCard from './TestimonialCard';
import "../index.css";
import profile1 from "../Assets/profile1.jpg"
import profile2 from "../Assets/profile2.jpg"


const Testimonials = (props) => {
    return (
        <div className='page testimonial-page'>
            <div className='page-container testimonial-page-container'>
                <div className='header-container'>
                    <h2 className="header">{props.header}</h2>
                    <p className="description">{props.description}</p>
                </div>
                <div className="testimonialcard-container">
                    <TestimonialCard
                        avatar={profile1}
                        name="Mahadi Shopnil"
                        header="CEO Data Strategies"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid est tempora voluptate. Veritatis reiciendis esse sint ea et dolores suscipit!"
                    />
                    <TestimonialCard
                        avatar={profile2}
                        name="Mahfuz Riad"
                        header="Data Science Strategies"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid est tempora voluptate. Veritatis reiciendis esse sint ea et dolores suscipit!"
                    />
                </div>
            </div>
        </div>
    )
}

export default Testimonials
