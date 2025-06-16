import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { WordCard } from '../WordCard';

jest.mock('react-native');

describe('WordCard', () => {
  test('renders word only when not revealed', () => {
    const html = ReactDOMServer.renderToStaticMarkup(
      <WordCard word="test" definition="A test" />
    );
    expect(html).toContain('test');
    expect(html).not.toContain('A test');
  });

  test('renders word and definition when revealed', () => {
    const html = ReactDOMServer.renderToStaticMarkup(
      <WordCard word="test" definition="A test" reveal />
    );
    expect(html).toContain('test');
    expect(html).toContain('A test');
  });
});
