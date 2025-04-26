import { RootStackParamList } from '@/routes/HomeRoute';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
