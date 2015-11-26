import React from 'react';
import MenuButton from './MenuButton/MenuButton';
import './MenuChildrenContainer.less';

class MenuChildrenContainer extends React.Component {
  render() {
    let children = this.props.itemChildren.map((child) => {
      let slug = `/${this.props.parentSlug}/${child.get('slug')}/c`;

      return (
        <MenuButton
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

export default MenuChildrenContainer;
