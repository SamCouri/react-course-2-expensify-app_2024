import expenses from "../fixtures/expenses";
import selectExpensesTotal from "../../selectors/expenses-total";

test("should retrun 0 if no expenses, empty array", ()=> {
    const result = selectExpensesTotal([]);
    expect(result).toBe(0);
    })

test("should correctly add up multiple expenses", ()=> {
    const result = selectExpensesTotal(expenses);
    expect(result).toBe(114195);
})

test("should correctly add up one expense", ()=> {
    const result = selectExpensesTotal([expenses[0]]);
    expect(result).toBe(195);
    })