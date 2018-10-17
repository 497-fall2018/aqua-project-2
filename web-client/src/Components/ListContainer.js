import React, {Component} from 'react';
import RequestList from "./RequestList";
import MatchList from "./MatchList";
import testData from './test.json';
import '../styles/Main.css';

import { getRequestsForUser, getUserMatchesForRequest, getUserForUsername, getRequestsForUserId, createRequestForUser } from '../Utilities/api';

class ListContainer extends Component{
    
    state = {
        requestID: 1,
        requestData: [],
        matchData: [],
        selectedRequest: -1,  
        selectedRequestData: null,      
        first: "",
        last: "",
        userId: "",
        userProfileImage: "",
    }

    handleClick(index){
        this.setState({requestID: index});
        this.setState({selectedRequest: index});
        this.setState({selectedRequestData: this.state.requestData[index]})
                
        let selectedRequestId = this.state.requestData[index]._id;
        //console.log("MATCHES FOR RIDE ID:" + selectedRequestId);
        
        getUserMatchesForRequest(selectedRequestId)
            .then(rideMatches => {
                this.setState({
                    matchData: rideMatches.data
                })
            })
    }


    componentDidMount(){

        getUserForUsername(this.props.userEmail)
            .then(userInformation => {
                console.log(userInformation);
                this.setState({
                    first: userInformation.data.firstName,
                    last: userInformation.data.lastName,
                    userId: userInformation.data._id,
                    userProfileImage: userInformation.data.profileUrl
                });

                console.log(this.state.first)
                this.props.change(this.state.first, this.state.userId)
                getRequestsForUserId(this.state.userId)
                    .then(requests => {
                        this.setState({
                            requestData: requests.data
                        })
                    })
            })

    }

    render(){
        return(
            <div className = "infoContainer"> 
                <RequestList requestData = { this.state.requestData } 
                             onclick = { this.handleClick.bind(this) } 
                             selected = {this.state.selectedRequest}
                             userName = {this.props.userName}
                             {...this.props}
                             />
                <MatchList 
                    selectedRequest = {this.state.selectedRequestData}
                    matchData = { this.state.matchData } />
            </div>
        )
    }
}


export default ListContainer;

