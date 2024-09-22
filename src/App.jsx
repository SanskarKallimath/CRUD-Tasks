// import React from 'react';
// import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // Use HashRouter instead

// import CreateStudent from './CreateStudent'; 
// import FirstPage from './Components/FirstPage';
// import UpdateStudent from './UpdateStudent';
// import ViewStudent from './ViewStudent';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<FirstPage />} />
//         <Route path="/create-student" element={<CreateStudent />} />
//         <Route path="/update-student" element={<UpdateStudent />} />
//         <Route path="/view-student" element={<ViewStudent />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // Use HashRouter instead

import CreateStudent from './CreateStudent'; 
import FirstPage from './Components/FirstPage';
import UpdateStudent from './UpdateStudent';
import ViewStudent from './ViewStudent'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/create-student" element={<CreateStudent />} />
        <Route path="/update-student" element={<UpdateStudent />} />
        <Route path="/view-student" element={<ViewStudent />} />
      </Routes>
    </Router>
  );
}

export default App;

