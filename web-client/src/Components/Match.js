

import React, {Component} from 'react';
import changeInfo from './MatchList';
import Avatar from './Avatar';


let color;

class Request extends Component{


    handleClick(id){
        console.log(id)
    }

    render(){
        
        const {onclick, first, last, email, pic} = this.props

        return(
            <div className = "matchContainer" 
                onClick = {onclick} >

                <div className = "avatarContainer">
                    <Avatar pic = {pic}/>
                </div>

                <div className = "matchInfoContainer">
                    <div>
                        {first + " " + last}
                    </div>
                    <div>
                        {email}
                    </div>
                </div>
            </div>
        )

    }
    

}


export default Request;