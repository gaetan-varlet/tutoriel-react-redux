import React, { Component } from 'react'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import PostList from './containers/post-list'
import PostForm from './containers/post-form'
import Post from './containers/post'
import NotFound from './components/not-found'

// on reste toujours sur la même page, on ne change pas de page avec l'URL
// React Router va re-render les composants avec le changement d'URL

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Router history={browserHistory}>
            <Route path="/" component={PostList}/>
            <Route path="create-post" component={PostForm}/>
            <Route path="post/:id" component={Post} />
            <Route path="*" component={NotFound} />
        </Router>
      </div>
    )
  }
}

// path="post/:id" transmet l'id dans les props de Post : this.props.params.id