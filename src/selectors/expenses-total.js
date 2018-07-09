export default (expenses = 0) => {
    return expenses
    .map((expenses) => expenses.amount)
    .reduce((sum, value) => sum + value, 0);
};