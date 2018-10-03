import React ,{Component} from 'react';
import {firebaseLooper, firebaseDB, firebaseTeams,firebaseVideos} from '../../../../firebase';

import styles from '../../../Articles/articles.css';
import Header from './header';
import VideosRelated from '../../../widgets/VideosList/VIdeoRelated/videosRelated';




class VideoArticle extends Component {
    state = {
        article:[],
        team:[],
        teams:[],
        related:[]
    }
    componentWillMount() {
        firebaseDB.ref(`videos/${this.props.match.params.id}`).once('value').then((snapshot)=>{
            let article = snapshot.val();
            firebaseTeams.orderByChild('teamId').equalTo(article.team).once('value').then((snapshot)=> {
                const team = firebaseLooper(snapshot);
                this.setState({
                    article:article,
                    team: team
                })
                this.getRelated();
            })
        })
    }
getRelated = () => {
    firebaseTeams.once('value').then((snapshot)=> {
        const teams = firebaseLooper(snapshot);
        firebaseVideos.orderByChild('team').equalTo(this.state.article.team).limitToFirst(3).once('value').then((snapshot)=> {
            const related = firebaseLooper(snapshot);
            this.setState({
                teams: teams,
                related: related

            })
        })

    })
}
    render() {
        const article = this.state.article;
        const team = this.state.team;
        return(
            <div>
                <Header teamData={team[0]} />
                <div className={styles.videoWrapper}>
                    <h1>{article.title}</h1>
                    <iframe
                    title="videoplayer"
                    width="100%"
                    heigh="300px"
                    src={`https://www.youtube.com/embed/${article.url}`}
                    >

                    </iframe>
                </div>
                <VideosRelated  data={this.state.related} teams={this.state.teams}/>
            </div>
        )
    }
}

export default VideoArticle;