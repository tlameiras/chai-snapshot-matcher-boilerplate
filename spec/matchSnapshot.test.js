const { expect } = require('chai');
require('dotenv').config()


describe('chai-snapshot-matcher', function () {
  describe('- matchSnapshot -', function () {
    it('use matchSnapshot to expect numbers', function () {
      const testVar = 1;

      expect(testVar).to.matchSnapshot(this);
    });

    it('use matchSnapshot to expect booleans', function () {
      const testVar = true;

      expect(testVar).to.matchSnapshot(this);
    });

    it('use matchSnapshot to expect strings', function () {
      const testVar = 'Hello World!';

      expect(testVar).to.matchSnapshot(this);
    });

    it('use matchSnapshot to expect arrays', function () {
      const testVar = [1, 'two', '3'];

      expect(testVar).to.matchSnapshot(this);
    });

    it('use matchSnapshot to expect objects', function () {
      const testVar = {
        a: {
          b: 1,
          c: 2,
        },
        d: 3,
      };

      expect(testVar).to.matchSnapshot(this);
    });

    it('use the hint attribute to customize the snapshot title', function () {
      const testVar = 'custom name';

      expect(testVar).to.matchSnapshot(this, { hint: '(go check the __snapshots__ folder)' });
    });

    it('use the hint attribute to have more than one matchSnapshot per it', function () {
      const testVar = 10;

      expect(testVar).to.matchSnapshot(this, { hint: '(value)' });
      expect(typeof testVar).to.matchSnapshot(this, { hint: '(type)' });
    });

    it('use the folder attribute to save the snapshots in nested folders (util to execute the same tests in different environments)', function () {
      let testVar;
      // TARGET_ENVIRONMENT is an environment variable that can be set using the command line or directly in the .env file
      // TARGET_ENVIRONMENT can have one of the following values: stg, qa, prd
      const { TARGET_ENVIRONMENT } = process.env;

      if (TARGET_ENVIRONMENT === 'stg') {
        testVar = 'stg environment';
      } else if (TARGET_ENVIRONMENT === 'qa') {
        testVar = 'qa environment';
      } else if (TARGET_ENVIRONMENT === 'prd') {
        testVar = 'prd environment';
      }

      // Note: this test was already executed for the 3 environment (such as you can confirm in the snapshots folder)
      expect(testVar).to.matchSnapshot(this, { folder: TARGET_ENVIRONMENT });
    });

    it('use the path attribute to so save the snapshots in a path at your choice', function () {
      // You can define the path that you want
      const snapPath = '/Users/tiagolameiras/Downloads/MySnapshots/';
      const testVar = 'Hello World';

      // This sanpshot is not available in the project repository because the snapshot was saved out of it
      expect(testVar).to.matchSnapshot(this, { snapshotPath: snapPath });
    });

    it('combine more than one matchSpecificSnapshot features (e.g. folder and name)', function () {
      const testVar = 'multiple attributes combined';

      expect(testVar).to.matchSnapshot(this, {
        folder: 'customFolder',
        name: 'Snapshot with a custom name, saved in a nested folder',
      });
    });

    // TODO
    // Add test to the name attribute
    // Add test to the ignore attribute
  });
});
