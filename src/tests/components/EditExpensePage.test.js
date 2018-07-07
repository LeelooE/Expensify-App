import React from 'react';
import {EditExpensePage} from '../../components/EditExpensePage';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
     editExpense = jest.fn();
     removeExpense = jest.fn();
     history = { push: jest.fn() };
     wrapper = shallow(
         <EditExpensePage 
        expense={expenses[2]} 
        removeExpense={removeExpense} 
        editExpense={editExpense} 
        history={history}
        />);
});

test('should render EditExpensePage correctly', () =>{
    expect(wrapper).toMatchSnapshot();
});

test('should handle removeExpense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({
      id: expenses[2].id  
    });
});

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});