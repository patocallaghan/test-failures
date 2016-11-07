// Load in files
// for each file
//  get seed name from filename
//    regex for 'not ok'
//    for each 'not ok'
//      get partition
//      get team name
//      get test name details
//      if team meta object exists
//        add to all
//        if testMeta exists && !seedName
//          add seedName and partition 
//        else
//          add testMeta with key, seedName and partition
//      else
//        generate default object
//        add testMeta with key, seedName and partition
//  output meta object
// {
//   engage: {
//     failingTests: [
//       'Team Engage 2 | Unit: Model - Predicate: Test validity of an invalid date predicate'
//     ],
//     testMeta: [
//       'Team Engage 2 | Unit: Model - Predicate: Test validity of an invalid date predicate': {
//         seedName: partition
//       }
//     ]
//   }
// }
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
const fs = require('fs');
const generateOutput = require('./generate-output.js');

var TestFailures = {
  run(directory = 'seeds') {
    let output = {};
    let filenames = fs.readdirSync(directory);
    filenames.forEach(function(filename) {
      let seed = filename.replace(/(\-\d+)?\.txt/, '');
      let content = fs.readFileSync(`${directory }/${filename}`, 'utf-8');
      output = generateOutput(seed, content, output);
    });
    return output;
  }
};

module.exports = TestFailures;
