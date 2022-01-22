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
        backgroundColor: '#080D2A',
        borderRadius: '3px',
        textAlign: 'center',
        borderTop:`3px solid skyblue`,
      }}
    />
  );
};
export default appointmentComponent;
