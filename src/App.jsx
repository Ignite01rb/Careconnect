import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Sidebar from './components/sidebar.jsx';
import { GlobalProvider } from './context/Context';
import Bedalot from './components/bedalot.jsx';
import Notifications from './components/notification.jsx';
import OPDQ from './components/opdq.jsx';

// import OverallPatients from './components/patients.jsx';
import SOverview from './components/overview.jsx';

function App() {
 

  return (
    <>
      <GlobalProvider>
      <Router>
    <div className="app">
      <Sidebar/>
      <div className='main-content'>
      <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
        <Route path='/overview' element={<SOverview/>} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path='/opdq' element={<OPDQ/>} />
        {/* <Route path='/patients' element={<OverallPatients></OverallPatients>} /> */}
        <Route path='/bedalot' element={<Bedalot/>} />
      </Routes>
      </div>
    </div>
      </Router>
    </GlobalProvider>
    </>
  )
}

export default App
