import React from 'react';
import Alert from '@material-ui/lab/Alert';
import './notification.scss';

export const Notifications = ({ notifications }) => {
  return (
    <div className='notifications'>
      {
        notifications.map(
          (el, index) => (
            <Alert
              severity='error'
              key={ index }
            >
              { el }
            </Alert>
          )
        )
      }
    </div>
  )
};
