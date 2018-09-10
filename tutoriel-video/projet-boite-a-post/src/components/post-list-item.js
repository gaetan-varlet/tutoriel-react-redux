import React, { Component } from 'react'
import {Link} from 'react-router'

export default class PostListItem extends Component {
  render() {
    return (
      <tr>
        <td><Link to={`post/${this.props.post.id}`}>{this.props.post.title}</Link></td>
        <td>
          <button className="btn btn-danger" 
          onClick={() => this.deletePost(this.props.post)}>
            Supprimer
          </button>
        </td>
      </tr>
    )
  }

  deletePost(){
    this.props.deletePostCallBack(this.props.post)
  }
}
