import React from "react";
import {
  Image,
  Divider,
  Header,
  Icon,
  Button,
  Grid,
  Label,
} from "semantic-ui-react";

import Comments from "./comments.js";
import Buttons from "./buttons.js";
import ny from "./zo.jpeg";

function App() {
  return (
    <div style = {{backgroundColor : "grey"}}>
      <Grid centered>
        <Grid.Row>
          <Image src={ny} centered />
        </Grid.Row>
        <Grid.Row>
<Buttons/>
        </Grid.Row>
        </Grid>
      <br />

      <Divider horizontal>
        <Header as="h4">
          <Icon name="comment" style = {{color: "white"}} />

          댓글을 달아주세요!
        </Header>
      </Divider>

      <Comments />
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
      </div>
    </div>
  );
}

export default App;
