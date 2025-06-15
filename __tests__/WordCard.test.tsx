import React from 'react';
import renderer from 'react-test-renderer';
import { WordCard } from '../WordCard';

jest.mock('react-native');

test('renders word and definition', () => {
  const tree = renderer.create(<WordCard word="test" definition="A test" />).toJSON();
  expect(tree).toMatchSnapshot();
});
