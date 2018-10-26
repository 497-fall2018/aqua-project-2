import React,{Component} from 'react';
import '../styles/EditProfile.css';
import saveIcon from '../assets/images/save.jpg';

class EditProfile extends Component{
    constructor(props) {
    super(props); // access props
    
    this.submitHandler = this.submitHandler.bind(this);
    this.state = {
      showPastRides: false
    };
    }
    submitHandler(evt) {
        evt.preventDefault();
        this.state = {
            showPastRides: true
          };
        this.props.handlerFromParant(this.state.showPastRides);
    }
    handleChange() {
    }
    render(){
        return(
            <div className="userprofile-container-form">
                <div className="userprofile-form">
                
            <img
              className="euser-picture"
              src="https://i.pinimg.com/originals/f6/34/b9/f634b90aa5bdc4f7b6ed59bd553e97e5.jpg"
            />
            <div className="inputName">
            Name    
            <input
            name="Profile_name"
            defaultValue="Willie Wildcat"
            onChange={this.handleChange}
            description="Profile_name"
            type="text"
            />
            </div>
            <div className="inputPhone">
            Phone 
            <input
            name="Phone"
            defaultValue="650-339-4731"
            onChange={this.handleChange}
            description="Phone"
            type="text"
            />
            </div>
            <div className="inputEmail">Email
            <input
            name="Email"
            defaultValue="jamesxie2019@u.northwes..."
            onChange={this.handleChange}
            description="Email"
            type="text"
            />
            </div>
            <div className="inputBio">Bio   
            <textarea
            name="Bio"
            defaultValue="CS student at Northwestern University."
            onChange={this.handleChange}
            description="Bio"
            type="text"
            />
            </div>
            <button className="save-profile" onClick={this.submitHandler}>
              <img src={saveIcon} height="27" width="45"/> 
            </button>
            </div>

          </div>
        );
    }
}
export default EditProfile