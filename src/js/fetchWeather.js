export default function fetchWeather(usersPosition) {
  const baseUrl = 'https://api.apixu.com/v1/';
  const accessKey = 'b47a5685a79b48b38c180939192207';
  const fetchString = `${baseUrl}current.json?key=${accessKey}&q=${usersPosition}`;
  if (usersPosition === `undefined,undefined`) {
    return;
  }
  const weather = fetch(fetchString)
    .then(response => {
      return response.json();
    })
    .then(data => {
      return Promise.resolve(data);
    });

  return weather;
}
