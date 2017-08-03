import React from "react";

export default class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <h1 className="main__text">{this.props.text}</h1>
                <h1 className="main__text">{this.props.creator}</h1>
            </div>
        )
    }
}
