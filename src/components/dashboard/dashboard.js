import React, { Component } from 'react';
import styles from './dashboard.css';
import FormFields from '../widgets/FormFields/formFields';
import {Editor} from 'react-draft-wysiwyg';
import {EditorState, convertFromRaw, convertToRaw} from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';

class Dashboard extends Component {

    state = {
        editorState: EditorState.createEmpty(),
        postError: '',
        loading: false,
        formdata: {
            author: {
                element: 'input',
                value: '',
                config: {
                    name: 'author_input',
                    type: 'text',
                    placeholder: 'Enter your name',
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            title: {
                element: 'input',
                value: '',
                config: {
                    name: 'title',
                    type: 'text',
                    placeholder: 'Enter title',
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },

        }
    }

    updateForm = (element) => {
        const newFormdata = {
            ...this.state.formdata,

        }
        const newElement = {
            ...newFormdata[element.id]
        }
        newElement.value = element.event.target.value;

    if(element.blur) {
    let validData =  this.validate(newElement);
    newElement.valid = validData[0];
    newElement.validationMessage = validData[1]

    }
    newElement.touched = element.blur;

        newFormdata[element.id] = newElement;

        
        this.setState({
            formdata: newFormdata
        })
    }

    validate = (element) => {
        let error = [true, ''];
       

        if(element.validation.required) {
            const valid =element.value.trim() !=='';
            const message = `${!valid ? 'This field is required' : ''}`;
            error = !valid ? [valid, message]: error
        }
        return error;
    }
    submitButton = () => (
        this.state.loading ? 'loading...' :
        <div className="dashboard_button">
            <button  type="submit">Add Post</button>
        </div>
    )
    submitForm = (event) => {
        event.preventDefault();

        let dataToSubmit = {};
            let formIsValid = true;

            for(let key in this.state.formdata) {
                dataToSubmit[key]= this.state.formdata[key].value
            }
            for(let key in this.state.formdata) {
                formIsValid = this.state.formdata[key].valid && formIsValid;
            }
        console.log("data to submit", dataToSubmit);

        if(formIsValid) {
            console.log("submit post")
        }else {
            this.setState({
                postError: 'Something went wrong'
            })
        }

    }
    showError = () => (
        this.state.postError !== ''?
        <div className={styles.error}>
            {this.state.postError}
        </div>
        : ''
    )
    onEditorStateChange = (editorState) => {
        let contentState = editorState.getCurrentContent();

        let rawState = convertToRaw(contentState); //json format
        let html = stateToHTML(contentState);//html format

        this.setState ({
            editorState: editorState
        })
    }
    render() { 
        return ( 
            <div className={styles.postContainer}>
                <form onSubmit={this.submitForm}>
                    <h2>Add Post</h2>

                   <FormFields
                        id={'author'}
                        formdata = {this.state.formdata.author}
                        change={(element)=>this.updateForm(element) }
                    />
                     <FormFields
                        id={'title'}
                        formdata = {this.state.formdata.title}
                        change={(element)=>this.updateForm(element) }
                    />
                    <Editor 
                     editorState = {this.state.editorState}
                     wrapperClassName = "myEditor-wrapper"  
                     editorClassName= "myEditor-editor"
                     onEditorStateChange = {this.onEditorStateChange}

                    />
                    {this.submitButton()}
                </form>
                {this.showError()}
            </div>
         );
    }
}
 
export default Dashboard;