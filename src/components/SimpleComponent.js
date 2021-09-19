// Code SimpleComponent Here
import React from 'react'

class SimpleComponent extends React.Component {
    state = {
        mood: 'happy',
    }
     handleOnClick = () => {
         this.setState({
             mood: 'sad'
         })
     }
    render() {
        return (
            <div onClick={this.handleOnClick}>
                {this.state.mood}
            </div>
        )
    }
}

export default SimpleComponent