import moment from 'moment';

const BASE_URL = '';

const defaultPostHeader = (body, auth) => {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(auth ? { Authorization: `Bearer ${auth}` } : {}),
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  };
};

const defaultGetHeader = (auth) => {
  return {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...(auth ? { Authorization: `Bearer ${auth}` } : {}),
    },
  };
};

const defaultDeleteHeader = (auth, body) => {
  return {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      ...(auth ? { Authorization: `Bearer ${auth}` } : {}),
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  };
};

const formatDate = (shift) => {
  const date = shift.beginDate;
  const parsedDate = moment.parseZone(date);
  return parsedDate.format('ddd DD.MM.');
};

const formatTime = (shift) => {
  const start = shift.beginDate;
  const end = shift.endDate;
  const parsedStart = moment.parseZone(start);
  const parsedEnd = moment.parseZone(end);
  return `${parsedStart.format('hh:mm')} -  ${parsedEnd.format('HH:mm')}`;
};

export {
  BASE_URL,
  defaultPostHeader,
  defaultGetHeader,
  defaultDeleteHeader,
  formatTime,
  formatDate,
};