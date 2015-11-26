import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { history } from 'sdk';
import MenuChildrenContainer from './MenuChildrenContainer/MenuChildrenContainer';
import './MenuParentButton.less';

class MenuParentButton extends React.Component {
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
        <MenuChildrenContainer
          parentSlug={this.props.category.get('slug')}
          itemChildren={this.props.category.get('children')}
          isActive={this.props.isActive}
          toggleMenu={this.props.toggleMenu}
        />
      ) : null;

    return (
      <li className="MenuParentButton" data-is-open={isActive}>
        <div
          className="menu-parent-button-content"
          onTouchTap={this.handleTouchTap}
        >
          <span className="menu-parent-button-name">
            { this.props.category.get('name') }
          </span>
          <button
            className="menu-parent-button-symbol"
            data-is-open={isActive}
          />
        </div>
        <div
          className="menu-parent-button-see-all row-fluid"
          data-is-open={isActive}
        >
          <a
            href="#"
            className="menu-parent-button-see-all-link"
            onTouchTap={this.handleLinkTap}
          >
            Ver todos da categoria
          </a>
        </div>
        <ReactCSSTransitionGroup
          transitionName="MenuChildrenContainer"
          transitionEnterTimeout={150}
          transitionLeaveTimeout={250}
        >
          { content }
        </ReactCSSTransitionGroup>
      </li>
    );
  }
}

export default MenuParentButton;
