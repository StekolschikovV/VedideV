import React, {Component} from 'react'
import {connect} from 'react-redux'

import {addComment} from '../../CommentActions';

import styles from './style.css'

export function AddComment(props) {
  this.formName = ''
  this.formComment = ''
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      props.addComment(this.formName.value, this.formComment.value, new Date())
      this.formName.value = ''
      this.formComment.value = ''
    }} className={`${styles['addCommentForm']}`}>
      <input type="text" placeholder={'Name'} className={`${styles['formName']}`} ref={(formName) => {
        this.formName = formName;
      }}/>
      <textarea type="text" placeholder={'Comment'} className={`${styles['formComment']}`} ref={(formComment) => {
        this.formComment = formComment;
      }}/>
      <input type="submit" value={'Add comment'} className={`${styles['formSubmit']}`}/>
    </form>
  )
}

export function ShowComments(props) {
  let allComments = props.allComments.data
  let postId = props.postId
  return (
    <ul className={`${styles['comments']}`}>
      {
        allComments.map((e, i) => {
          if (e.postId == postId)
            return (
              <li key={i} className={`${styles['comment']}`}>
                <div className={`${styles['commentDate']}`}>{e.date.getHours()}:{e.date.getMinutes()} {e.date.getDate()}/{e.date.getMonth()}/{e.date.getFullYear()}</div>
                <div className={`${styles['commentName']}`}>{e.name}</div>
                <div className={`${styles['commentComment']}`}>{e.comment}</div>
              </li>
            )
        })

      }
    </ul>
  )
}

export function Comments(props) {
  return (
    <div>
      <h3 className={`${styles['title']}`}>Add comment</h3>
      <AddComment addComment={(name, comment, data) => {
        props.addComment(props.id, name, comment, data)
      }}/>
      <h3 className={`${styles['title']}`}>All comments</h3>
      <ShowComments allComments={props.state.comments} postId={props.id}/>
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
