

import React, {Component} from 'react';
import '../styles/Main.css';
import Match from './Match';
import { Jumbotron } from 'react-bootstrap';

class MatchList extends Component{

    timeConverse(time){        
        let hour = time.getHours();
        let minute = time.getMinutes();

        let minute_s = minute;
        let hour_s = hour;
        let poa = "PM";

        if(minute < 10){
            minute_s = "0" + minute_s
        }

        if(hour < 13){
            poa = "AM";
        }
        else{
            hour -= 12
        }

        hour_s = hour;

        if(hour < 10 && hour !== 0){
            hour_s = "0" + hour_s
        }
        else if(hour === 0){
            hour_s = "12"
        }

        let final = hour_s + ":" + minute_s + poa;
        return final 
    }

    renderMatches(){ //Renders json data

        let renderedMatches = this.props.matchData.map((currentMatch, index) => 
            <div> 
                <Match 
                       first = { currentMatch.firstName }
                       last = { currentMatch.lastName }
                       email = { currentMatch.email }
                       pic = { currentMatch.profileUrl }/> 
            </div>
        )


        return renderedMatches;
    }

    changeIndex(index){
        this.setState({index: index})
    }


    renderJumbo(data){
        if(data === null){
            return;
        }

        
        let numericBuffer = Number(data.timeBuffer) * 60 * 1000;
        let formattedDate = new Date(data.desiredTime);

        let lowerDateBound = new Date(formattedDate.getTime() - numericBuffer);
        let upperDateBound = new Date(formattedDate.getTime() + numericBuffer);

        return(
            <Jumbotron className="jumboHead">
                <h1>{data.destination}</h1>
                <p>
                    {formattedDate.toLocaleDateString() }
                </p>
                <p className="landing-text">
                    {this.timeConverse(lowerDateBound) + " - "}
                    
                    {this.timeConverse(upperDateBound)}
                </p>
            </Jumbotron>
        )
    }



    render(){

        return(
         <div className = "testing" >

            {this.renderJumbo(this.props.selectedRequest)}
            {this.renderMatches()}
        </div>



        )
    }

}




export default MatchList