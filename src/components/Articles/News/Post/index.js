import React , {Component } from 'react';
import {firebaseDB, firebaseLooper, firebaseTeams} from '../../../../firebase';

import styles from '../../../Articles/articles.css';
import Header from './header';
import Body from './body';


class NewsArticles extends Component {

    state = {
        article: [],
        team: []
    }

   componentWillMount() {
       firebaseDB.ref(`articles/${this.props.match.params.id}`).once('value').then((snapshot)=> {
           let article = snapshot.val();
           firebaseTeams.orderByChild('teamId').equalTo(article.team).once('value').then((snapshot)=> {
               const team = firebaseLooper(snapshot);
               this.setState({
                   article: article,
                   team: team
               })
           })
       })
   }
    render() {
        const article = this.state.article;
        const team = this.state.team;

        return(
            <div className ={styles.articleWrapper}>
                <Header
                     teamData = {team[0]}
                     date = {article.date}
                     author = {article.author}
                />
                <Body 
                title={article.title} 
                image = {article.image}
                text = {article.body}
                />
            </div>
        )
    }
}
export default NewsArticles;