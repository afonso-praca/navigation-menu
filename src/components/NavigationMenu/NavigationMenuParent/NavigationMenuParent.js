import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { history } from 'sdk';
import NavigationMenuContainer from './NavigationMenuContainer/NavigationMenuContainer';
import './NavigationMenuParent.less';

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

    return (
      <li className="NavigationMenuParent row theme__border-color--dark-plus" data-is-open={isActive}>
        <div
          className="NavigationMenuParent__button-content theme__background-color--dark"
          onTouchTap={this.handleTouchTap}
        >
          <span className="NavigationMenuParent__button-name theme__font-family--main">
            { this.props.category.get('name') }
          </span>
          <button
            className="NavigationMenuParent__button-symbol"
            data-is-open={isActive}
          />
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
