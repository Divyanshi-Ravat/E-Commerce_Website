import { createContext, useState } from "react";

const DataContext = createContext(null);



function DataProvider({children}) {
    const [account, setaccount] = useState('')
  return (
    <div>
        <DataContext.Provider value={[
             account,
             setaccount
            
        ]}>
            {children}
            
        </DataContext.Provider>
    </div>
  )
}

export default DataProvider
export {DataContext}