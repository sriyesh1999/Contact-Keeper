import React, { useReducer} from 'react';
import ContactContext from './contactContext'
import contactReducer from './contactReducer'
import axios from 'axios'
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER,
    CONTACT_ERROR,
    GET_CONTACTS,
    CLEAR_CONTACTS
} from '../types';


const ContactState=props =>{
    const intialState={
        contacts:null,
        current:null,
        filtered :null,
        error:null


    }

    const [state,dispatch] =useReducer(contactReducer,intialState)

    //Get contact 
    const GetContact=async ()=>{
       

        
        try{
            const res = await axios.get('/api/contact') 
            
            dispatch({type:  GET_CONTACTS,payload: res.data})
        }
        catch(err)
        {
            dispatch({type:CONTACT_ERROR,payload:err.response.msg})
        }

       
    }

    //add contact
    const addContact=async contact=>{
        const config={
            headers:{
                'Content-Type':'application/json'
            }

        }
        try{
            const res = await axios.post('/api/contact',contact,config) 
            
            dispatch({type:  ADD_CONTACT,payload: res.data})
        }
        catch(err)
        {
            dispatch({type:CONTACT_ERROR,payload:err.response.msg})
        }

       
    }


    //delete contact
    const deleteContact= async id =>{
        try{
            await axios.delete(`/api/contact/${id}`) 
            
            dispatch({type:  DELETE_CONTACT,payload: id})
        }
        catch(err)
        {
            dispatch({type:CONTACT_ERROR,payload:err.response.msg})
        }

        
        
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
    const updateContact=async  contact =>{
       
        const config={
            headers:{
                'Content-Type':'application/json'
            }

        }
        try{
            const res = await axios.put(`/api/contact/${contact._id}`, contact,config) 
            dispatch({type:  UPDATE_CONTACT,payload: res.data})
        }
        catch(err)
        {
            dispatch({type:CONTACT_ERROR,payload:err.response.msg})
        }

        
      
    }

    //filter contact
    const filterContacts= text =>{
        
        dispatch({type:  FILTER_CONTACTS,payload: text})
    }


    //clear filter
    const clearFilter=()  =>{
        
        dispatch({type:  CLEAR_FILTER})
    }

    const clearContacts=()=>{
        
        dispatch({type:  CLEAR_CONTACTS})
    }






    return (
        <ContactContext.Provider value={{
                contacts: state.contacts,
                current:state.current,
                filtered:state.filtered,
                error:state.error,
                addContact,
                deleteContact,
                setCurrent,
                clearCurrent,
                updateContact,
                filterContacts,
                clearFilter,
                GetContact,
                clearContacts
            }}
            >
            {props.children}
        </ContactContext.Provider>
    )
}


export  default ContactState;