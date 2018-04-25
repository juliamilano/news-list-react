import React, {Component} from 'react';
import CommentList from './CommentList';
import PropTypes from 'prop-types';

// синтаксис ооп ес6
export default class Article extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired
    }
    constructor(props){
        super(props)

        this.state = {
            isOpen: false
            // isOpenComment: false
        }

        // this.toggleOpen = this.toggleOpen.bind(this);
    }
    render(){
        const {article} = this.props;
        const {isOpen} = this.state;
        return (
            <div>
                <h1>{article.title}</h1>
                <button onClick={this.toggleOpen}>{isOpen ? 'Закрыть' : 'Открыть'}</button>
                {this.getBody()}
            </div>
        )
    }
    getBody(){
        if(!this.state.isOpen){
            return null;
        }
        const {article} = this.props;
        return (
            <div>
                <section>{article.text}</section>
                <CommentList comments = {article.comments}/>
            </div>
        )
    };

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

}

// самый простой синтаксис
// export default function Article(props){
//     console.log('____', props);
//     const {article} = props;
//     return (
//         <div>
//             <h1>{article.title}</h1>
//             <section>{article.text}</section>
//         </div>
//     )
// }
