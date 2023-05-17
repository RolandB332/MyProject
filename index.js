/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import nodejs from 'nodejs-mobile-react-native';

nodejs.start("main.js");

AppRegistry.registerComponent(appName, () => App);