import React from 'react';
import renderer from 'react-test-renderer';
import { WordCard } from '../WordCard';

jest.mock('react-native');

test('renders word only when not revealed', () => {
  const tree = renderer.create(<WordCard word="test" definition="A test" />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders word and definition when revealed', () => {
  const tree = renderer
    .create(<WordCard word="test" definition="A test" reveal />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
