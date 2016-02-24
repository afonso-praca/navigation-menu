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
          <div className="NavigationMenu__content">
            <h1 className="text-left theme__font-family--main theme__color--primary NavigationMenu__header">
              Departamentos
            </h1>
          </div>
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
