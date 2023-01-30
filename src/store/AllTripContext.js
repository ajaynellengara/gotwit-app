import React,{createContext,useState} from 'react'


export const AllTripContext = createContext(null) ;

function ContextAllTrip({children}) {
    const [allTrip,setAllTrip]=useState([])
    return (
        <AllTripContext.Provider value={{allTrip,setAllTrip}}>
            {children}
        </AllTripContext.Provider>
    )
}

export default ContextAllTrip