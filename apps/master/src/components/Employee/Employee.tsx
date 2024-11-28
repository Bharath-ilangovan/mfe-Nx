import React from 'react'
import { useSelector } from 'react-redux'
import { useMasterDataAppDispatch, useMasterDataAppSelector } from '../../hooks'
import { decrementCount, incrementCount, selectEmployee } from '../../store/features/Employee/EmployeeSlice'

interface Props {

}

const Employee = (props: Props) => {
    const data = useMasterDataAppSelector(selectEmployee);
    const dispatch = useMasterDataAppDispatch();
    return (
        <div>
            <center>Employeee component</center>
            <br />
            <h1>var2 {data.counter}</h1>
            <button onClick={() => dispatch(incrementCount())}>increment</button>
            <button onClick={() => dispatch(decrementCount())}>decrement</button>
        </div>
    )
}

export default Employee
