import { actions, redux } from 'sdk';
import NavigationMenu from './NavigationMenu/NavigationMenu';

let components = [
  {
    name: 'NavigationMenu@vtex.navigation-menu',
    constructor: NavigationMenu,
  }
];

redux.store.dispatch(redux.actionCreators.component.register(components));
actions.ComponentActions.register(components);
