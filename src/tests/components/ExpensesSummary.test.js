import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';

test('should correctly render exepenses summary with one expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={235}/>)
    expect(wrapper).toMatchSnapshot();
})

test('should correctly render exepenses summary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={23} expensesTotal={235123584}/>)
    expect(wrapper).toMatchSnapshot();
})