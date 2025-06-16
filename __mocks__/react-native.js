const React = require('react');
module.exports = {
  View: (props) => React.createElement('div', props, props.children),
  Text: (props) => React.createElement('span', props, props.children),
  SafeAreaView: (props) => React.createElement('div', props, props.children),
  FlatList: (props) => React.createElement('div', props, props.children),
  Pressable: (props) =>
    React.createElement('div', { ...props, onClick: props.onPress }, props.children),
  StyleSheet: { create: (styles) => styles },
};
