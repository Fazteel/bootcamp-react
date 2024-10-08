import React, { Component } from "react";
import Comment from "./Coment";

class CommentsList extends Component {
  render() {
    const { comments } = this.props;

    return (
      <div className="ui threaded comments">
        <h3 className="ui dividing header">Comments</h3>
        {comments.map((comment, index) => (
          <Comment
            key={index}
            author={comment.author}
            avatar={comment.avatar}
            date={comment.date}
            text={comment.text}
          />
        ))}
      </div>
    );
  }
};

export default CommentsList;
