import React from 'react';
import { stores, utils } from 'sdk';
import MenuParentButton from './MenuParentButton/MenuParentButton';
import './Menu.less';

@utils.connectToStores()
class Menu extends React.Component {
  state = {
    activeItem: {}
  }

  static getStores() {
    return [
      stores.CategoryStore
    ];
  }

  static getPropsFromStores() {
    return {
      categories: stores.CategoryStore.getState()
    };
  }

  componentDidMount() {
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.body.style.overflow = 'visible';
  }

  openChildren = (categoryName) => {
    let activeItem = this.state.activeItem[categoryName] || false;
    let activeItemClone = this.state.activeItem;

    activeItemClone[categoryName] = !activeItem;
    this.setState({ activeItem: activeItemClone });
  }

  handleTouchTap = () => {
    this.props.toggleMenu();
  }

  render() {
    let items = this.props.categories.valueSeq().map((category) => {
      let isItemActive = this.state.activeItem[category.get('name')] || false;

      return (
        <MenuParentButton
          key={category.get('name')}
          category={category}
          openChildren={this.openChildren}
          isActive={isItemActive}
          toggleMenu={this.props.toggleMenu}
        />
      );
    });

    return (
      <div className="container Menu">
        <div className="row">
          <nav className="menu-header">
            <button
              className="menu-header-button"
              onTouchTap={this.handleTouchTap}
            />
          </nav>
        </div>
        <div className="row">
          <div className="menu-content">
            <h1 className="menu-content-title text-left">
              Departamentos
            </h1>
          </div>
        </div>
        <div className="row">
          <ul className="col-xs-12 menu-container">
            { items }
          </ul>
        </div>
      </div>
    );
  }
}

export default Menu;
