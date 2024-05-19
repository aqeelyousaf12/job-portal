import React from 'react'
import Button from './Button'
import InputField from '../Components/InputField'

const Salary = ({handleChange, handleClick}) => {
  // let a = {handleChange}
  // console.log(a)
  return (
    <div>
        <h4 className=' text-lg font-medium mb-2'>Salary</h4>
        <div className='flex mb-4'>
            <Button onClickHandler={handleClick} value="Hourly" title="Hourly"/>
            <Button onClickHandler={handleClick} value="Monthly" title="Monthly"/>
            <Button onClickHandler={handleClick} value="Yearly" title="Yearly"/>
        </div>
        <div>
        <label className=" sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>ALL
        </label>

        <InputField
          handleChange={handleChange}
          value={30}
          title="< 30000"
          name="test2"
        />
        <InputField
          handleChange={handleChange}
          value={50}
          title="< 50000"
          name="test2"
        />
        <InputField
          handleChange={handleChange}
          value={80}
          title="< 80000"
          name="test2"
        />
        <InputField
          handleChange={handleChange}
          value={100}
          title="< 1000000"
          name="test2"
        />
        </div>
    </div>
  )
}

export default Salary