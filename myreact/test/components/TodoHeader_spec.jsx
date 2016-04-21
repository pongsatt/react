import React from 'react';
import TestUtils from 'react-addons-test-utils';
import TodoHeader from '../../src/components/TodoHeader';
import {expect} from 'chai';

const {renderIntoDocument,
       scryRenderedDOMComponentsWithTag,
        Simulate} = TestUtils;

describe('TodoHeader', () => {
  it('contains an input', () => {
    const component = renderIntoDocument(
      <TodoHeader />
    );
    const inputs = scryRenderedDOMComponentsWithTag(component, 'input');

    expect(inputs.length).to.equal(1);
  });
  
  it('call addItem when enter', () => {
    var text = '';
    const addItem = (addedText) => text = addedText;
      
    const component = renderIntoDocument(
        <TodoHeader addItem={addItem}/>
    );
    
    const input = component.refs.addTodoInput;
    input.value = 'Test add text';
    Simulate.change(input);
    Simulate.keyPress(input, {key: "Enter", keyCode: 13, which: 13});
    
    expect(text).to.equal('Test add text');
  });

});