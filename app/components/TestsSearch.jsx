import React from 'react'
import {connect} from 'react-redux'
import {Grid, Checkbox, Input} from 'semantic-ui-react'

import {setSearchText, toggleShowCompleted} from 'actions/testActions'

export class TestsSearch extends React.Component {
  render () {
    var {dispatch, showCompleted, searchText} = this.props
    return (
      <Grid.Row className='container__header'>
        <Grid.Row>
          <Input size='large' icon='search' fluid placeholder='Search by Title or Platform'
            ref='searchText' value={searchText} onChange={() => {
              var searchText = this.refs.searchText.value
              dispatch(setSearchText(searchText))
            }} />
        </Grid.Row>
        <Grid.Row>
          <Checkbox label='Show completed tests' ref='showCompleted'
            checked={showCompleted} onChange={() => {
              dispatch(toggleShowCompleted())
            }} />
        </Grid.Row>
      </Grid.Row>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {
    showCompleted: state.showCompleted,
    searchText: state.searchText
  }
}

export default connect(mapStateToProps)(TestsSearch)
