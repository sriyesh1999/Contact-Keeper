import React, { useReducer} from 'react';
import {v4 as uuidv4} from 'uuid';
import ContactContext from './contactContext'
import contactReducer from './contactReducer'
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';


const ContactState=props =>{
    const intialState={
        contacts:[
            {
              id:1,
              name:'yuktha',
              email:'yuktha@example.com',
              phone:'123',
              type:'personel'  
            },
            {
                id:2,
                name:'yesh',
                email:'yesh@example.com',
                phone:'123',
                type:'professional'  
              },
              {
                id:3,
                name:'yuktha yesh',
                email:'yukthayesh@example.com',
                phone:'123',
                type:'personel'  
              }
  
  

        ],
        current:null,
        filtered :null



    }

    const [state,dispatch] =useReducer(contactReducer,intialState)



    //add contact
    const addContact=contact=>{
        contact.id=uuidv4
        dispatch({type:  ADD_CONTACT,payload: contact})
    }


    //delete contact
    const deleteContact= id =>{
        
        dispatch({type:  DELETE_CONTACT,payload: id})
    }


    //set contact
    const setCurrent= contact =>{
        
        dispatch({type:  SET_CURRENT,payload: contact})
    }



    //clear current contact
    const clearCurrent= () =>{
        
        dispatch({type:  CLEAR_CURRENT})
    }


    //update contact
    const updateContact= contact =>{
        
        dispatch({type:  UPDATE_CONTACT,payload: contact})
    }

    //filter contact
    const filterContacts= text =>{
        
        dispatch({type:  FILTER_CONTACTS,payload: text})
    }


    //clear filter
    const clearFilter=()  =>{
        
        dispatch({type:  CLEAR_FILTER})
    }






    return (
        <ContactContext.Provider value={{
                contacts: state.contacts,
                current:state.current,
                filtered:state.filtered,
                addContact,
                deleteContact,
                setCurrent,
                clearCurrent,
                updateContact,
                filterContacts,
                clearFilter
            }}
            >
            {props.children}
        </ContactContext.Provider>
    )
}


export  default ContactState;