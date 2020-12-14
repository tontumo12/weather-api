'use strict';
module.exports = function(app) {
  let noti = require('./noti.js');
  // todoList Routes
  app.route('/request')
    .post(noti.sendNoti)
};