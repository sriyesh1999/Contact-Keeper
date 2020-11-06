import React,{useContext} from 'react'
import ContactContext from '../../Context/contact/contactContext'
 const ContactItem = ({contact}) => {
     const CC=useContext(ContactContext)
     const {_id,name,email,phone,type}=contact
     const {deleteContact,setCurrent ,clearCurrent}=CC
     const onDelete=()=>{
         deleteContact(_id)
         clearCurrent()
     }
    return (
        <div className="card bg-light">
            <h3 className="text-dark text-left">
    {name[0].toUpperCase()+name.slice(1)}{' '} <span style={{float:'right'}} className={'badge ' +(type ==='professional'?'badge-dark':'badge-white')}>{type[0].toUpperCase()+type.slice(1)}</span>
            </h3>
            <ul>
                {email &&(<li>
                    <i className="fas fa-envelope-open"></i> {email}
                </li>)}
                
                {phone &&(<li>
                    <i className="fas fa-phone"></i> {phone}
                </li>)}

            </ul>
            <p>
                <button className="btn btn-dark btn-sm" onClick={()=>setCurrent(contact)}>Edit</button>
                <button className="btn  btn-sm" style={{backgroundColor:"grey",color:"white"}} onClick={onDelete}>Delete</button>
            </p>

            
        </div>
    )
}

export default ContactItem