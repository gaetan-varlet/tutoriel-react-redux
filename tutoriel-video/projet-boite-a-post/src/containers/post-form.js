import React, { Component } from 'react'
import {Link} from 'react-router'
import {reduxForm} from 'redux-form'
import {createPost} from '../actions/index'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'

const formConfig = {
  form: "createPostForm",
  fields: ["title", "content", "author"],
  validate: validate,
  initialValues: {author:"Moi"}
}

class PostForm extends Component {
  render() {
    const {fields, handleSubmit, errors} = this.props
    
    return (
      <div>
        <h1>Nouveau Post</h1>
        <form onSubmit={handleSubmit(this.createPost.bind(this))}>
        <div className=
          {`form-group ${fields.title.touched && fields.title.invalid ? 'has-danger' : ''}`}>
            <label><strong>Titre</strong></label>
            <input className="form-control" type="text" {...fields.title} />
            <div className="error-red">{fields.title.touched && errors.title}</div>
          </div>
          <div className=
          {`form-group ${fields.content.touched && fields.content.invalid ? 'has-danger' : ''}`}>
            <label><strong>Description</strong></label>
            <input className="form-control" type="textarea" {...fields.content}/>
            <div className="error-red">{fields.content.touched && errors.content}</div>
          </div>
          <div className=
          {`form-group ${fields.author.touched && fields.author.invalid ? 'has-danger' : ''}`}>
            <label><strong>Auteur</strong></label>
            <input className="form-control" type="text" {...fields.author}/>
            <div className="error-red">{fields.author.touched && errors.author}</div>
          </div>
          <Link className="button_space" to='/'>
            <button className="btn btn-danger">Retour</button>
          </Link>
          <button type="submit" className="btn btn-primary"
          disabled={this.props.invalid}>Créer</button>
        </form>
      </div>
    )
  }

  createPost(post){
    this.props.createPost(post)
    browserHistory.push("/")
  }
}

function validate(values){
  const errors = {}
  if (!values.title){
    errors.title = "Veuillez remplir le titre"
  }
  if (!values.content){
    errors.content = "Veuillez remplir la description"
  }
  if (!values.author){
    errors.author = "Veuillez remplir le champ auteur"
  }
  return errors
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({createPost}, dispatch)
}

export default connect(null,mapDispatchToProps)(reduxForm(formConfig)(PostForm))