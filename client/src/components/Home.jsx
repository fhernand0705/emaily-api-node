import React from 'react';
import cardContent from '../utils/cardContent'; 

function Home() {
    const renderCards = () => {
        return cardContent.map(({title, body}) => {
            return (
                <div className="row center" key={title}>
                    <div className="col m12">
                        <div className="card card-process">
                            <div className="card-content white-text">
                                <span className="card-title">{title}</span>
                                <p>{body}</p>
                            </div>
                        </div>
                    </div>
                    <i className="material-icons white-text">arrow_downward</i>
                </div>
           ) 
        })
    }
   
    return (
        <div>
            <div className="emaily-intro">
                <h2 className="white-text">Welcome to Emaily Surve!</h2>
                <p className="grey-text">
                    Receiving feedback from customers is an important aspect of growing your business, and Emaily makes it so that the process as easy as possible for our users. Begin collecting valuable feedback from your users today!
                </p>
            </div>
            <div className="container">
                <h3 className="white-text center">Our Process</h3>
                <hr />
                <div className="process-wrapper">
                    {renderCards()}
                    <h4 className="white-text center">Send Survey!</h4>
                </div>
            </div>
        </div>
    )
}

export default Home; 