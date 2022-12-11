export default function getYearFromDateString(dateString) {
  const year = new Date(dateString).getFullYear();
  if (dateString.length === 4) {
    return year + 1;
  }
  return year;
}
