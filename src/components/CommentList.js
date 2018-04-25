import React, {Component} from 'react';
import Comment from './Comment';


export default class CommentList extends Component {
    static defaultProps = {
        comments: []
    }

    state = {
        isOpen: false
    };

    render(){
        const text = this.state.isOpen ? 'Закрыть Комменты' : 'Открыть Комменты';
        return (
            <div>
                <div>
                    <button onClick={this.toggleOpen}>{text}</button>
                    {this.getBody()}
                </div>
            </div>
        )
    }

    toggleOpen = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    getBody(){
        if(!this.state.isOpen){
            return null;
        }
        const {comments} = this.props;

        if(!comments || !comments.length ){
            return (<p>"No comments yet"</p>)
        }
        const commentElement = comments.map((comment)=> <li key = {comment.id}> <Comment comment = {comment}/> </li>);
        return (
            <ul>
                {commentElement}
            </ul>
        )
    }
}