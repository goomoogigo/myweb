import React from "react";
import { Comment, Header, Form, Button, Icon } from "semantic-ui-react";


import profile from "./profile.png";


function SingleComment (detail) {
  return (<Comment>
    <Comment.Avatar src={profile} />
    <Comment.Content>
      <Comment.Author as="a">방문자</Comment.Author>
      <Comment.Metadata>
        <div>Today at 5:42PM</div>
      </Comment.Metadata>
      <Comment.Text>{detail.content}</Comment.Text>
    </Comment.Content>
  </Comment>
   );
 }



class Comments extends React.Component {
   constructor(){
     super();
     this.state = {
       inputContent : "",
       commentsList : []
     };
   }


  render(){
   console.log(this.state.commentsList)
    return(
      <Comment.Group style={{ marginLeft: "500px" }}>
        <Header as = "h3" dividing>
          Comments
        </Header>

    {this.state.commentsList.map(comments => <SingleComment content = {comments}/> )}


        <Form reply>
          <Form.TextArea
          Value = {this.state.inputContent}
          placeholder = "댓글을 입력해주세요!"
          onChange = {(e) => this.setState({ inputContent: e.target.value})}
           />
          <Button
           content="Add Reply"
           labelPosition="left"
           icon="edit"
           primary
           onClick = {() =>
             this.setState((prevState) => {
               return{
                 commentsList : [...prevState.commentsList,this.state.inputContent],
                 inputContent :""
               };
             })
           }
          />
        </Form>
      </Comment.Group>
    );
  }
}

export default Comments;
