export function formatDateTime() {
  const date = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  const day = date.getDate();
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const hour = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const dayOfWeek = days[date.getDay()];

  return {
    day,
    month,
    year,
    hour,
    dayOfWeek
  }
}