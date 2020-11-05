import React,{useContext,Fragment} from 'react'
import ContactContext from '../../Context/contact/contactContext'
import ContactItem  from "./ContactItem"
const Contacts = () => {
    const contactContext=useContext(ContactContext)
    const {contacts,filtered}=contactContext
    if(contacts.length===0){
        return <h4>Please add a contact</h4>
    }
    return (
        <div>
            <Fragment>
                {filtered !==null?filtered.map(c=>{ return  <ContactItem key={c.id} contact={c} />}) :
                contacts.map((c)=>{ return  <ContactItem key={c.id} contact={c} /> })

                
                }
                
            </Fragment>
            
            
        </div>
    )
}
export default Contacts