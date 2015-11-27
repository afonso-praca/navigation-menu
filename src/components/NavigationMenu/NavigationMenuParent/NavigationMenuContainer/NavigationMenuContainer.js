import React from 'react';
import NavigationMenuButton from './NavigationMenuButton/NavigationMenuButton';
import './NavigationMenuContainer.less';

class NavigationMenuContainer extends React.Component {
  render() {
    let children = this.props.itemChildren.map((child) => {
      let slug = `/${this.props.parentSlug}/${child.get('slug')}/c`;

      return (
        <NavigationMenuButton
          key={child.get('name')}
          name={child.get('name')}
          slug={slug}
          toggleMenu={this.props.toggleMenu}
        />
      );
    });

    return (
      <ul
        className="MenuChildrenContainer"
        data-is-open={this.props.isActive}
      >
        { children }
      </ul>
    );
  }
}

export default NavigationMenuContainer;
