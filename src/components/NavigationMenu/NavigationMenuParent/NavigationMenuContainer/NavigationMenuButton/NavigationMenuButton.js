import React from 'react';
import { history } from 'sdk';
import './NavigationMenuButton.less';

class NavigationMenuButton extends React.Component {
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

export default NavigationMenuButton;
