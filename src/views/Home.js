import React, { Component } from "react";
import CommentsList from "../components/CommentList";
import { faker } from "@faker-js/faker"; 

class Home extends Component {
  generateFakeComments = (count) => {
    const comments = [];
    for (let i = 0; i < count; i++) {
      comments.push({
        author: faker.person.firstName(),
        avatar: faker.image.avatar(),  
        date: faker.date.recent().toLocaleString(),  
        text: faker.lorem.sentence()  
      });
    }
    return comments;
  };

  render() {
    const commentsData = this.generateFakeComments(10);

    return (
      <div className="px-8 md:px-36">
        <div className="flex items-center justify-center">
          <div className="w-full md:w-2/3 lg:w-1/2">
            <CommentsList comments={commentsData} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
