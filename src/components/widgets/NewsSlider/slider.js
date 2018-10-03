import React, {Component} from 'react';
import SliderTemplates from './slider_templates';
import {firebaseArticles, firebaseLooper} from '../../../firebase';
class NewsSlider extends Component {

    state = {
        news: []
    }

    componentWillMount() {
       firebaseArticles.limitToFirst(3).once('value').then((snapshot)=>{
          const news =  firebaseLooper(snapshot)
           this.setState({
               news: news
           })
       })
    }

    render() {
        
        return(
            <SliderTemplates data = {this.state.news} type={this.props.type} settings = {this.props.settings}/>
        )
    }
}
export default NewsSlider;