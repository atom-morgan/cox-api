// Mocked data from DB!
const appointments = [
  {
    startTime: '9:00am',
    name: undefined,
    phone: undefined,
    booked: false
  },
  {
    startTime: '10:00am',
    name: undefined,
    phone: undefined,
    booked: false
  },
  {
    startTime: '11:00am',
    name: undefined,
    phone: undefined,
    booked: false
  },
  {
    startTime: '12:00pm',
    name: undefined,
    phone: undefined,
    booked: false
  },
  {
    startTime: '1:00pm',
    name: undefined,
    phone: undefined,
    booked: false
  },
  {
    startTime: '2:00pm',
    name: undefined,
    phone: undefined,
    booked: false
  },
  {
    startTime: '3:00pm',
    name: undefined,
    phone: undefined,
    booked: false
  },
  {
    startTime: '4:00pm',
    name: undefined,
    phone: undefined,
    booked: false
  },
  {
    startTime: '5:00pm',
    name: undefined,
    phone: undefined,
    booked: false
  },

];

function get(req, res) {
  res.status(200).json(appointments);
}

function create(req, res) {
  let appointment = appointments.findIndex((app) => {
    return req.body.startTime === app.startTime;
  });

  if (appointment !== -1) {
    appointments[appointment].name = req.body.name;
    appointments[appointment].phone = req.body.phone;
    appointments[appointment].booked = true;
    res.status(200).json(appointments[appointment]);
  } else {
    res.status(404);
  }
}

export default { get, create };
