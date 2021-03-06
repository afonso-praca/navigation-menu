import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { history } from 'sdk';
import NavigationMenuContainer from './NavigationMenuContainer/NavigationMenuContainer';
import './NavigationMenuParent.less';
import './NavigationMenuParentCustom.less';
import '../utils.less';

class NavigationMenuParent extends React.Component {
  handleTouchTap = () => {
    this.props.openChildren(this.props.category.get('name'));
  }

  handleLinkTap = () => {
    this.props.toggleMenu();
    history.pushState(null, `/${this.props.category.get('slug')}/c`, { pageSize: 12 });
  }

  render() {
    let isActive = this.props.isActive;
    let content = isActive ?
      (
        <NavigationMenuContainer
          parentSlug={this.props.category.get('slug')}
          itemChildren={this.props.category.get('children')}
        />
      ) : null;

    return (
      <div className="container-fluid">
        <li className="NavigationMenuParent row" data-is-open={isActive}>
          <div
            className="NavigationMenuParent__button-content"
            onClick={this.handleLinkTap}
          >
            <span className="NavigationMenuParent__button-name">
              { this.props.category.get('name') }
            </span>
          </div>
          <ReactCSSTransitionGroup
            transitionName="NavigationMenuContainer"
            transitionEnterTimeout={150}
            transitionLeaveTimeout={500}
          >
            { content }
          </ReactCSSTransitionGroup>
        </li>
      </div>
    );
  }
}

export default NavigationMenuParent;
