import React, {Component} from 'react'
import {connect} from 'react-redux'

class AddComment extends Component {
  render() {
    return(
      <h1>AddComments</h1>
    )
  }
}

class ShowComments extends Component {
  render() {
    return(
      <h1>ShowComments</h1>
    )
  }
}

class Comments extends Component {

	componentWillMount(){
		this.postId = this.props.state.posts.data[0]._id
	}

    render() {

        return (
            <div id="Comments">
              <AddComment/>
              <ShowComments/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        state
    }
}
export default connect(mapStateToProps, null)(Comments)
