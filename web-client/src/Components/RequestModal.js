

import React, {Component} from 'react';
import InputField from '../Components/InputField';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { Button } from 'react-bootstrap';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import TimePicker from 'react-time-picker';

import { createRequestForUser } from '../Utilities/api';
  
const options = [
    "Chicago O'Hare", "Midway Airport"
  ]


class RequestModal extends Component{

    constructor(props){
        super(props); //accessprops

        this.state = {
            destination: "",
            time: '10:00',
            time_buffer: "",

            date: null,
            focused: false,
            
            error_message: "",
        }

        this._onSelect = this._onSelect.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.dateChange = this.dateChange.bind(this);
        this.combineDateTime = this.combineDateTime.bind(this);
    }

    _onSelect(selected){ //Dropdown box changes 
        this.setState({destination: selected})
    }

    combineDateTime(date, Time){
        let mDate = date.getTime() //
        let mTime = Time.split(":");
        let mTimef = (+mTime[0] * (60000 * 60)) + (+mTime[1] * 60000);

        let fm = mDate + mTimef - 12*60*60*1000;
        
        let new_date = new Date(fm)

        

        return new_date;
    }

    handleClick(){ //Handles request submition 
        if(this.state.date === null ||
            this.time_buffer === "" ||
            this.destination === ""
            ){
            this.setState({error_message: "Fill out man.."})
            return;
        }

        console.log(this.state.destination.value,
             this.state.time, 
             this.state.time_buffer,
              this.state.date.toDate(),
              this.props.userID
        )

        let time = this.combineDateTime(this.state.date.toDate(), this.state.time).toString();
        console.log(typeof time, time)

        createRequestForUser(
            this.state.destination.value,
            this.props.userID,
            time,
            this.state.time_buffer 
        )

        this.setState({destination: "", time_buffer: "", time: ""})
        this.props.onclick()
        window.location.reload();
    }

    handleChange(event){
        this.setState({
            [event.target.name]: [event.target.value]
        })

        fetch('/requests')

    }

    dateChange(value){
        this.setState({time: value})
    }
    
    render(){
        const {onclick, selected} = this.props;

        return(
            
            <div>
                <div className = "modalLeave" onClick = {() => onclick()}>
                    x 
                </div>
                <div className = "modalTitle">
                    Request A Share!
                </div>

                <div>
                    <Dropdown options={options}
                              onChange={this._onSelect}
                              value={this.state.destination}
                              placeholder="Select Your Destination" />

                    <div style = {{marginTop: "2%"}}>
                    <InputField Name = {"time_buffer"} 
                                onchange = {this.handleChange}
                                Value = {this.state.time_buffer}
                                description = {"How long can you wait? (Minutes)"} 
                                placeholder = {"ex) 30"} 
                                type={"text"}
                                className = {"form-control"}
                                />
                    </div>

                    
                    <div className = "timeRequest">
                        <SingleDatePicker
                            date={this.state.date} // momentPropTypes.momentObj or null
                            onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
                            focused={this.state.focused} // PropTypes.bool
                            onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                        />
                        <TimePicker
                            onChange={this.dateChange}
                           value={this.state.time}
                        />
                    </div>

                    <div><Button className = "form-button" 
                                    bsStyle = "primary"
                                    onClick = {this.handleClick}
                                    >
                                     Request 
                        </Button></div>
                    <div>
                        {this.state.error_message}
                    </div>
                </div>
            </div>
        )
    }
}

export default RequestModal;