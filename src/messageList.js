import React from "react";
import MessageItem from "./MessageItem";

export default class MessageList extends React.Component{
    constructor(){
        super()
    }
    render(){
        let {remove} = this.props;
        return (
            <ul className="list-group">
                {this.props.messages.map((item,index)=>(
                   <MessageItem key={index} {...item} remove={remove}/>
                ))}

            </ul>
        )
    }
}