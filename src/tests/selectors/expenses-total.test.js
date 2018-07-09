import React from 'react';
import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should rturn 0 if no expense', () => {
    const total = getExpensesTotal([]);
    expect(total).toEqual(0);
})

test('should correctly add up a single expense', () => {
    const total = getExpensesTotal([expenses[0]]);
    expect(total).toEqual(195);
});

test('should correctly add up a multiple expense', () => {
    const total = getExpensesTotal(expenses);
    expect(total).toEqual(194195);
});