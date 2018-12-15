import React from "react";

export default class MessageForm extends React.Component{
    constructor(){
        super()
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        let message = {auth:this.auth.value,content:this.content.value};
        this.props.add(message)
    };
    render(){
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="auth" className="custom-control-label">留言人</label>
                    <input type="text" id="auth" className="form-control" ref={x=>{this.auth = x}}/>
                </div>
                <div className="form-group">
                    <label htmlFor="content" className="custom-control-label">内容</label>
                    <textarea id="content" cols="30" rows="10" className="form-control" ref={x => {this.content = x}}></textarea>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">留言</button>
                </div>
            </form>
        )
    }
}