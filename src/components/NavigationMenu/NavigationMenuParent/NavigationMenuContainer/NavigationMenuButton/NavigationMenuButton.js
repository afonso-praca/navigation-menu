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
      <li className="NavigationMenuButton theme__border-color--light-plus" onTouchTap={this.handleTouchTap}>
        <span className="NavigationMenuButton__name theme__color--accent">
          { this.props.name }
        </span>
        <button className="NavigationMenuButton__button-symbol" />
      </li>
    );
  }
}

export default NavigationMenuButton;
