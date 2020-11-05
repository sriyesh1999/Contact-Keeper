import React,{useContext,useRef, useEffect} from 'react'
import ContactContext from '../../Context/contact/contactContext'
const ContactFilter = () => {
    const CC=useContext(ContactContext)
    const text =useRef('')
    useEffect(()=>{
        if(CC.filtered===null){
            text.current.value=''
        }

    })
    const onChange =e=>{
        if(text.current.value !==''){
                CC.filterContacts(e.target.value)
        }
        else{
            CC.clearFilter()
        }
    }
    return (
        <form>
            <input type="text" ref={text} placeholder="Filter Contacts..." onChange={onChange}/>
        </form>
    )
}

export default ContactFilter
