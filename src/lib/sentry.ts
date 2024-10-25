import {
  init,
  ReactNavigationInstrumentation,
  ReactNativeTracing,
} from '@sentry/react-native';

import { API_URL, SENTRY_DSN } from '@/config';

const routingInstrumentation = new ReactNavigationInstrumentation({
  enableTimeToInitialDisplay: true,
});

export const initializeSentry = () => {
  init({
    enabled: !__DEV__,
    dsn: SENTRY_DSN,
    integrations: [
      new ReactNativeTracing({
        routingInstrumentation,
      }),
    ],
    tracePropagationTargets: [API_URL],
  });
};
