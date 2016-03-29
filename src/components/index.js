import { actions } from 'sdk';
import NavigationMenu from './NavigationMenu/NavigationMenu';

let components = [
  {
    name: 'NavigationMenu@vtex.navigation-menu',
    constructor: NavigationMenu
  }
];

actions.ComponentActions.register(components);
