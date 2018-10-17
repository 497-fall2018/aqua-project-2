

import React, {Component} from 'react';



class AddButton extends Component{

    render(){
        const {onclick} = this.props;
        return(
            <div className = "addButton" onClick = {() => onclick()}>
                +
            </div>
        )
    }

}


export default AddButton;