const React = require('react');
module.exports = {
  View: (props) => React.createElement('View', props, props.children),
  Text: (props) => React.createElement('Text', props, props.children),
  SafeAreaView: (props) => React.createElement('SafeAreaView', props, props.children),
  FlatList: (props) => React.createElement('FlatList', props, props.children),
  StyleSheet: { create: () => ({}) },
};
