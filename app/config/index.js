import Develop from 'app/config/environment/Develop';
import Production from 'app/config/environment/Production';
import Staging from 'app/config/environment/Staging';

const ENV = 'Staging'; // 'Develop'; 'Production' ; 'Staging';

export function getConfigs() {
  switch (ENV) {
    case 'Production':
      return Production;
    case 'Staging':
      return Staging;
    default:
      return Develop;
  }
}
