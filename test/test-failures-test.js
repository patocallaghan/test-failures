const MAIN_TEXT = `ok 30 Chrome 54.0 - Exam Partition #84 - Team Engage 1 | Integration: Messages - Message Editor - Content: Switching between A/B variations should update the composer with ember_engage_messenger_v3 enabled
not ok 31 Chrome 54.0 - Exam Partition #84 - Team Engage 1 | Integration: Messages - Message Editor - Content: Editing reactions from a live message shows a warning modal on the first edit only

    ---
        actual: >
            false
        expected: >
            true
        stack: >
                at http://localhost:7357/assets/test-support.js:4067:12
                at Class.exception (http://localhost:7357/assets/vendor.js:54715:7)
                at onerrorDefault (http://localhost:7357/assets/vendor.js:46665:24)
                at Object.trigger (http://localhost:7357/assets/vendor.js:69010:11)
                at http://localhost:7357/assets/vendor.js:70259:40
                at invokeWithOnError (http://localhost:7357/assets/vendor.js:14899:18)
                at Queue.flush (http://localhost:7357/assets/vendor.js:14954:11)
                at DeferredActionQueues.flush (http://localhost:7357/assets/vendor.js:14762:17)
                at Backburner.end (http://localhost:7357/assets/vendor.js:15117:25)
                at Backburner.run (http://localhost:7357/assets/vendor.js:15230:18)
                at Object.run [as default] (http://localhost:7357/assets/vendor.js:35751:27)
                at http://localhost:7357/assets/vendor.js:54930:36
                at r (https://gtm.intercomassets.com/94436f20a65ad436fc076fa480c95772dc3e3031-gtm.js:1:23001)
        message: >
            ReferenceError: modalVisible is not defined
        Log: |
    ...
ok 32 Chrome 54.0 - Exam Partition #84 - Team Engage 1 | Integration: Messages - Message Editor - Content: Content step opens and closes
ok 33 Chrome 54.0 - Exam Partition #84 - Team Platform | Unit: Controller – Apps / App / Settings / Messenger: parsed domains returns correct string`;
const MULTIPLE_FAILURES = `
ok 30 Chrome 54.0 - Exam Partition #84 - Team Engage 1 | Integration: Messages - Message Editor - Content: Switching between A/B variations should update the composer with ember_engage_messenger_v3 enabled
not ok 31 Chrome 54.0 - Exam Partition #84 - Team Engage 1 | Integration: Messages - Message Editor - Content: Content step opens and closes
ok 32 Chrome 54.0 - Exam Partition #84 - Team Engage 1 | Integration: Messages - Message Editor - Content: Editing reactions
not ok 33 Chrome 54.0 - Exam Partition #84 - Team Engage 1 | Unit: Controller – Apps / App / Settings / Messenger: parsed domains returns correct string
`;
const NOT_OK_LINE = 'not ok 31 Chrome 54.0 - Exam Partition #84 - Team Engage 1 | Integration: Messages - Message Editor - Content: Editing reactions from a live message shows a warning modal on the first edit only';
const NOT_OK_META_RESULT = [{
  seed: '1234567ab',
  team: 'engage',
  partition: '84',
  testName: 'Team Engage 1 | Integration: Messages - Message Editor - Content: Editing reactions from a live message shows a warning modal on the first edit only'
}];
const OUTPUT_META_OBJECT = {
  engage: {
    failingTests: [
      'Team Engage 1 | Integration: Messages - Message Editor - Content: Editing reactions from a live message shows a warning modal on the first edit only'
    ],
    testMeta: {
      'Team Engage 1 | Integration: Messages - Message Editor - Content: Editing reactions from a live message shows a warning modal on the first edit only': {
        '1234567ab': '84'
      }
    }
  }
};

const assert = require('assert');
const TestFailures = require('../lib/test-failures');
const lineMetaGenerator = require('../lib/line-meta-generator.js');
const testParser = require('../lib/test-parser.js');
const generateOutput = require('../lib/generate-output.js');

