import React from 'react';
import {render} from 'react-dom';
import ArticleList from './components/ArticleList';
import {articles} from './fixtures';

// const article = articles[0];

// function Hello(){
//     return <h1>Hello</h1>
// }

render(<ArticleList articles = {articles} foo = "hhhh"/>, document.getElementById('container'))