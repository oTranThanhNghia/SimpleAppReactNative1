import Develop from '../config/environment/Develop';
import Production from '../config/environment/Production';
import Staging from '../config/environment/Staging';
import IntegerResources from '../config/resources/integer';
import StringResources from '../config/resources/string';

const ENV = 'Develop'; // 'Develop'; 'Production' ; 'Staging';

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

export function getIntegerResources() {
  return IntegerResources;
}

export function getStringResources() {
  return StringResources;
}
