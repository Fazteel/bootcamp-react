import React, { Component } from "react";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
    };
  }

  handleLike = () => {
    this.setState({ likes: this.state.likes + 1 });
  };

  render() {
    const { author, avatar, date, text } = this.props;
    const { likes } = this.state;

    return (
      <div className="comment">
        <a className="avatar">
          <img src={avatar} alt={author} />
        </a>
        <div className="content">
          <a className="author">{author}</a>
          <div className="metadata">
            <span className="date">{date}</span>
            <span className="date font-semibold text-black">Like: {likes}</span>
          </div>
          <div className="text">{text}</div>
          <div className="actions">
            <a className="reply">Reply</a>
            <button onClick={this.handleLike} className="reply text-white rounded-lg p-1 px-2 bg-blue-600">
              Like
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;
