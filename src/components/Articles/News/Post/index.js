import React , {Component } from 'react';
import {firebase,firebaseDB, firebaseLooper, firebaseTeams} from '../../../../firebase';

import styles from '../../../Articles/articles.css';
import Header from './header';
// import Body from './body';


class NewsArticles extends Component {

    state = {
        article: [],
        team: [],
        imageURL:''
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
               this.getImageURL(article.image);
           })
       })
   }

    getImageURL = (filename) => {
        firebase.storage().ref('images').child(filename).getDownloadURL().then(url=> {
            this.setState({
                imageURL: url
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
                <div className={styleMedia.articleBody}>
                <h1>{article.title}</h1>
                <div className={styles.articleImage}
                style={{
                    background: `url('${this.state.imageURL}')`
                }}></div>
                <div className={styles.articleText}
                dangerouslySetInnerHTML={{
                    __html: article.body
                }}
                >
                   
                </div>
                </div>

                {/* <Body 
                title={article.title} 
                image = {article.image}
                text = {article.body}
                /> */}
            </div>
        )
    }
}
export default NewsArticles;