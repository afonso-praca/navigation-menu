import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { history } from 'sdk';
import NavigationMenuContainer from './NavigationMenuContainer/NavigationMenuContainer';
import './NavigationMenuParent.less';
import SVGIcon from 'utils/SVGIcon';
import minusIcon from 'assets/icons/minus_icon.svg';
import minusImg from 'assets/icons/minus_icon.png';
import plusIcon from 'assets/icons/plus_icon.svg';
import plusImg from 'assets/icons/plus_icon.png';

class NavigationMenuParent extends React.Component {
  handleTouchTap = () => {
    this.props.openChildren(this.props.category.get('name'));
  }

  handleLinkTap = () => {
    this.props.toggleMenu();
    history.pushState(null, `/${this.props.category.get('slug')}/c`, { pageSize: 5 });
  }

  render() {
    let isActive = this.props.isActive;
    let content = isActive ?
      (
        <NavigationMenuContainer
          parentSlug={this.props.category.get('slug')}
          itemChildren={this.props.category.get('children')}
          isActive={this.props.isActive}
          toggleMenu={this.props.toggleMenu}
        />
      ) : null;

    const icon = {
      svg: !this.props.isActive ? plusIcon : minusIcon,
      img: !this.props.isActive ? plusImg : minusImg
    };
    return (
      <li className="NavigationMenuParent row theme__border-color--dark-plus" data-is-open={isActive}>
        <div
          className="NavigationMenuParent__button-content theme__background-color--dark"
          onTouchTap={this.handleTouchTap}
        >
          <span className="NavigationMenuParent__button-name theme__font-family--main">
            { this.props.category.get('name') }
          </span>
          <button data-is-open={isActive} className="NavigationMenuParent__button-toggle">
            <SVGIcon
              svg={icon.svg}
              fallback={icon.img}
              width={15}
              cleanupExceptions={['width', 'height']}
              fill="#fff"
            />
          </button>
        </div>
        <div
          className="NavigationMenuParent__button-see-all theme__background-color--dark row-fluid theme__font-family--regular"
          data-is-open={isActive}
        >
          <a
            href="#"
            className="NavigationMenuParent__button-see-all-link theme__color--accent theme__hover-color--accent theme__font-family--regular"
            onTouchTap={this.handleLinkTap}
          >
            Ver todos da categoria
          </a>
        </div>
        <ReactCSSTransitionGroup
          transitionName="NavigationMenuContainer"
          transitionEnterTimeout={150}
          transitionLeaveTimeout={250}
        >
          { content }
        </ReactCSSTransitionGroup>
      </li>
    );
  }
}

export default NavigationMenuParent;