describe('TestFailures', function() {
  it('should return the correct output object', function() {
    assert.deepEqual(generateOutput('1234567ab', MAIN_TEXT), OUTPUT_META_OBJECT);
  });

  describe('multiple failures for the same team', () => {
    const MULTIPLE_FAILURES = `
ok 30 Chrome 54.0 - Exam Partition #84 - Team Engage 1 | Integration: Messages - Message Editor - Content: Switching between A/B variations should update the composer with ember_engage_messenger_v3 enabled
not ok 31 Chrome 54.0 - Exam Partition #84 - Team Engage 1 | Integration: Messages - Message Editor - Content: Editing reactions
ok 32 Chrome 54.0 - Exam Partition #84 - Team Engage 1 | Integration: Messages - Message Editor - Content: Content step opens and closes
not ok 33 Chrome 54.0 - Exam Partition #84 - Team Engage 1 | Unit: Controller – Apps / App / Settings / Messenger: parsed domains returns correct string
  `;
    const OUTPUT_META_OBJECT = {
      engage: {
        failingTests: [
          'Team Engage 1 | Integration: Messages - Message Editor - Content: Editing reactions',
          'Team Engage 1 | Unit: Controller – Apps / App / Settings / Messenger: parsed domains returns correct string'
        ],
        testMeta: {
          'Team Engage 1 | Integration: Messages - Message Editor - Content: Editing reactions': {
            '1234567ab': '84'
          },
          'Team Engage 1 | Unit: Controller – Apps / App / Settings / Messenger: parsed domains returns correct string': {
            '1234567ab': '84'
          }
        }
      }
    };
    it('should return the correct line', function() {
      assert.deepEqual(generateOutput('1234567ab', MULTIPLE_FAILURES), OUTPUT_META_OBJECT);
    });
  });
});

describe('lineMetaGenerator', function() {
  it('should return the correct meta', function() {
    assert.deepEqual(lineMetaGenerator('1234567ab', [NOT_OK_LINE]), NOT_OK_META_RESULT);
  });
});

describe('testParser', function() {
  it('should return the correct line', function() {
    assert.deepEqual(testParser(MAIN_TEXT), [NOT_OK_LINE]);
  });

  it('matches multiple lines', function() {
    assert.deepEqual(testParser(MULTIPLE_FAILURES), [
      'not ok 31 Chrome 54.0 - Exam Partition #84 - Team Engage 1 | Integration: Messages - Message Editor - Content: Content step opens and closes',
      'not ok 33 Chrome 54.0 - Exam Partition #84 - Team Engage 1 | Unit: Controller – Apps / App / Settings / Messenger: parsed domains returns correct string'
    ]);
  });
});

describe('TestFailures', function() {
  it('should return the correct meta', function() {
    const FINAL_RESULT = {
      "engage": {
        "failingTests": [
          "Team Engage 1 | Integration: Messages - Message Editor - Content: Editing reactions",
          "Team Engage 1 | Unit: Controller – Apps / App / Settings / Messenger: parsed domains returns correct string"
        ],
        "testMeta": {
          "Team Engage 1 | Integration: Messages - Message Editor - Content: Editing reactions": {
            "1234567ab": "84"
          },
          "Team Engage 1 | Unit: Controller – Apps / App / Settings / Messenger: parsed domains returns correct string": {
            "1234567ab": "84"
          }
        }
      },
      "acquire": {
        "failingTests": [
          "Team Acquire | Integration: Show page for visitor auto messages: Can update live/paused state"
        ],
        "testMeta": {
          "Team Acquire | Integration: Show page for visitor auto messages: Can update live/paused state": {
            "4567890cd": "4"
          }
        }
      }
    };
    assert.deepEqual(TestFailures.run('test/fixtures'), FINAL_RESULT);
  });
});

