import React, { Component } from "react";
import "./Footer.css"
/* import "../../../node_modules/font-awesome/css/font-awesome.min.css" */


export class Footer extends React.Component {

    constructor() {
        super()
    }

    render() {

        return (
            <>
                <footer className="footer-distributed">

                    <div className="footer-left">
                        <h4 className="footer-title">Stats App</h4>
                        <p>Develop by Adrian</p>
                    </div>

                    <div className="footer-right">
                        <a href="#">
                            <i className="fa fa-github">
                            </i>
                        </a>

                        <a href="#">
                            <i className="fa fa-twitter"></i>
                        </a>

                        <a href="#">
                            <i className="fa fa-instagram"></i>
                        </a>
                    </div>


                </footer>
            </>
        )

    }
}