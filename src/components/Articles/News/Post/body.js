import React from 'react';
import styles from '../../../Articles/articles.css';

const Body = (props) => {
    return (
        <div className={styles.articleBody}>
            <h1>{props.title}</h1>
            <div className ={styles.articleImage} style={{
                background: `url('/images/articles/${props.image}')`
            }}>

            </div>
            <div className={styles.articleText}>
                {props.text}
            </div>
        </div>
    )
}
export default Body;