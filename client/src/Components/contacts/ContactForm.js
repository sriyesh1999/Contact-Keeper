import React ,{Fragment,useState,useContext,useEffect} from 'react'
import ContactContext from '../../Context/contact/contactContext'

const ContactForm = () =>
{
    const CC=useContext(ContactContext)
    const {addContact,current,clearCurrent,updateContact}=CC


    useEffect(()=>{
        if(current!==null){
            setContact(current)

        }else
        {
            setContact({
                name:'',
                email:'',
                phone:'',
                type:'personel'
            })
        }
    },[CC,current])
    const [contact,setContact]=useState({
        name:'',
        email:'',
        phone:'',
        type:'personel'
    })

   
    
    const {name,email, phone, type}=contact
    
    const onChange=(e)=>{
        setContact({ ...contact, [e.target.name]: e.target.value });
    }
    const onSubmit=(e)=>
    {
        e.preventDefault()
        if(!current){
        addContact(contact)
        
        }
        else
        {
           updateContact(contact) 

        }
        setContact({
            name:'',
            email:'',
            phone:'',
            type:'personel'
        })
        clearAll()

        
    }
    const clearAll=()=>{
            clearCurrent()
            setContact({
                name:'',
                email:'',
                phone:'',
                type:'personel'
            })

        }
    return (
        <Fragment>
          
    <form onSubmit={onSubmit}>
      <h2 className='text-dark'>
        {current ? 'Edit Contact' : 'Add Contact'}
      </h2>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={onChange}
      />
      <input
        type='email'
        placeholder='Email'
        name='email'
        value={email}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Phone'
        name='phone'
        value={phone}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type='radio'
        name='type'
        value='personal'
        checked={type === 'personal'}
        onChange={onChange}
      />{' '}
      Personal{' '}
      <input
        type='radio'
        name='type'
        value='professional'
        checked={type === 'professional'}
        onChange={onChange}
      />{' '}
      Professional
      <div>
        <input
          type='submit'
          value={current ? 'Update Contact' : 'Add Contact'}
          className='btn btn-dark btn-block'
        />
      </div>
      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>

        </Fragment>
       
    )
}

export default ContactForm
