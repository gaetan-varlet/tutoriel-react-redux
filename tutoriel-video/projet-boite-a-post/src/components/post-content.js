import React, { Component } from 'react'
import {Link} from 'react-router'

export default class PostContent extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.post.title}</h1>
        <p>{this.props.post.content}</p>
        <h1>Auteur : {this.props.post.author}</h1>
        <Link to='/'><button className="btn btn-danger">Retour</button></Link>
      </div>
    )
  }
}
