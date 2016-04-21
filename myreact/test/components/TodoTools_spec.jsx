import React from 'react';
import TestUtils from 'react-addons-test-utils';
import TodoTools from '../../src/components/TodoTools';
import {expect} from 'chai';

const {renderIntoDocument,
       scryRenderedDOMComponentsWithTag,
        Simulate} = TestUtils;

describe('TodoTools', () => {
  it('contains 3 links and a button', () => {
    const component = renderIntoDocument(
      <TodoTools />
    );
    const links = scryRenderedDOMComponentsWithTag(component, 'a');
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

    expect(links.length).to.equal(3);
    expect(buttons.length).to.equal(1);
  });

});