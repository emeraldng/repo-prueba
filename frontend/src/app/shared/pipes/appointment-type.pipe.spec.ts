import { AppointmentType } from './appointment-type.pipe';

describe('AppointmentTypePipe', () => {
  it('create an instance', () => {
    const pipe = new AppointmentType();
    expect(pipe).toBeTruthy();
  });
});
