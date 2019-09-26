import NavigationService from 'app/navigation/NavigationService';

export function navigateToHome(params) {
  NavigationService.navigate('Home', params);
}
