import React,{useContext,Fragment,useEffect} from 'react'
import ContactContext from '../../Context/contact/contactContext'
import ContactItem  from "./ContactItem"
import Spinner from "../../Components/Layout/Spinner"
const Contacts = () => {
    const contactContext=useContext(ContactContext)
    const {contacts,filtered,GetContact,loading}=contactContext
    useEffect(()=>{
        GetContact()
        //eslint-disable-next-line
    },[])

    if(contacts!==null && contacts.length===0 && !loading){
        return <h4>Please add a contact</h4>
    }
    return (
        <div>
            {contacts!==null && !loading ? (<Fragment>
                {filtered !==null?filtered.map(c=>{ return  <ContactItem key={c._id} contact={c} />}) :
                contacts.map((c)=>{ return  <ContactItem key={c._id} contact={c} /> })}

                
            </Fragment>):(
                <Spinner/>
            )}
            
            
            
        </div>
    )
}
export default Contacts