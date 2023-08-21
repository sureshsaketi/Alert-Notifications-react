import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children, message} = props
  const getClassName = () => {
    switch (message.status) {
      case 'Success':
        return 'success'
      case 'Error':
        return 'error'
      case 'Warning':
        return 'warning'
      case 'Info':
        return 'info'
      default:
        return ''
    }
  }
  return (
    <div className="notification">
      <div className="check-circle">{children}</div>
      <div className="message-container">
        <h1 className={`status ${getClassName()}`}>{message.status}</h1>
        <p className="message-text">{message.text}</p>
      </div>
      <div className="close-form">
        <GrFormClose className="close-form" />
      </div>
    </div>
  )
}
export default Notification
