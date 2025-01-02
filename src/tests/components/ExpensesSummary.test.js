import React from "react";
import { shallow } from "enzyme";
import  { ExpensesSummary } from "../../components/ExpensesSummary";

test("should correctly render ExpenseSummary with 1 expense totaling $94.34", ()=> {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235}/>);
    expect(wrapper).toMatchSnapshot();
    })


test("should correctly render ExpenseSummary multiple expenses totaling $94.34", ()=> {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={94.34}/>);
    expect(wrapper).toMatchSnapshot();
    })

