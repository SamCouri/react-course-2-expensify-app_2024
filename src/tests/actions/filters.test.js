import moment from "moment";
import {
        setTextFilter, 
        sortByAmount, 
        sortByDate, 
        setStartDate, 
        setEndDate 
    } from "../../actions/filters";


test("Should generate set Start Date action object", ()=> {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0)
    });
    }); 

test("Should generate set End Date action object", ()=> {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0)
    });
    }); 

test("Should generate set Text Filter action object with text value", ()=> {
const text = "Something in"
    const action = setTextFilter(text);
expect(action).toEqual({
 type: "SET_TEXT_FILTER",
 text: text
});
});

test("Should generate set Text Filter action object with defaulte", ()=> {
    const action = setTextFilter();
    expect(action).toEqual({
     type: "SET_TEXT_FILTER",
     text: ""
    });
    });

test("Should generate sort By Date action object", ()=> {
    const action = sortByDate();
    expect(action).toEqual({
    type: "SORT_BY_DATE"
    });
    });
    
    
test("Should generate sort By Amount action object", ()=> {
    expect(sortByAmount()).toEqual({type: "SORT_BY_AMOUNT"});
    });
