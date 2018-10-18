import React,{Component} from 'react';
import '../styles/PastRides.css';

class PastRides extends Component{
    constructor(props) {
        super(props);
    
        this.state = {};
      }
    render(){
        return(
            <div className="past-rides">
                Past Rides:
                <div>
                    List of past rides
                </div>
            </div>


        );
    }
}

export default PastRides;