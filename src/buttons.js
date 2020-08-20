import React from "react";
import {Button} from "semantic-ui-react";

import {db} from "./fb.js"
class Buttons extends React.Component{
  constructor(){
    super()
    this.state = {
      likes : 0
    }
  }
componentDidMount = () => {
  db.collection("Basic").doc("m6HhpOkL8B5Jq8RZRYdV").get().then(res => this.setState({likes : res.data().likes}))
}
  render(){
    return(     <div>  <Button
           color="red"
           content="Like"
           icon= "heart"
           label={{
            basic: true,
            color: "red",
            pointing: "left",
            content: this.state.likes,
        }}
           onClick = {()=>{this.setState(prevState => {
             return {likes :prevState.likes + 1 }
           },() => db.collection("Basic").doc("m6HhpOkL8B5Jq8RZRYdV").update({likes :this.state.likes}))
        }}
      />
         <Button
          color='blue'
          content='share'
          icon='share'
          label={{
           as: 'a',
           basic: true,
           color: 'blue',
           pointing: 'left',
           content: '0',
      }}
    />
  </div>)
  }
}

export default Buttons
