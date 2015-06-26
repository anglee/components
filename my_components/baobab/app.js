var Baobab = require('baobab');
var stateTree = new Baobab({
  admin: {
    notifications: {
      list: []
    }
  },
  home: {
    feeds: []
  }
});

var adminCursor = stateTree.select('admin');
var notificationsListCursor = adminCursor.select('notifications', 'list');
var feedsCursor = stateTree.select('home', 'feeds');

adminCursor.on('update', function () {
  console.log('adminCursor: I saw a change'); // I will trigger
});

notificationsListCursor.on('update', function () {
  console.log('notificationsListCursor: I saw a change'); // I will trigger
});

feedsCursor.on('update', function () {
  console.log('feedsCursor: I saw a change'); // I will not trigger because I am on a different branch
});

notificationsListCursor.push('foo');

console.log("tree=", JSON.stringify(stateTree.get()));
