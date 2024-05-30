import React, { useState } from 'react'
import Proptype from 'prop-types'


export default function About(proops) {

    return (
        <div className='container' style={proops.myStyle}>
            <h2 className='my-3'>About Us</h2>
            <div className="accordion accordion-flush" id="accordionFlushExample" style={proops.myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed " style={proops.myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Textutils Function #1
                           
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" style={proops.myStyle} data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">In this Textutils you can manupulate your text as you want.
                        <ul>
                            <li>
                                You can make your text in Upper case.
                            </li>
                            <li>
                                You can make your text in Lower case.
                            </li>
                            <li>
                                You can copy the text in your clipboard.
                            </li>
                            <li>
                                You can remove the extra white space from your text.
                            </li>
                            <li>
                                You can know the number of words and character in your text.
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={proops.myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Chose Textutils #2
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" style={proops.myStyle} data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">After Chosing Text utils you can know your text like how many Words,Character and Paragraph it contains. How much time an average person take to read your given text.
                        It help you to copy your all text by on click and also remove your white space from your text by on click.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={proops.myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Textutils Developer #3
                        </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" style={proops.myStyle} data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">The Developer of Textutils is <strong>Aman Verma.</strong>
                        <br />This is <a href="https://portfolio-vermaaman.vercel.app/">Portfolio </a> for more information about the Developer.</div>
                    </div>
                </div>
            </div>
            {/* <div className="container  my-3">
                <button type="button" onClick={toggleStyle} className="btn btn-primary">{btnText}</button>
            </div> */}
        </div>
    )
}