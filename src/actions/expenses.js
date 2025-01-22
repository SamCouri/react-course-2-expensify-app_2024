import uuid from 'uuid';
import database from "../firebase/firebase";

//ADD EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
}); 


export const startAddExpense = (expenseData= {}) => {  
    return (dispatch) => {
        const {
            description="",
            note= "",
            amount=0,
            createdAt=0    
        } = expenseData;

    const expense = { description, note, amount, createdAt };
    return database.ref("expenses").push(expense).then((ref)=>{
        dispatch(addExpense({
            id: ref.key,
            ...expense
        })); 
     });
}};

//REMOVE EXPENSE
export const removeExpense = ({id}={}) =>({
    type: 'REMOVE_EXPENSE',
    id
}); 

//EDIT EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
}); 



/*
export const startAddExpense = (expenseData= {}) => {  
    return (dispatch) => {
        const {
            description="",
            note= "",
            amount=0,
            createdAt=0    
        } = expenseData;

    const expense = { description, note, amount, createdAt };

    console.log("Before database.ref in expense.js");

    const data =  database.ref("expenses").set("this is my NEWER data");

    database.ref("expenses").once("value").then((snapshot)=>{
        const val = snapshot.val();
        console.log("snapshot val: ", val);
    }).catch((e)=> {
        console.log("The error is:", e)
    });
    
    setTimeout(()=>{
        console.log("After database.ref in expense.js: ", data);
    }, 4500);

    return data;
    // return database.ref("expenses").push(expense).then((ref)=>{
    //     dispatch(addExpense({
    //         id: ref.key,
    //         ...expense
    //     })); 
    //  });
}};
*/
