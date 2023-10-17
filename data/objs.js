const objs = [
    {obj: 'Last Hit', done: true},
    {obj: 'Survive', done: false},
    {obj: 'Deny', done: false}
  ];
  module.exports = {
    getAll: function() {
      return objs;
    }
  };