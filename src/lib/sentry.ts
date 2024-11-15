import { init, reactNavigationIntegration } from '@sentry/react-native';

import { API_URL, SENTRY_DSN } from '@/config';

export const navigationIntegration = reactNavigationIntegration({
  enableTimeToInitialDisplay: true,
});

export const initializeSentry = () => {
  init({
    enabled: !__DEV__,
    dsn: SENTRY_DSN,
    integrations: [navigationIntegration],
    tracePropagationTargets: [API_URL],
  });
};
