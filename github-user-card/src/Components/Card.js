import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import "../App.css";

class ProfileCard extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      location: "",
      avatar: "",
      followers: [],
      login: "",
      avatar_url: "",
      key: Date(),
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/jjaleman")
      .then(res => res.json())
      .then(res => {
        console.log("this is the component did mount", res);
        this.setState({
          name: res.name,
          location: res.location,
          avatar: res.avatar_url
        });
      })
      .catch(err => {
        console.log("Error no data to display", err);
      });
  }

  handleFetchFollowers = e => {
    fetch(`https://api.github.com/users/jjaleman/followers`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          followers: res
        });
        console.log("this is the followers info", this.state.followers);
      })
      .catch(err => {
        console.log("Error ", err);
      });
  };

  render() {
    return (
      <div className="card">
        <Card>
          <CardImg
            className="picture"
            src={this.state.avatar}
            alt={this.state.avatar}
          />
        </Card>
        <CardBody>
          <CardTitle>{this.state.name}</CardTitle>
          <CardSubtitle>{this.state.location}</CardSubtitle>
          <Button onClick={this.handleFetchFollowers}>Followers</Button>
        </CardBody>
        <div>
          {this.state.followers.map(fllw => (
            <div key={fllw.id}>
              <p>{fllw.login}</p>
              <img src={fllw.avatar_url} alt={fllw} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ProfileCard;
