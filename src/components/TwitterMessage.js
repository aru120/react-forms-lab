import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
      // maxChars: this.props.maxChars
    };
  }

  changeHandler = (e) =>{
    e.preventDefault()
   this.setState({message: e.target.value})
  }

  

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.changeHandler}/>
        <h4>You have {this.props.maxChars - this.state.message.length} characters left </h4>
      </div>
    );
  }
}

export default TwitterMessage;
