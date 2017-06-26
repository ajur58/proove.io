import React from 'react';
import {connect} from 'react-redux';
import { Dropdown, Image, Menu } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

import * as authActions from 'actions/authActions';
import classes from './nav.scss';

class Nav extends React.Component {
  onLogout (e) {
    var {dispatch} = this.props;
    e.preventDefault();

    dispatch(authActions.startLogout());
  }
  render () {
    const trigger = (
      <span>
        <Image src={this.props.auth.photoURL} avatar /> {this.props.auth.displayName}
      </span>
    );

    const options = [
      {
        key: 'user',
        text: <span>Signed in as <strong>{this.props.auth.displayName}</strong></span>,
        disabled: true
      },
      { key: 'settings', text: 'Settings' },
      { key: 'sign-out', text: 'Sign Out', onClick: this.onLogout.bind(this) }
    ];

    const DropdownMenu = () => (
      <Dropdown trigger={trigger} options={options} pointing='top right' />
    );

    return (
      <Menu secondary>
        <Menu.Item as={Link} to='/' name='proove' className={`${classes.navButton} ${classes.logo}`}>
          proove.io
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
            {DropdownMenu()}
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

function mapStateToProps (state, ownProps) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Nav);
