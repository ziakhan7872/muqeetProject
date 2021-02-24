/** @format */

import { AppRegistry } from 'react-native';
import Entrypoint from './app/Entrypoint';
import { name as appName } from './app.json';
import { Sentry } from 'react-native-sentry';

Sentry.config('https://1b0d55f13665455e995e8c7b31374c5f@sentry.io/1553204').install();

AppRegistry.registerComponent(appName, () => Entrypoint);
