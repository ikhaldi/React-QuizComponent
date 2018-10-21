import React, { Component } from 'react'



class QuizQuestionButton extends Component {
    constructor(props) {
        super(props);
        
        
    }
    handleClick() {
      this.props.clickHandler(this.props.button_text);
    }
    render() {
        return(
            <li><button onClick={this.handleClick.bind(this)} key={this.props.key}>{this.props.button_text}</button></li>
        );
        
    }
}

export default QuizQuestionButton