function formatDate(date) {
  const options = {year: 'numeric', month: 'long', day: 'numeric'};
  return date.toLocaleDateString('ja-JP', options);
}

const today = new Date();
const formattedDate = formatDate(today);
console.log(formattedDate);