import React, { createContext, useContext, useState } from 'react';

// crucial for creating a mechanism to share data between components without having to 
// pass props explicitly through the component tree.
const UniversalLoginStateContext = createContext(); // keep track of if they are logged in or not

// A hook to access the content
export function useLoginState() {
    return useContext(UniversalLoginStateContext);
  }

  export function UniversalLoginProvider({ children })
  {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);

    const updateIsLoggedIn = (newState) => 
    {
        setIsLoggedIn(newState);
    }

    const contextLoginValue = 
    {
        isLoggedIn,
        updateIsLoggedIn,
    }

    return (
        <UniversalLoginStateContext.Provider value={contextLoginValue}>
            { children }
        </UniversalLoginStateContext.Provider>
    )
  }
