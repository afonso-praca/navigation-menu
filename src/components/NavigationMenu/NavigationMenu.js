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
          isActive={isItemActive}
          toggleMenu={this.props.toggleMenu}
        />
      );
    }).toArray();

    return (
      <div className="container-fluid NavigationMenu">
        <div className="row">
          <nav className="NavigationMenu__navbar">
            <button
              className="NavigationMenu__navbar-button"
              onTouchTap={this.handleTouchTap}
            />
          </nav>
        </div>
        <div className="row">
          <ul className="col-xs-12 NavigationMenu__container">
            { items }
          </ul>
        </div>
      </div>
    );
  }
}

export default NavigationMenu;
