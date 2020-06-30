import React, {Component} from 'react';

class AddMessage extends Component {
  	state = {
      msg : '' 
     }
     
     handleInputValue = event => {
     	this.setState({
       		msg : event.target.value
     	})
     }
     
     isDisabled = () => {
     	return this.state.msg === ''
     }
     
     addMessage = event => {
     	event.preventDefault()
     	this.props.addMessage(this.state.msg)
     }

   render() {
     
   	 const { msg } = this.state
     return (
     <div>
         <form className="input-group" onSubmit={this.addMessage}>
                <input type="text" className="form-control" placeholder="Enter your message..." value={msg} onChange={this.handleInputValue}/>
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.isDisabled()}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
     
     )
   }
}

export default AddMessage