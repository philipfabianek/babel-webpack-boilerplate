import "normalize.css";
import './stylesheets/_main.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import Main from "./scripts/components/Main";

ReactDOM.render(
    <Main
        creator="Created by Rosiwerk on 3rd August of 2017."
        text="This is boilerplate code for React application with Sass."
    />,
    document.getElementById("app")
);
