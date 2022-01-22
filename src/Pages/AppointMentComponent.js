/* eslint-disable prettier/prettier */
import { Appointments } from '@devexpress/dx-react-scheduler-material-ui';
const dragDisableIds = new Set([3, 8, 10, 12]);

export const allowDrag = ({ id }) => !dragDisableIds.has(id);

const appointmentComponent = ({ style, ...restProps }) => {
  return (
    <Appointments.Appointment
      {...restProps}
      style={{
        ...style,
        backgroundColor: 'orange',
        color: '#000',
        borderRadius: '5px',
        border: '1px solid #e1e1e1',
        boxShadow:
          '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'
      }}
    />
  );
};

export default appointmentComponent;
