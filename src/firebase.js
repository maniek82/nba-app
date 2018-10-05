import firebase from 'firebase/app';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage
import 'firebase/auth'; 

import {config} from './config';
 

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref("articles");
const firebaseTeams = firebaseDB.ref("teams");
const firebaseVideos = firebaseDB.ref("videos");

const firebaseLooper = (snapshot) => {
    const data = [];
    snapshot.forEach((childSnapshot)=>{
        data.push({
            ...childSnapshot.val(),
            id:childSnapshot.key
        })
    })
    return data;
}

export  {
    firebase,
    firebaseDB,
    firebaseTeams,
    firebaseArticles,
    firebaseVideos,
    firebaseLooper
}