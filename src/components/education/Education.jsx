import React, {useState} from 'react';
import "./education.css"

const Education = () => {
    const [toggleState, setToggleState] = useState(1); 

    const toggleTab = (index) => {
        setToggleState(index);
    };
  return (
   <section className="education section" id="education">
    <h2 className="section__title">Qualification</h2>
    <span className="section__subtitle">My Personal Journey
    </span>

    <div className="eduaction__container container">
        <div className="education__tabs">
           
            <div 
            className= {toggleState === 1 ? "education__button education__active button--flex" : "education__button button--flex "}
             onClick={() => toggleTab(1)}
             >
                <i className="uil uil-graduation-cap education__icon"></i>{" "}
                Education
            </div>

             <div className= {toggleState === 2 ? "education__button education__active button--flex" : "education__button button--flex"}
             onClick={() => toggleTab(2)}
             >
                <i className="uil uil-briefcase-alt education__icon"></i>
                Experience
            </div>
        </div>
        
        <div className="education__sections">
            <div className= {toggleState === 1 ? "education__content education__content-active" : "education__content "}>
                <div className="education__data">
                    <div>
                        <h3 className="education__title">Web Designing</h3>
                        <span className="eduaction__subtitle">AKTU</span>
                        <div className="eduaction__calendar">
                            <i className="uil uil-calendar-alt"></i>{" "}
                            2021 - Present
                        </div>
                    </div>

                    <div>
                        <span className="education__rounder"></span>
                        <span className="education__line"></span>
                    </div>
                </div>

                 <div className="education__data">
                    <div></div>

                    <div>
                        <span className="education__rounder"></span>
                        <span className="education__line"></span>
                    </div>

                    <div>
                        <h3 className="education__title">Art Director</h3>
                        <span className="eduaction__subtitle">AKTU</span>
                        <div className="eduaction__calendar">
                            <i className="uil uil-calendar-alt"></i>{" "}
                            2021 - Present
                        </div>
                    </div>      
                </div>
                 <div className="education__data">
                    <div>
                        <h3 className="education__title">Web Developement</h3>
                        <span className="eduaction__subtitle">AKTU</span>
                        <div className="eduaction__calendar">
                            <i className="uil uil-calendar-alt"></i>{" "}
                            2021 - Present
                        </div>
                    </div>

                    <div>
                        <span className="education__rounder"></span>
                        <span className="education__line"></span>
                    </div>
                </div>

                 <div className="education__data">
                    <div></div>

                    <div>
                        <span className="education__rounder"></span>
                        <span className="education__line"></span>
                    </div>

                    <div>
                        <h3 className="education__title">UX Expert</h3>
                        <span className="eduaction__subtitle">AKTU</span>
                        <div className="eduaction__calendar">
                            <i className="uil uil-calendar-alt"></i>{" "}
                            2021 - Present
                        </div>
                    </div>

                    
                </div>
            </div>


            <div className= {toggleState === 2 ? "education__content education__content-active" : "education__content "}
            
            >
                <div className="education__data">
                    <div>
                        <h3 className="education__title">Web Designing</h3>
                        <span className="eduaction__subtitle">AKTU</span>
                        <div className="eduaction__calendar">
                            <i className="uil uil-calendar-alt"></i>{" "}
                            2021 - Present
                        </div>
                    </div>

                    <div>
                        <span className="education__rounder"></span>
                        <span className="education__line"></span>
                    </div>
                </div>

                 <div className="education__data">
                    <div></div>

                    <div>
                        <span className="education__rounder"></span>
                        <span className="education__line"></span>
                    </div>

                    <div>
                        <h3 className="education__title">Product Designer</h3>
                        <span className="eduaction__subtitle">AKTU</span>
                        <div className="eduaction__calendar">
                            <i className="uil uil-calendar-alt"></i>{" "}
                            2021 - Present
                        </div>
                    </div>      
                </div>
                 <div className="education__data">
                    <div>
                        <h3 className="education__title">Web Developement</h3>
                        <span className="eduaction__subtitle">AKTU</span>
                        <div className="eduaction__calender">
                            <i className="uil uil-calendar-alt"></i>{" "}
                            2021 - Present
                        </div>
                    </div>

                    <div>
                        <span className="education__rounder"></span>
                        <span className="education__line"></span>
                    </div>
                </div>

            </div>
        </div>
    </div>
   </section>
  );
};

export default Education;