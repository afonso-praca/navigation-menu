import React from 'react';
import { history } from 'sdk';
import './MenuButton.less';

class MenuButton extends React.Component {
  handleTouchTap = () => {
    this.props.toggleMenu();
    history.pushState(null, this.props.slug, { pageSize: 5 });
  }

  render() {
    return (
      <li className="MenuButton" onTouchTap={this.handleTouchTap}>
        <span className="menu-button-name">
          { this.props.name }
        </span>
        <button className="menu-button-symbol" />
      </li>
    );
  }
}

export default MenuButton;
