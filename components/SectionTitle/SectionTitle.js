import React from 'react'

const SectionTitle = (props) => {
    return (
        <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
                <div className="wpo-section-title">
                    <h2>{props.Title}</h2>
                    <p>"Crafting innovative, high-performance solutions by combining full-stack expertise, seamless user experiences, 
                        and robust systems tailored to achieve your goals".</p>
                </div>
            </div>
        </div>
    )
}

export default SectionTitle;