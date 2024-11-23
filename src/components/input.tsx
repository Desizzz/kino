import React from 'react';

interface MyComponentProps {
  valueInp: string;
  setValueInp: (value: string) => void;
}

const Input: React.FC<MyComponentProps> = ({ valueInp, setValueInp }) => {
  return (
    <input className='inp' value={valueInp} onChange={(e) => setValueInp(e.target.value)} placeholder='поиск'>

    </input>
  );
};

export default Input;