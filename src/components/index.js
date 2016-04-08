import { actions } from 'sdk';
import NavigationMenu from './NavigationMenu/NavigationMenu';

let components = [
  {
    name: 'NavigationMenu@pilateslovers.navigation-menu',
    constructor: NavigationMenu
  }
];

actions.ComponentActions.register(components);
