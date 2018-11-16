import React, { Component } from 'react';
import MatchedUser from "./MatchedUser";

class PostRequest extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          posted: false,
        };
    }

    postHandler = () => {
        this.setState({posted: !this.state.posted})
    } 

    render (){
        if (this.state.posted){
            return(
            <MatchedUser
                showRequest={true}
                name={this.props.name}
                time={this.props.time}
                location={this.props.location == "northCampus" ? "North Campus" : "South Campus"}
                airport={this.props.airport == "ohare" ? "O'Hare International Airport" : "Midway International Airport"}
                recipient="khanders"
                user={this.state.user}
              />
              )
        }
        else{
            return(
                <div className = "post"> Didn't find a ride? Post yours
                    <button className="post-button" onClick = {this.postHandler}>Post</button>
                </div>
            )
        }
    }
}

export default PostRequest;