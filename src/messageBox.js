import React from "react";
import MessageList from "./messageList";
import MessageForm from "./messageForm";
export default class MessageBox extends React.Component{
    constructor(){
        super();
        this.state = {
            messages:[]
        }
    }
    addMessage = (message)=>{
        let messageItem = {...message,id:Math.random(),createAt:Date.now()};
        let messages = [...this.state.messages,messageItem];
        this.setState({
           messages:messages
        });
        localStorage.setItem("messages",JSON.stringify(messages));
    };
    removeMessage = (id)=>{
        let messages = this.state.messages.filter((item,index)=>{
            return item.id !== id;
        });
        this.setState({
            messages
        });
        localStorage.setItem("messages",JSON.stringify(messages));
    };
    componentWillMount(){
        let messages = JSON.parse(localStorage.getItem("messages"))||[];
        this.setState({messages})
    }
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="panel panel-danger">
                            <div className="panel-heading">
                                <h1 className="text-center h3">我的留言板</h1>
                            </div>
                            <div className="panel-body">
                                <MessageList {...this.state} remove={this.removeMessage}/>
                            </div>
                            <div className="panel-footer">
                                <MessageForm add={this.addMessage}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}