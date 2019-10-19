import Develop from 'app/config/environment/Develop';
import Production from 'app/config/environment/Production';
import Staging from 'app/config/environment/Staging';
import IntegerResources from 'app/config/resources/integer';
import StringResources from 'app/config/resources/string';

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
