const event = new Date(Date.UTC(2023, 7, 23));
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

console.log(event.toLocaleDateString(undefined, options));