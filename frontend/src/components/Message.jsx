import React from 'react';
import Alert from 'react-bootstrap/Alert';

function Message({variant, children}) {
  //severity values: info, success,danger, warning
  return (
        <Alert variant={variant}>
          {children}
        </Alert>
  );
}

Message.defaultProps = {
  severity: 'info'
}

export default Message;