import React from 'react'

import { InputContainer } from './styles'

import {FiUser} from 'react-icons/fi'

type IProps = {
  className?: string,
  onChange?: any;
  icon: any,
  label: string,
  type: string,

}

const Input: React.FC<IProps> = ({icon, label,type,className, onChange}) => {
  return (
    <InputContainer className={className} >
        <div className='input-icon' >
            {icon}
        </div>
        <input placeholder={label} className='text-input' type={type} onChange={onChange} ></input>
    </InputContainer>
  );
}

export default Input;