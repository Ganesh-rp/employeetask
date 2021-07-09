import { EMPLOYEE_LIST } from '../actions/actiontypes';
import EmployeeList from '../assets/json/employeelist.json';


const initialState = [];

const employeeListReducer = (state = initialState, action) => {
    switch (action.type) {
        case EMPLOYEE_LIST:
            return { employeelist: EmployeeList };
        default:
            return state;
    }
}

export default employeeListReducer;