import './src/lib/wdyr';

import { AppRegistry } from 'react-native';
import Constants from 'expo-constants';

import { App } from './src/App';
import { name as appName } from './app.json';

let AppEntryPoint = App;

if (Constants.expoConfig.extra.storybookEnabled === 'true') {
  AppEntryPoint = require('./.storybook/Storybook').StorybookUIRoot;
}

AppRegistry.registerComponent(appName, () => AppEntryPoint);
