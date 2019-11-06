import React from "react";
import "../App.css";
import { Button } from "reactstrap";

import { Box, Card, Image, Heading, Text } from "rebass";

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
      key: Date()
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
        <Box width={256} className="card">
          <Card
            sx={{
              display: 'center',
              p: 1,
              borderRadius: 2,
              boxShadow: "0 0 16px rgba(0, 0, 0, .25)"
            }}
          >
            <Image src={this.state.avatar} alt={this.state.avatar} />
            <Box px={2}>
              <Heading as="h3">{this.state.name}</Heading>
              <Text fontSize={0}>{this.state.location}</Text>
            </Box>
            <Button
              color="primary"
              className="btn"
              onClick={this.handleFetchFollowers}
            >
              Followers
            </Button>
          </Card>
        </Box>

        <Box width={256} className="followers-card">
          {this.state.followers.map(fllw => (
            <Card
              sx={{
                p: 1,
                borderRadius: 2,
                boxShadow: "0 0 16px rgba(0, 0, 0, .25)",
                marginTop: '2rem',
              }}
            >
              <Image src={fllw.avatar_url} alt={fllw.avatar_url} />
              <Box px={2} key={fllw.id}>
                <Heading as="h3">{fllw.login}</Heading>
              </Box>
            </Card>
          ))}
          >
        </Box>
      </div>
    );
  }
}

export default ProfileCard;
