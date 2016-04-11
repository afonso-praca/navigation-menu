import React from 'react';
import { history } from 'sdk';
import './NavigationMenuButton.less';
import SVGIcon from 'utils/SVGIcon';
import doubleFrontArrowIcon from 'assets/icons/doubleFrontArrow_icon.svg';
import doubleFrontArrowImg from 'assets/icons/doubleFrontArrow_icon.png';


class NavigationMenuButton extends React.Component {
  handleTouchTap = () => {
    this.props.toggleMenu();
    history.pushState(null, this.props.slug, { pageSize: 5 });
  }

  render() {
    return (
      <li className="NavigationMenuButton theme__border-color--light-plus" onClick={this.handleTouchTap}>
        <span className="NavigationMenuButton__name theme__color--accent">
          { this.props.name }
        </span>
        <button className="NavigationMenuButton__button-symbol">
          <SVGIcon className="icon" svg={doubleFrontArrowIcon} fallback={doubleFrontArrowImg} height={12} fill="#444444" />
        </button>
      </li>
    );
  }
}

export default NavigationMenuButton;
