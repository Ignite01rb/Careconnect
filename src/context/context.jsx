import React, { useContext, useState, useEffect } from 'react';

const GlobalContext = React.createContext();

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export const GlobalProvider = ({ children }) => {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    
    const fetchedStaff = [
      { id: 1, name: 'Ravi kumar', email: 'rk11@example.com', phone: '9823457890', department: 'HR', role: 'Manager', available: true },
      
      ];
    setStaff(fetchedStaff);
  }, []);

  return (
    <GlobalContext.Provider value={{ staff }}>
      {children}
    </GlobalContext.Provider>
  );
};

