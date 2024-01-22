import React from 'react';
//import { Form , Button ,Card } from "react-bootstrap"
//import {Container} from "react-bootstrap" 
//import { Link } from 'react-router-dom';
//import axios from "axios";


export const Home = () =>{
    return(
        <>
        <div className="jumbotron text-center">
            <h1 className="display-4">Mental Health Support</h1>
            <p className="lead">Your mental well-being is important. Find resources and support here.</p>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Understanding Mental Health</h5>
                            <p className="card-text">Learn about different mental health conditions and how they can affect individuals.</p>
                            <a href="#" className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Find Support Groups</h5>
                            <p className="card-text">Connect with others who may be experiencing similar challenges. Support is crucial.</p>
                            <a href="#" className="btn btn-primary">Explore Groups</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Professional Help</h5>
                            <p className="card-text">Seek help from mental health professionals. Find therapists and counselors near you.</p>
                            <a href="#" className="btn btn-primary">Find a Professional</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </>
)};