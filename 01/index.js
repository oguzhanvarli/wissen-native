/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import State from './src/notes/State';
import Counter from './src/notes/Counter';
import Effect from './src/notes/Effect';


AppRegistry.registerComponent(appName, () => App);
