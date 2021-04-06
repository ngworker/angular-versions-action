import {switchAngularBuilder} from '../src/switch-angular-builder';
import {mixedAngularJson} from './angular-json/mixed-angular-json';
import {newBuilderAngularJson} from './angular-json/newer-builder-angular-json';
import {oldBuilderAngularJson} from './angular-json/old-builder-angular-json';

describe(switchAngularBuilder.name, () => {
  [
    '6.0.x',
    '6.1.x',
    '7.0.x',
    '7.1.x',
    '7.2.x',
    '8.0.x',
    '8.1.x',
    '8.2.x',
    '9.0.x',
    '9.1.x',
    '10.0.x'
  ].forEach(version => {
    test('replace all libraries with the old builder', () => {
      const actual = switchAngularBuilder(version, mixedAngularJson);

      expect(actual).toEqual(oldBuilderAngularJson);
    });
  });

  ['10.1.x', '10.2.x', '11.0.x', '11.1.x', '11.2.x'].forEach(version => {
    test('replace all libraries with the new builder', () => {
      const actual = switchAngularBuilder(version, mixedAngularJson);

      expect(actual).toEqual(newBuilderAngularJson);
    });
  });
});
