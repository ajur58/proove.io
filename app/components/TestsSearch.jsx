import React from 'react'
import {connect} from 'react-redux'
import {Grid, Checkbox, Input} from 'semantic-ui-react'

import {setSearchText, toggleShowCompleted} from 'actions/testActions'

export class TestsSearch extends React.Component {
  render () {
    var {dispatch, showCompleted, searchText} = this.props
    return (
      <Grid>
        <Grid.Row className='container__header'>
          <Grid.Column mobile='16' tablet='12' computer='10'>
            <Input size='large' icon='search' fluid placeholder='Search by Title or Platform'
              ref='searchText' value={searchText} onChange={(event, data) => {
                dispatch(setSearchText(data.value))
              }} />
          </Grid.Column>
          <Grid.Column mobile='16' tablet='4' computer='6'>
            <Checkbox label='Show completed tests' ref='showCompleted'
              checked={showCompleted} onChange={() => {
                dispatch(toggleShowCompleted())
              }} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
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
