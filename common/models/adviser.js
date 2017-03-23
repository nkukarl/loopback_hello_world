'use strict';

module.exports = function (Adviser) {
  Adviser.status = function (ad) {
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    var OPEN_HOUR = 6;
    var CLOSE_HOUR = 20;
    console.log("Current hour is %d", currentHour);
    var response;
    if (currentHour > OPEN_HOUR && currentHour < CLOSE_HOUR) {
      response = "Open for business!";
    } else {
      response = "Closed!";
    }
    ad(null, response);
  };
  Adviser.remoteMethod(
    'status', {
      http: {
        path: '/status',
        verb: 'get'
      },
      returns: {
        arg: 'status',
        type: 'string'
      }
    }
  );

  Adviser.file_read = function (ad) {
    var fs = require('fs');
    var fileList = './client/README.md';
    fs.readFile(fileList, function (err, data) {
      if (err) throw err;
      console.log(data.toString());
    });
    ad(null, 'Done!');
  };
  Adviser.remoteMethod(
    'file_read', {
      http: {
        path: '/file_read',
        verb: 'get'
      },
      returns: {
        arg: 'status',
        type: 'string'
      }
    }
  );

  // Adviser.file_write = function (ad, content) {
  //   var fs = require('fs');
  //   fs.writeFile('kwang_test.txt', content, function (err) {
  //     if (err) throw err;
  //     console.log(content);
  //   });
  //   ad(content, 'Done!');
  // };
  // Adviser.remoteMethod(
  //   'file_write', {
  //     accepts: {
  //       arg: 'content',
  //       type: 'object'
  //     },
  //     http: {
  //       path: '/file_write',
  //       verb: 'post'
  //     },
  //     returns: {
  //       arg: 'status',
  //       type: 'string'
  //     }
  //   }
  // );

};
