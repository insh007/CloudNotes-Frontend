import React from "react";

function About(props) {
    let myStyle = {
        color : props.mode ==='dark'?'white':'black',
        backgroundColor : props.mode==='dark'?'black':'white'
    }

    return (
        <div className="container" style={myStyle}>
            <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>How it's working</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                          This web app is in under develoment process but CloudNotes is a tool that allows users to securely store their notes on the cloud, and that it provides them with the ability to manage and organize their notes in a convenient and efficient way. <br /> So the app eliminates the need for users to keep track of physical notebooks or sticky notes, or that it allows them to access their notes from anywhere with an internet connection. <br />
                          The authentication and authorization system ensures that each user can only access their own notes, or the ability to perform read, update, and delete operations on notes.

                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This website is totally free to use so make your hands dirty to do things. Also Dark mode is pretty awesome so must checkout.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Responsive</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            It also support Browser compatibility by providing screen resolution to different devices like mobile, desktop, laptop etc
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
