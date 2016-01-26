import React from 'react';
import { stores, connectToStores } from 'sdk';
import NavigationMenuParent from './NavigationMenuParent/NavigationMenuParent';
import './NavigationMenu.less';

@connectToStores()
class NavigationMenu extends React.Component {
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
        <NavigationMenuParent
          key={category.get('name')}
          category={category}
          openChildren={this.openChildren}
          isActive={isItemActive}
          toggleMenu={this.props.toggleMenu}
        />
      );
    }).toArray();

    return (
      <div className="container NavigationMenu">
        <div className="row">
          <nav className="navigation-menu-header">
            <button
              className="navigation-menu-header-button"
              onTouchTap={this.handleTouchTap}
            />
          </nav>
        </div>
        <div className="row">
          <div className="navigation-menu-content">
            <h1 className="navigation-menu-content-title text-left">
              Departamentos
            </h1>
          </div>
        </div>
        <div className="row">
          <ul className="col-xs-12 navigation-menu-container">
            { items }
          </ul>
        </div>
      </div>
    );
  }
}

export default NavigationMenu;
