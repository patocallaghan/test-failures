const MAIN_TEXT = `<?xml version="1.0" encoding="UTF-8"?>
<testsuite name="Testem Tests" tests="358" skipped="0" failures="9" timestamp="Tue Nov 08 2016 01:01:00 GMT+0000 (GMT)" time="80.360">
  <testcase classname="Chrome 54.0" name="Exam Partition #21 - Team Engage 1 | Integration: Component - Message Editor index completed component | Integration | Component | message-editor/index-completed-component: it does not render the tick/index in show mode" time="1.569" />
  <testcase classname="Chrome 54.0" name="Exam Partition #21 - Team Growth 1 | Unit: Model - product: activePlan returns plan that is active" time="0.148" />
  <testcase classname="Chrome 54.0" name="Exam Partition #23 - Team Observe | Integration: Component - Segment Filter Float Predicate: clicking known shows no input" time="1.822" />
  <testcase classname="Chrome 54.0" name="Exam Partition #22 - Team Support 2 | Unit: Component - Conversation Card: When the conversation changes and the card is expanded" time="0.898" />
  <testcase classname="Chrome 54.0" name="Exam Partition #23 - Team Engage 1 | Unit: Component - Message Editor - Content Stats Tabs Component: email icons" time="0.169">
    <error message="Died on test #1     at testWrapper (http://localhost:7357/assets/test-support.js:6907:11)     at test (http://localhost:7357/assets/test-support.js:6921:39)     at Module.callback (http://localhost:7357/assets/tests.js:65175:24)     at Module.exports (http://localhost:7357/assets/vendor.js:132:32)     at requireModule (http://localhost:7357/assets/vendor.js:32:18)     at TestLoader.require (http://localhost:7357/assets/test-support.js:6666:7)     at http://localhost:7357/assets/test-support.js:6519:22: No model was found for 'common/blocks/paragraph'"><![CDATA[Error: No model was found for 'common/blocks/paragraph'
    at EmberError (http://localhost:7357/assets/vendor.js:31129:21)
    at Class.modelFor (http://localhost:7357/assets/vendor.js:160407:15)
    at Class.createFragment (http://localhost:7357/assets/vendor.js:199890:23)
    at http://localhost:7357/assets/tests.js:34747:47
    at Array.forEach (native)
    at http://localhost:7357/assets/tests.js:34746:19
    at Backburner.run (http://localhost:7357/assets/vendor.js:15235:25)
    at Object.run (http://localhost:7357/assets/vendor.js:35751:27)
    at exports.default (http://localhost:7357/assets/tests.js:34744:10)
    at ModelDefinition.afterMake (http://localhost:7357/assets/tests.js:16887:58)]]></error>
  </testcase>
</testsuite>`;
const MULTIPLE_FAILURES = `<?xml version="1.0" encoding="UTF-8"?>
<testsuite name="Testem Tests" tests="358" skipped="0" failures="9" timestamp="Tue Nov 08 2016 01:01:00 GMT+0000 (GMT)" time="80.360">
  <testcase classname="Chrome 54.0" name="Exam Partition #21 - Team Engage 1 | Integration: Component - Message Editor index completed component | Integration | Component | message-editor/index-completed-component: it does not render the tick/index in show mode" time="1.569" />
  <testcase classname="Chrome 54.0" name="Exam Partition #21 - Team Growth 1 | Unit: Model - product: activePlan returns plan that is active" time="0.148" />
  <testcase classname="Chrome 54.0" name="Exam Partition #23 - Team Observe | Integration: Component - Segment Filter Float Predicate: clicking known shows no input" time="1.822" />
  <testcase classname="Chrome 54.0" name="Exam Partition #22 - Team Support 2 | Unit: Component - Conversation Card: When the conversation changes and the card is expanded" time="0.898" />
  <testcase classname="Chrome 54.0" name="Exam Partition #23 - Team Engage 1 | Unit: Component - Message Editor - Content Stats Tabs Component: email icons" time="0.169">
    <error message="Died on test #1     at testWrapper (http://localhost:7357/assets/test-support.js:6907:11)     at test (http://localhost:7357/assets/test-support.js:6921:39)     at Module.callback (http://localhost:7357/assets/tests.js:65175:24)     at Module.exports (http://localhost:7357/assets/vendor.js:132:32)     at requireModule (http://localhost:7357/assets/vendor.js:32:18)     at TestLoader.require (http://localhost:7357/assets/test-support.js:6666:7)     at http://localhost:7357/assets/test-support.js:6519:22: No model was found for 'common/blocks/paragraph'"><![CDATA[Error: No model was found for 'common/blocks/paragraph'
    at EmberError (http://localhost:7357/assets/vendor.js:31129:21)
    at Class.modelFor (http://localhost:7357/assets/vendor.js:160407:15)
    at Class.createFragment (http://localhost:7357/assets/vendor.js:199890:23)
    at http://localhost:7357/assets/tests.js:34747:47
    at Array.forEach (native)
    at http://localhost:7357/assets/tests.js:34746:19
    at Backburner.run (http://localhost:7357/assets/vendor.js:15235:25)
    at Object.run (http://localhost:7357/assets/vendor.js:35751:27)
    at exports.default (http://localhost:7357/assets/tests.js:34744:10)
    at ModelDefinition.afterMake (http://localhost:7357/assets/tests.js:16887:58)]]></error>
  </testcase>
  <testcase classname="Chrome 54.0" name="Exam Partition #23 - Team Observe | Integration: Component - Segment Filter Float Predicate: shows number predicate options" time="0.193">
      <error message="Promise rejected before shows number predicate options: Assertion Failed: You cannot use the same root element (#ember-testing) multiple times in an Ember.Application"><![CDATA[Error: Assertion Failed: You cannot use the same root element (#ember-testing) multiple times in an Ember.Application
    at EmberError (http://localhost:7357/assets/vendor.js:31129:21)
    at assert (http://localhost:7357/assets/vendor.js:20939:13)
    at Object.assert (http://localhost:7357/assets/vendor.js:30893:34)
    at Class.setup (http://localhost:7357/assets/vendor.js:59161:24)
    at Klass.setupComponentUnitTest (http://localhost:7357/assets/test-support.js:7477:26)
    at http://localhost:7357/assets/test-support.js:7098:26
    at Object.initializePromise (http://localhost:7357/assets/vendor.js:68390:7)
    at new Promise (http://localhost:7357/assets/vendor.js:70240:21)
    at nextStep (http://localhost:7357/assets/test-support.js:7097:18)
    at tryCatch (http://localhost:7357/assets/vendor.js:68340:14)]]></error>
      </testcase>
</testsuite>`;
const FAILED_TEST = {
  "classname": "Chrome 54.0",
  "name": "Exam Partition #23 - Team Engage 1 | Unit: Component - Message Editor - Content Stats Tabs Component: email icons",
  "time": "0.169",
  "error": {
    "message": "Died on test #1     at testWrapper (http://localhost:7357/assets/test-support.js:6907:11)     at test (http://localhost:7357/assets/test-support.js:6921:39)     at Module.callback (http://localhost:7357/assets/tests.js:65175:24)     at Module.exports (http://localhost:7357/assets/vendor.js:132:32)     at requireModule (http://localhost:7357/assets/vendor.js:32:18)     at TestLoader.require (http://localhost:7357/assets/test-support.js:6666:7)     at http://localhost:7357/assets/test-support.js:6519:22: No model was found for 'common/blocks/paragraph'",
    "$t": "Error: No model was found for 'common/blocks/paragraph'\n    at EmberError (http://localhost:7357/assets/vendor.js:31129:21)\n    at Class.modelFor (http://localhost:7357/assets/vendor.js:160407:15)\n    at Class.createFragment (http://localhost:7357/assets/vendor.js:199890:23)\n    at http://localhost:7357/assets/tests.js:34747:47\n    at Array.forEach (native)\n    at http://localhost:7357/assets/tests.js:34746:19\n    at Backburner.run (http://localhost:7357/assets/vendor.js:15235:25)\n    at Object.run (http://localhost:7357/assets/vendor.js:35751:27)\n    at exports.default (http://localhost:7357/assets/tests.js:34744:10)\n    at ModelDefinition.afterMake (http://localhost:7357/assets/tests.js:16887:58)"
  }
};
const NOT_OK_META_RESULT = [{
  seed: '1234567ab',
  team: 'engage',
  totalPartitions: 100,
  partition: '23',
  testName: 'Team Engage 1 | Unit: Component - Message Editor - Content Stats Tabs Component: email icons',
  "error": {
    "message": "Died on test #1     at testWrapper (http://localhost:7357/assets/test-support.js:6907:11)     at test (http://localhost:7357/assets/test-support.js:6921:39)     at Module.callback (http://localhost:7357/assets/tests.js:65175:24)     at Module.exports (http://localhost:7357/assets/vendor.js:132:32)     at requireModule (http://localhost:7357/assets/vendor.js:32:18)     at TestLoader.require (http://localhost:7357/assets/test-support.js:6666:7)     at http://localhost:7357/assets/test-support.js:6519:22: No model was found for 'common/blocks/paragraph'",
    "$t": "Error: No model was found for 'common/blocks/paragraph'\n    at EmberError (http://localhost:7357/assets/vendor.js:31129:21)\n    at Class.modelFor (http://localhost:7357/assets/vendor.js:160407:15)\n    at Class.createFragment (http://localhost:7357/assets/vendor.js:199890:23)\n    at http://localhost:7357/assets/tests.js:34747:47\n    at Array.forEach (native)\n    at http://localhost:7357/assets/tests.js:34746:19\n    at Backburner.run (http://localhost:7357/assets/vendor.js:15235:25)\n    at Object.run (http://localhost:7357/assets/vendor.js:35751:27)\n    at exports.default (http://localhost:7357/assets/tests.js:34744:10)\n    at ModelDefinition.afterMake (http://localhost:7357/assets/tests.js:16887:58)"
  }
}];
const OUTPUT_META_OBJECT = {
  engage: {
    failingTests: [
      'Team Engage 1 | Unit: Component - Message Editor - Content Stats Tabs Component: email icons'
    ],
    testMeta: {
      'Team Engage 1 | Unit: Component - Message Editor - Content Stats Tabs Component: email icons': [{
          "seed": "1234567ab",
          "partition": "23",
          "totalPartitions": 48,
          team: "engage",
          "testName": "Team Engage 1 | Unit: Component - Message Editor - Content Stats Tabs Component: email icons",
          "error": {
            "message": "Died on test #1     at testWrapper (http://localhost:7357/assets/test-support.js:6907:11)     at test (http://localhost:7357/assets/test-support.js:6921:39)     at Module.callback (http://localhost:7357/assets/tests.js:65175:24)     at Module.exports (http://localhost:7357/assets/vendor.js:132:32)     at requireModule (http://localhost:7357/assets/vendor.js:32:18)     at TestLoader.require (http://localhost:7357/assets/test-support.js:6666:7)     at http://localhost:7357/assets/test-support.js:6519:22: No model was found for 'common/blocks/paragraph'",
            "$t": "Error: No model was found for 'common/blocks/paragraph'\n    at EmberError (http://localhost:7357/assets/vendor.js:31129:21)\n    at Class.modelFor (http://localhost:7357/assets/vendor.js:160407:15)\n    at Class.createFragment (http://localhost:7357/assets/vendor.js:199890:23)\n    at http://localhost:7357/assets/tests.js:34747:47\n    at Array.forEach (native)\n    at http://localhost:7357/assets/tests.js:34746:19\n    at Backburner.run (http://localhost:7357/assets/vendor.js:15235:25)\n    at Object.run (http://localhost:7357/assets/vendor.js:35751:27)\n    at exports.default (http://localhost:7357/assets/tests.js:34744:10)\n    at ModelDefinition.afterMake (http://localhost:7357/assets/tests.js:16887:58)"
          }
        }]
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
    assert.deepEqual(generateOutput('1234567ab', 48, MAIN_TEXT), OUTPUT_META_OBJECT);
  });

  describe('multiple failures for the same team', () => {
    const MULTIPLE_FAILURES = `<?xml version="1.0" encoding="UTF-8"?>
<testsuite name="Testem Tests" tests="358" skipped="0" failures="9" timestamp="Tue Nov 08 2016 01:01:00 GMT+0000 (GMT)" time="80.360">
  <testcase classname="Chrome 54.0" name="Exam Partition #21 - Team Engage 1 | Integration: Component - Message Editor index completed component | Integration | Component | message-editor/index-completed-component: it does not render the tick/index in show mode" time="1.569" />
  <testcase classname="Chrome 54.0" name="Exam Partition #21 - Team Growth 1 | Unit: Model - product: activePlan returns plan that is active" time="0.148" />
  <testcase classname="Chrome 54.0" name="Exam Partition #23 - Team Observe | Integration: Component - Segment Filter Float Predicate: clicking known shows no input" time="1.822" />
  <testcase classname="Chrome 54.0" name="Exam Partition #22 - Team Support 2 | Unit: Component - Conversation Card: When the conversation changes and the card is expanded" time="0.898" />
  <testcase classname="Chrome 54.0" name="Exam Partition #23 - Team Engage 1 | Unit: Component - Message Editor - Content Stats Tabs Component: email icons" time="0.169">
    <error message="Died on test #1     at testWrapper (http://localhost:7357/assets/test-support.js:6907:11)     at test (http://localhost:7357/assets/test-support.js:6921:39)     at Module.callback (http://localhost:7357/assets/tests.js:65175:24)     at Module.exports (http://localhost:7357/assets/vendor.js:132:32)     at requireModule (http://localhost:7357/assets/vendor.js:32:18)     at TestLoader.require (http://localhost:7357/assets/test-support.js:6666:7)     at http://localhost:7357/assets/test-support.js:6519:22: No model was found for 'common/blocks/paragraph'"><![CDATA[Error: No model was found for 'common/blocks/paragraph'
    at EmberError (http://localhost:7357/assets/vendor.js:31129:21)
    at Class.modelFor (http://localhost:7357/assets/vendor.js:160407:15)
    at Class.createFragment (http://localhost:7357/assets/vendor.js:199890:23)
    at http://localhost:7357/assets/tests.js:34747:47
    at Array.forEach (native)
    at http://localhost:7357/assets/tests.js:34746:19
    at Backburner.run (http://localhost:7357/assets/vendor.js:15235:25)
    at Object.run (http://localhost:7357/assets/vendor.js:35751:27)
    at exports.default (http://localhost:7357/assets/tests.js:34744:10)
    at ModelDefinition.afterMake (http://localhost:7357/assets/tests.js:16887:58)]]></error>
  </testcase>
  <testcase classname="Chrome 54.0" name="Exam Partition #23 - Team Engage 1 | Integration: Component - Segment Filter Float Predicate: shows number predicate options" time="0.193">
      <error message="Promise rejected before shows number predicate options: Assertion Failed: You cannot use the same root element (#ember-testing) multiple times in an Ember.Application"><![CDATA[Error: Assertion Failed: You cannot use the same root element (#ember-testing) multiple times in an Ember.Application
    at EmberError (http://localhost:7357/assets/vendor.js:31129:21)
    at assert (http://localhost:7357/assets/vendor.js:20939:13)
    at Object.assert (http://localhost:7357/assets/vendor.js:30893:34)
    at Class.setup (http://localhost:7357/assets/vendor.js:59161:24)
    at Klass.setupComponentUnitTest (http://localhost:7357/assets/test-support.js:7477:26)
    at http://localhost:7357/assets/test-support.js:7098:26
    at Object.initializePromise (http://localhost:7357/assets/vendor.js:68390:7)
    at new Promise (http://localhost:7357/assets/vendor.js:70240:21)
    at nextStep (http://localhost:7357/assets/test-support.js:7097:18)
    at tryCatch (http://localhost:7357/assets/vendor.js:68340:14)]]></error>
      </testcase>
</testsuite>`;
const OUTPUT_META_OBJECT = {
  engage: {
    failingTests: [
      'Team Engage 1 | Integration: Component - Segment Filter Float Predicate: shows number predicate options',
      'Team Engage 1 | Unit: Component - Message Editor - Content Stats Tabs Component: email icons'
    ],
    testMeta: {
          'Team Engage 1 | Integration: Component - Segment Filter Float Predicate: shows number predicate options': [{
            testName: "Team Engage 1 | Integration: Component - Segment Filter Float Predicate: shows number predicate options",
            "seed": "1234567ab",
            "partition": "23",
            "totalPartitions": 48,
            team: "engage",
            "error": {
              "message": "Promise rejected before shows number predicate options: Assertion Failed: You cannot use the same root element (#ember-testing) multiple times in an Ember.Application",
              "$t": "Error: Assertion Failed: You cannot use the same root element (#ember-testing) multiple times in an Ember.Application\n    at EmberError (http://localhost:7357/assets/vendor.js:31129:21)\n    at assert (http://localhost:7357/assets/vendor.js:20939:13)\n    at Object.assert (http://localhost:7357/assets/vendor.js:30893:34)\n    at Class.setup (http://localhost:7357/assets/vendor.js:59161:24)\n    at Klass.setupComponentUnitTest (http://localhost:7357/assets/test-support.js:7477:26)\n    at http://localhost:7357/assets/test-support.js:7098:26\n    at Object.initializePromise (http://localhost:7357/assets/vendor.js:68390:7)\n    at new Promise (http://localhost:7357/assets/vendor.js:70240:21)\n    at nextStep (http://localhost:7357/assets/test-support.js:7097:18)\n    at tryCatch (http://localhost:7357/assets/vendor.js:68340:14)"

            }
          }],
      'Team Engage 1 | Unit: Component - Message Editor - Content Stats Tabs Component: email icons': [{
          "seed": "1234567ab",
          "partition": "23",
          "totalPartitions": 48,
          "team": "engage",
          testName: "Team Engage 1 | Unit: Component - Message Editor - Content Stats Tabs Component: email icons",
          "error": {
            "message": "Died on test #1     at testWrapper (http://localhost:7357/assets/test-support.js:6907:11)     at test (http://localhost:7357/assets/test-support.js:6921:39)     at Module.callback (http://localhost:7357/assets/tests.js:65175:24)     at Module.exports (http://localhost:7357/assets/vendor.js:132:32)     at requireModule (http://localhost:7357/assets/vendor.js:32:18)     at TestLoader.require (http://localhost:7357/assets/test-support.js:6666:7)     at http://localhost:7357/assets/test-support.js:6519:22: No model was found for 'common/blocks/paragraph'",
            "$t": "Error: No model was found for 'common/blocks/paragraph'\n    at EmberError (http://localhost:7357/assets/vendor.js:31129:21)\n    at Class.modelFor (http://localhost:7357/assets/vendor.js:160407:15)\n    at Class.createFragment (http://localhost:7357/assets/vendor.js:199890:23)\n    at http://localhost:7357/assets/tests.js:34747:47\n    at Array.forEach (native)\n    at http://localhost:7357/assets/tests.js:34746:19\n    at Backburner.run (http://localhost:7357/assets/vendor.js:15235:25)\n    at Object.run (http://localhost:7357/assets/vendor.js:35751:27)\n    at exports.default (http://localhost:7357/assets/tests.js:34744:10)\n    at ModelDefinition.afterMake (http://localhost:7357/assets/tests.js:16887:58)"
          }
        }]
    }
  }
};
    it('should return the correct line', function() {
      assert.deepEqual(generateOutput('1234567ab', 48, MULTIPLE_FAILURES), OUTPUT_META_OBJECT);
    });
  });
});

describe('lineMetaGenerator', function() {
  it('should return the correct meta', function() {
    assert.deepEqual(lineMetaGenerator('1234567ab', 100, [FAILED_TEST]), NOT_OK_META_RESULT);
  });
});

describe('testParser', function() {
  it('should return the correct line', function() {
    assert.deepEqual(testParser(MAIN_TEXT), [FAILED_TEST]);
  });
});

xdescribe('TestFailures', function() {
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
            "1234567ab": "84",
            "4567890cd": "4"
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

