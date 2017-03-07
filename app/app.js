import React from 'react'
import ReactDOM from 'react-dom'

class Feed extends React.Component {
  render () {
    return (
      <div>
        <div className='fb-status-update-entry panel panel-default'>
          <div className='panel-body'>
            <ul className='nav nav-pills'>
              <li role='presentation' className='active'>
                <a href='#'><span className='glyphicon glyphicon-pencil' /> <strong>Update Status</strong></a>
              </li>
              <li role='presentation'>
                <a href='#'><span className='glyphicon glyphicon-picture' /> <strong>Add Photos/Video</strong></a>
              </li>
              <li role='presentation'>
                <a href='#'><span className='glyphicon glyphicon-th' /> <strong>Create Photo Album</strong></a>
              </li>
            </ul>
            <div className='media'>
              <div className='media-left media-top'>
                PIC
              </div>
              <div className='media-body'>
                <div className='form-group'>
                  <textarea className='form-control' rows='2' placeholder="What's on your mind?" />
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <div className='btn-group' role='group'>
                  <button type='button' className='btn btn-default'>
                    <span className='glyphicon glyphicon-camera' />
                  </button>
                  <button type='button' className='btn btn-default'>
                    <span className='glyphicon glyphicon-user' />
                  </button>
                  <button type='button' className='btn btn-default'>
                    ☺
                  </button>
                  <button type='button' className='btn btn-default'>
                    <span className='glyphicon glyphicon-pushpin' />
                  </button>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='pull-right'>
                  <button type='button' className='btn btn-default'>
                    <span className='glyphicon glyphicon-user' /> Friends <span className='caret' />
                  </button>
                  <button type='button' className='btn btn-default'>
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='fb-status-update panel panel-default'>
          <div className='panel-body'>
            <div className='row'>
              <div className='col-md-10'>
                <div className='media'>
                  <div className='media-left media-top'>
                    PIC
                  </div>
                  <div className='media-body'>
                    <a href='#'>Someone</a>
                    <br /> Yesterday at 3:48pm · Austin, TX · <span className='glyphicon glyphicon-user' />
                  </div>
                </div>
              </div>
              <div className='col-md-2'>
                <span className='caret pull-right' />
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                ugh.
              </div>
            </div>
            <hr />
            <div className='row'>
              <div className='col-md-12'>
                <ul className='list-inline'>
                  <li>
                    <a href='#'><span className='glyphicon glyphicon-thumbs-up' /> Like</a>
                  </li>
                  <li>
                    <a href='#'><span className='glyphicon glyphicon-comment' /> Comment</a>
                  </li>
                  <li>
                    <a href='#'><span className='glyphicon glyphicon-share-alt' /> Share</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='panel-footer'>
            <div className='row'>
              <div className='col-md-12'>
                <a href='#'>13 people</a> like this
              </div>
            </div>
            <hr />
            <ul className='media-list'>
              <li className='media'>
                <div className='media-left media-top'>
                  PIC
                </div>
                <div className='media-body'>
                  <a href='#'>Someone Else</a> hope everything is ok!
                  <br /><a href='#'>Like</a> · <a href='#'>Reply</a> · 20 hrs
                </div>
              </li>
              <li className='media'>
                <div className='media-left media-top'>
                  PIC
                </div>
                <div className='media-body'>
                  <a href='#'>Another Person</a> sending hugs your way
                  <br /><a href='#'>Like</a> · <a href='#'>Reply</a> · 20 hrs
                </div>
              </li>
              <li className='media'>
                <div className='media-left media-top'>
                  PIC
                </div>
                <div className='media-body'>
                  <div className='input-group'>
                    <input type='text' className='form-control' placeholder='Write a comment...' />
                    <span className='input-group-btn'><button className='btn btn-default' type='button'> <span className='glyphicon glyphicon-camera' /> </button>
                      <button className='btn btn-default' type='button'> ☺ </button>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Feed />,
  document.getElementById('fb-feed')
)
