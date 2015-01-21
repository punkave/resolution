module.exports = {
  beforeConstruct: function(self, options) {
    self._bcOrderOfOperations = (self._bcOrderOfOperations || []).concat('notlast');
  },
  construct: function(self, options) {
    self._orderOfOperations = (self._orderOfOperations || []).concat('second');
  }
};