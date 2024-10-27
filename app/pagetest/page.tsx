// // components/ParentComponent.tsx
// "use client";
// import React, { useState } from 'react';
// import ChildComponent from './childcomponent'; // Ensure the case matches the filename

// const ParentComponent: React.FC = () => {
//   const [message, setMessage] = useState("Hello from the Parent Component!");

//   const updateMessage = (newMessage: string) => {
//     setMessage(newMessage);
//   };

//   return (
//     <div>
//       <h1>This is the Parent Component</h1>
//       <ChildComponent initialMessage={message} onMessageChange={updateMessage} /> {/* Pass the function to child */}
//       <div>{message}</div> {/* Display the current message from state */}
//     </div>
//   );
// };

// export default ParentComponent;
