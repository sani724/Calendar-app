// small helper to build an array of Date objects covering the calendar view
export function generateDaysForMonth(currentDate) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // first day of month
  const firstOfMonth = new Date(year, month, 1);
  // weekday index 0..6 of first day
  const startWeekday = firstOfMonth.getDay();

  // how many days in this month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // previous month days to show (if month doesn't start on Sunday)
  const prevMonthDays = startWeekday; // 0 means start on Sun

  // total cells: show 6 rows (6*7=42) to cover any month
  const totalCells = 42;

  // start date = firstOfMonth - prevMonthDays
  const startDate = new Date(year, month, 1 - prevMonthDays);

  const days = [];
  for (let i = 0; i < totalCells; i++) {
    const d = new Date(startDate);
    d.setDate(startDate.getDate() + i);
    days.push(d);
  }
  return days;
}
