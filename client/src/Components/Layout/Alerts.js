import React,{useContext} from 'react'
import AlertContext from '../../Context/Alert/alertContext'
const Alerts = () => {
    const AC=useContext(AlertContext)
    return (
       AC.alerts.length >0 && AC.alerts.map(alert=>(
           <div key={alert.id} className={`alert alert-${alert.type}`}>
               <i className="fas fa-info-circle" />{alert.msg}
           </div>
       ))
    )
}

export default Alerts
