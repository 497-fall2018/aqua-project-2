
import React, {Component} from 'react';
import Request from './Request'
import '../styles/UserMatch.css';
import Header from "../Components/Header";



class RequestList extends Component{

    changeSelectedColor(selected, index){
        if(selected === index){ //this request is selected
            return "selectedRC";
        }
        else{
            return "requestContainer";
        }
    }

    renderRequests(){ //Renders json data      
        


        const renderedRequestList = this.props.requestData.map((currentReq, index) => 
            <div> 
                <Request onclick = {() => this.props.onclick(index)}
                        theme = {this.changeSelectedColor(this.props.selected, index)}
                        destination = { currentReq.destination } 
                        desiredTime = { currentReq.desiredTime }
                        timeBuffer = { currentReq.timeBuffer }/> 
            </div>
        )

        return renderedRequestList;
    }

    
    render(){
        const {history, userName} = this.props;
        return(
            <div className = "userContainer">
                <Header userName = {userName}/>
                {this.renderRequests()}
            </div>
        )

    }




}

export default RequestList;