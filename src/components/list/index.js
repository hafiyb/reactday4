import React from "react";


export default class List extends React.Component{

    render(){
        return(
            <div className="border-b-2 border-black m-1" onClick={this.props.click}>
                <h2 className="">{this.props.title}</h2>
                <p>{this.props.time}</p>
            </div>
        )
    }
}