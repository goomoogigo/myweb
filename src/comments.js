import React from "react";
import { Comment, Header, Form, Button, Icon } from "semantic-ui-react";


import {db} from "./fb.js"
import moment from "moment"
import wheat from "./wheat.png";


function SingleComment (detail) {
  return (
    <Comment>
      <Comment.Content>
    <Comment.Avatar src={wheat} />
    <Comment.Author  as= "a" style = {{color: "white", marginLeft: "13px"}}>{detail.info.userName}</Comment.Author>
      <Comment.Metadata>
        <div style = {{color: "white"}}>
        {detail.info.time}
        </div>
      </Comment.Metadata>
      <Comment.Text  style = {{color: "white", marginLeft: "50px"}}>
      {detail.info.content}
      </Comment.Text>
      <Comment.Actions>
      <Comment.Action style = {{color: "grey", marginLeft: "50px"}} onClick = {()=> {
        if (detail.info.userName == detail.userName && detail.userName != "방문자"){
          db.collection("comments").doc(detail.info.id).delete().then( res => alert("삭제가 완료되었습니다! \n 새로고침을 하면 삭제된 것을 확인 할 수 있습니다.") )
        }
        else {
          alert("본인의 댓글만 삭제 할 수 있습니다.")
        }
      }}>삭제</Comment.Action>
      </Comment.Actions>
    </Comment.Content>
  </Comment>
);
}



class Comments extends React.Component {
   constructor(){
     super();
     this.state = {
       inputContent : "",
       inputTime: "",
       userName: "",
       commentsList : [],
     };
   }


componentDidMount = () =>{

  db.collection("comments").get().then((ss) => {
    let comments =[]
 ss.forEach((doc) => {
     comments.push(Object.assign (doc.data(), {id: doc.id}) );
 });
 return comments
}).then(res => {this.setState({commentsList : res})});

}


  render(){
   console.log(this.state.commentsList)
    return(
      <Comment.Group style={{color: "white"}}>
        <Header as = "h3" dividing style = {{color: "white"}}>
          Comments
        </Header>

    {this.state.commentsList.map((comments) => (
      <SingleComment info = {comments} userName ={this.props.userName}/>
    ))}


        <Form reply>
          <Form.TextArea
          Value = {this.state.inputContent}
          placeholder ="댓글을 입력해주세요!"
          onChange = {(e) => this.setState({ inputContent: e.target.value})}
           />
          <Button
           content="Add Reply"
           labelPosition="left"
           icon="edit"
           primary
           onClick = {() => {
             if (this.state.inputContent != ""){
             this.setState(
               (prevState) => {
                let newComment = {
                  content: this.state.inputContent,
                  time: moment().format("YYYY년 MM월 DD일"),
                  userName: this.props.userName
                };

                return {
                  commentsList: [...prevState.commentsList, newComment],
                  inputContent: "",
                };
              },
              () =>
              db
              .collection("comments")
              .add(this.state.commentsList[
                this.state.commentsList.length - 1
              ]
            )
               );
           } else {
             alert("빈칸으로 비워둘 수 없습니다.");
          }
        }}

          />
        </Form>
      </Comment.Group>
    );
  }
}

export default Comments;
