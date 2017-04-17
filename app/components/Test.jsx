import React from 'react'
import * as Redux from 'react-redux'
import moment from 'moment'
import {FaApple, FaAndroid, FaDesktop} from 'react-icons/lib/fa'

class Test extends React.Component {
  render () {
    var renderDate = () => {
      return 'Created at ' + moment.unix(createdAt).format('MMM Do YYYY @ h:mm a')
    }
    var renderPlatform = (platform) => {
      switch (platform) {
        case 'ios':
          return <FaApple size={100} />
        case 'android':
          return <FaAndroid size={100} />
        case 'web':
        default:
          return <FaDesktop size={100} />
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
              <a className='button primary card__btn'>Continue Editing</a>
              <a className='button hollow primary card__btn'>View Results</a>
            </div>
          </div>
        </div>
      </li>
    )
  }
}

export default Redux.connect()(Test)
