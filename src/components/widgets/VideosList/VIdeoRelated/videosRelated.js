import React from 'react';
import styles from '../videosList.css';
import VideosTemplate from '../videosTemplate';


const VideosRelated = (props) => {

    return (
        <div className={styles.relatedWrapper}>
            <VideosTemplate 
                data={props.data}
                teams= {props.teams}
            />
        </div>
    )
}

export default VideosRelated;