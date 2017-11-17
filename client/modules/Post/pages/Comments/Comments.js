import React, {Component} from 'react'
import {connect} from 'react-redux'

import {addComment} from '../../CommentActions';
import {getComments} from '../../PostReducer';
import {fetchPost} from '../../PostActions';
import {getPost} from '../../PostReducer';

import styles from './style.css'

export function AddComment(props) {
  this.formName = ''
  this.formComment = ''
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      props.addComment(this.formName.value, this.formComment.value, new Date())
    }} className={`${styles['single-post']} ${styles['post-detail']}`}>
      <input type="text" placeholder={'Name'} className={'formName'} ref={(formName) => {
        this.formName = formName;
      }}/>
      <textarea type="text" placeholder={'Comment'} className={'formComment'} ref={(formComment) => {
        this.formComment = formComment;
      }}/>
      <input type="submit" value={'Add comment'} className={'formSubmit'}/>
    </form>
  )
}

export function ShowComments(props) {
  let allComments = props.allComments.data
  let postId = props.postId
  return (
    <ul>
      {allComments.map((e, i) => {
        if (e.postId == postId)
          return (
            <li key={i}>
              <div className={'postDate'}>{e.date.getHours()}:{e.date.getMinutes()} {e.date.getDate()}/{e.date.getMonth()}/{e.date.getFullYear()}</div>
              <div className={'postMame'}>{e.name}</div>
              <div className={'postComment'}>{e.comment}</div>
            </li>
          )
      })}
    </ul>
  )
}

export function Comments(props) {
  this.postId = props.id
  return (
    <div id="Comments">
      <h3>Add comment</h3>
      <AddComment addComment={(name, comment, data) => {
        props.addComment(this.postId, name, comment, data)
      }}/>
      <h3>All comments</h3>
      <ShowComments allComments={props.state.comments} postId={this.postId}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    state
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (postId, name, comment, date) => {
      dispatch(addComment(postId, name, comment, date))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Comments)
