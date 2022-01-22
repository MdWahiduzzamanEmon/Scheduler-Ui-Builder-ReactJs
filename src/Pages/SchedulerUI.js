import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
  DragDropProvider,
  EditRecurrenceMenu,
  AllDayPanel,
  AppointmentTooltip,
  AppointmentForm
} from '@devexpress/dx-react-scheduler-material-ui';
import appointmentComponent from './AppointMentComponent';
import { allowDrag } from './AppointMentComponent';
import { recurrenceAppointment } from './Data';
const SchedulerUi = () => {
  const currentDate = new Date('2018-06-27');

  const [recurrenceAppointments, setRecurrenceAppointments] = React.useState(recurrenceAppointment);

  const onCommitChanges = ({ added, changed, deleted }) => {
    let appointments = [...recurrenceAppointments];
    if (added) {
      appointments = appointments.concat(added);
    }
    if (changed) {
      appointments = appointments.map((appointment) =>
        changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment
      );
    }
    if (deleted) {
      appointments = appointments.filter((appointment) => appointment.id !== deleted);
    }
    setRecurrenceAppointments(appointments);
  };

  return (
    <Paper>
      <Scheduler data={recurrenceAppointments} height={500}>
        <ViewState defaultCurrentDate={currentDate} />
        <EditingState onCommitChanges={onCommitChanges} />
        <EditRecurrenceMenu />
        <WeekView startDayHour={9} endDayHour={16} />
        <Appointments appointmentComponent={appointmentComponent} />
        <AllDayPanel />
        <DragDropProvider allowDrag={allowDrag} />
        <AppointmentTooltip showOpenButton showDeleteButton />
        <AppointmentForm />
      </Scheduler>
    </Paper>
  );
};
export default SchedulerUi;
