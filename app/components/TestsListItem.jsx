import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import moment from 'moment'
import {startDeleteTest} from 'actions/testActions'

class TestsListItem extends React.Component {
  render () {
    var renderDate = () => {
      return 'Created at ' + moment.unix(createdAt).format('MMM Do YYYY @ h:mm a')
    }
    var renderPlatform = (platform) => {
      switch (platform) {
        case 'ios':
          return 'apple'
        case 'android':
          return 'android'
        case 'web':
        default:
          return 'desktop'
      }
    }

    var {id, dispatch, title, createdAt, platform} = this.props
    return (
      <li className='cards__item' key={id}>
        <div className='card'>
          <div className='card__image card__image--fence'>
            {renderPlatform(platform)}
          </div>
          <div className='card__content'>
            <div className='card__title'>{title}</div>
            <p className='card__text'>
              Here you will see some text about the test, yo.
              <span>{renderDate()}</span>
            </p>
            <div className='button-group small-centered'>
              <Link to={`/get-approoved/${id}`} className='button primary card__btn'>Continue Editing</Link>
              <Link to={`/view/${id}`} className='button hollow primary card__btn'>View Test</Link>
            </div>
          </div>
          <a onClick={(e) => {
            e.preventDefault()
            dispatch(startDeleteTest(id))
          }}>
            trash
          </a>
        </div>
      </li>
    )
  }
}

export default connect()(TestsListItem)
