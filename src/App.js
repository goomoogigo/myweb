import React from "react";
import firebase from "firebase"
import {
  Image,
  Divider,
  Header,
  Icon,
  Button,
  Grid,
  Label,
  Menu
} from "semantic-ui-react";

import Comments from "./comments.js";
import Buttons from "./buttons.js";
import ny from "./zo.jpeg";
import auth from "./fb.js"

var provider = new firebase.auth.GoogleAuthProvider();

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      username : "방문자"
    }
  }
  render() {
    return (
      <div style = {{backgroundColor : "black"}}>
      <br/>

        <Header as="h4">
        <Icon
        name="quote left"
        style = {{color: "white", Align : "center"}} />
          <h1
          style= {{color: "white", textAlign :"center"}}> MOOGI.GO.BORI </h1>
          <Icon
          name="quote right"
          style = {{color: "white", Align : "center"}} />
        </Header>

<br/>
<br/>
<br/>
<br/>
<br/>

        <Menu tabular>
                <Menu.Item
                  name='bio'
                  style = {{color: "white", textAlign : "center"}}
                />
                <Menu.Item
                  name='photos'
                  style= {{color: "white", textAlign : "center"}}
                />

               <Menu.Item
               name='Login'
               style= {{color: "white",textAlign : "marginLeft"}}
               onClick = {()=> {
                 firebase
                 .auth()
                 .signInWithPopup(provider)
                 .then(function(result) {
           // This gives you a Google Access Token. You can use it to access the Google API.
           var token = result.credential.accessToken;
           // The signed-in user info.
           var user = result.user;
           return user.displayName;
           // ...
         })
         .then((result) => this.setState({userName: result}))
         .catch(function(error) {
           // Handle Errors here.
           var errorCode = error.code;
           var errorMessage = error.message;
           // The email of the user's account used.
           var email = error.email;
           // The firebase.auth.AuthCredential type that was used.
           var credential = error.credential;
           // ...
         })
       }}></Menu.Item>
       <Menu.Item
       style= {{color:"white", marginLeft: "1250px" }}>{`환영합니다,      ${this.state.userName}님.`}</Menu.Item>
              </Menu>

  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>


  <Divider horizontal>
  <p style = {{color : "grey" , textAlign : "center"}}> PORTFOLIO </p>
    </Divider>

    \

        <Grid centered>
          <Grid.Row>
            <Image src={ny} centered />
          </Grid.Row>
          <Grid.Row>
  <Buttons/>
          </Grid.Row>
          </Grid>
        <br />
<br/>
<br/>
<br/>
<br/>

<br/>
<br/>
        <Divider horizontal>
          <Header as="h4">
          <Icon name="paper plane" style = {{color: "white"}} />
          </Header>
        </Divider>

<Grid centered columns ={3} >
<Grid.Column>
        <Comments userName ={this.state.userName}/></Grid.Column></Grid>

        <Divider horizontal>
          <Header as="h4">
            <Icon name="microchip" />
            Contact me!
          </Header>
        </Divider>
        <br/>
        <div>


          <Grid centered>
            <Button
            circular
            color="instagram"
            icon="instagram"
            onClick ={() =>
              window.open(
                "https://www.instagram.com/moogigobori/?hl=en")
          }
          />

            <Button circular color="twitter" icon="twitter" />
            <Button circular color="linkedin" icon="linkedin" />
            <Button circular color="google" icon="google" />
          </Grid>
  <br/>
  <br/>



        </div>
      </div>
    );
  }

}

export default App;
