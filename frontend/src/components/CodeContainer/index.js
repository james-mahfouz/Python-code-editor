import React, { useState } from 'react';
// import NavLogo from '../NavLogo';
// import RunButton from '../Buttons/runButton';
// import ClearButton from '../Buttons/ClearButton';
import './index.css'


const CodeContainer=()=>{

//   return (
//     <div className="code-container">
//       <div className="writen-code"></div>
//       <div className="compiled-code"></div>
      
//     </div>
//   );
const [code, setCode] = useState('');

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <div className="code-container">
    <div className="code-editor">
      <textarea
        className="code-editor-textarea"
        value={code}
        onChange={handleCodeChange}
        placeholder="Write your code here..."
      />
    </div>
    </div>
  );
}

export default CodeContainer;