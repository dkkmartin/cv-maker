import { useState } from 'react'

function CustomInput() {
  const [value, setValue] = useState('');
  
  return (
    <>
    <h1>{value}</h1>
     <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
     />
     </>
  );
}

export default CustomInput