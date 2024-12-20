import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("Should set up remove expense action object" , ()=> {
    const action = removeExpense({id: "123abc"});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: "123abc"
    });
})

test("Should set up edit expense action object", ()=> {
    const action = editExpense("123abc", {note:"this is to test the note"});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: "123abc",
        updates: {
            note: "this is to test the note"
        }
    });
})


test("Should set up add expense action object with provided values", ()=> {
    const expenseData = {
        description: "rent",
        amount: 109500,
        createdAt: 1000,
        note: "this was the latest month's rent"
    }

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense : {
            ...expenseData,
            id: expect.any(String)
        }
    });
    });


    test("Should set up add expense action object with default values", ()=> {    
        const action = addExpense();
        expect(action).toEqual({
            type: 'ADD_EXPENSE',
            expense : {
                id: expect.any(String),
                description: "",
                amount: 0,
                createdAt: 0,
                note: ""
            }
        });
        });

