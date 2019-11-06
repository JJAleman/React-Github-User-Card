import React from 'react';


class Card extends React.Component{

    constructor(){
        super();
        this.state = {
            name: '',
            location: '', 
            avatar: '',
            followers: '',     
        };
    }

    componentDidMount() {
        fetch('https://api.github.com/users/jjaleman')
        .then( res => res.json())
        .then( res => {
          console.log('this is the component did mount', res);
          this.setState({
            name: res.name,
            location: res.location,
            avatar: res.avatar_url,
            followers: res.followers_url,
          });
        })
        .catch (err => {
          console.log('Error no data to display', err);
        });
      };

      

    render (){
        return (
            <div>
                <p>{this.state.name}</p>
                <p>{this.state.location}</p>
                <img src={this.state.avatar} alt={this.state.avatar}/>
                <div>
                    {this.state.followers}
                </div>
            </div>
        );
    }
}

export default Card;
