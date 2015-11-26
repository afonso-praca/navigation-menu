import { actions } from 'sdk';
import Menu from './Menu/Menu';

let components = [
  {
    name: 'Menu@vtex.menu',
    constructor: Menu,
  }
];

actions.ComponentActions.register(components);
