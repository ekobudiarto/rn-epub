/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import RNEPubLibModule from 'react-native-e-pub-lib';


RNEPubLibModule.openEPub("file:///android_asset/barrett.epub");
AppRegistry.registerComponent(appName, () => App);
