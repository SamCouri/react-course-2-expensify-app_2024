import filtersReducer from "../../reducers/filters";
import moment from "moment";

test("should set up filter values", ()=> {
   const state = filtersReducer(undefined , {type: "@@INIT"}) 
   expect(state).toEqual({
    text:"",
    sortBy: 'date',
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
   })
});

test("should sort by amount", ()=> {
    const state = filtersReducer(undefined, {type: "SORT_BY_AMOUNT"});
    expect(state.sortBy).toEqual("amount");
    });

test("should set sortBy to date", ()=>{
    const currentState = {
        text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
};

    const action = {
        type: "SORT_BY_DATE"
    }
const state = filtersReducer(state, action);
expect(state.sortBy).toBe("date")
} )

test("should test text filter", ()=> {
    const action = {
        type: "SET_TEXT_FILTER",
        text:"this is my filter"
    };  
    const result = filtersReducer(undefined, action);
    expect(result.text).toBe("this is my filter");
    });
    
test("should set start date", ()=> {
    const startDate = moment();
    const action = {
        type: "SET_START_DATE",
        startDate,
    }; 
    const result = filtersReducer(undefined, action);
    expect(result.startDate).toEqual(startDate);
    });

test("should set end date", ()=> {
    const endDate = moment();
    const action = {
        type: "SET_END_DATE",
        endDate,
    };     
    const result = filtersReducer(undefined, action);
    expect(result.endDate).toEqual(endDate);
    });
    











