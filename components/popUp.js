import React, { Component } from 'react';

class PopUp extends Component {
    render() {
        return (
             <div className="window" style={{width: '300px'}}>
                <div className="title-bar">
                    <div className="title-bar-text">{ this.props.title}</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize" />
                        <button aria-label="Maximize" />
                        <button onClick={ this.props.toggle} aria-label="Close" />
                    </div>
                    </div>
                    <div className="window-body">
                    <p>{ this.props.body}</p>
                </div>
            </div>
        )
    }
}

export default PopUp;