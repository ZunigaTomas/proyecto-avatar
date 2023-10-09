import { v4 as uuidv4 } from "uuid"
import { createContext } from "react"

const bbdd = {
    header : {
        
        menu : [
            { id:uuidv4() , title: "Home"           , href:"#" },
            { id:uuidv4() , title: "Movies"         , href:"#" },
            { id:uuidv4() , title: "Games"          , href:"#" },
            { id:uuidv4() , title: "Experiencies "  , href:"#" },
            { id:uuidv4() , title: "Community"      , href:"#" },
            { id:uuidv4() , title: "Publishing"     , href:"#" },
            { id:uuidv4() , title: "Partnerships"   , href:"#" },
            { id:uuidv4() , title: "Our team"       , href:"#" }
        ] ,
        rrss : [
            { id : uuidv4(), title : 'Facebook' , href : '#' , icono : 'facebook' },
            { id : uuidv4(), title : 'Twitter'  , href : '#' , icono : 'twitter' },
            { id : uuidv4(), title : 'Instagram', href : '#' , icono : 'instagram' },
            { id : uuidv4(), title : 'Youtube'  , href : '#' , icono : 'youtube' },
        ]
    },

    hero : {
        h2 : 'Avatar the way of water.',
        claim : 'Watch the brand-new trailer and experience Avatar: The way of water in 3D on December 16.',
        buttons : [
            { id : uuidv4() , title : 'Get tickets'   , href : '#' },
            { id : uuidv4() , title : 'Watch trailer' , href : '#' }
        ]
    }
}

export const GlobalContext = createContext(bbdd)

export const Provider = ({ children }) => {
    return ( 
        <GlobalContext.Provider value={ bbdd }>
            { children }
        </GlobalContext.Provider>
    )
}