
export default (expenses) => {
    return expenses
        .map((expense)=>(expense.amount))
        .reduce((subTotal, currentAmount)=> subTotal + currentAmount, 0);    
};


