import {AiFillCheckCircle} from 'react-icons/ai'

import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const notificationsList = {
  success: {
    status: 'Success',
    text: 'You can access all the files in the folder',
  },
  error: {
    status: 'Error',
    text: 'Sorry, you are not authorized to have access to delete the file',
  },
  warning: {
    status: 'Warning',
    text: 'Viewers of this file can see comments and suggestions',
  },
  info: {
    status: 'Info',
    text: 'Anyone on the internet can view these files',
  },
}
const AlertNotifications = () => (
  <div className="alert-notifications-container">
    <h1 className="notifications-heading">Alert Notifications</h1>
    <Notification message={notificationsList.success}>
      <AiFillCheckCircle className="check-circle" />
    </Notification>

    <Notification message={notificationsList.error}>
      <RiErrorWarningFill className="error-icon" />
    </Notification>

    <Notification message={notificationsList.warning}>
      <MdWarning className="warning-icon" />
    </Notification>

    <Notification message={notificationsList.info}>
      <MdInfo className="info-icon" />
    </Notification>
  </div>
)
export default AlertNotifications
