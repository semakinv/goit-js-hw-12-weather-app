import PNotify from '../../node_modules/pnotify/dist/es/PNotify';
export default function updateFaceData(data) {
  const refs = {
    locationRef: document.querySelector('span[data-field="location"]'),
    tempRef: document.querySelector('span[data-field="temp"]'),
    humidityRef: document.querySelector('span[data-field="humidity"]'),
    windRef: document.querySelector('span[data-field="wind"]'),
    conditionsRef: document.querySelector('span[data-field="conditions"]'),
    iconRef: document.querySelector('.icon'),
    weatherDisplayRef: document.getElementById('weather'),
  };
  if (Object.keys(data).length === 1) {
    PNotify.notice({
      text:
        'Позиция с таким названием не найдена. Введите верное название города',
    });
    return;
  }
  refs.locationRef.textContent = `${data.location.name}`;
  refs.tempRef.textContent = `${data.current.temp_c}`;
  refs.humidityRef.textContent = `${data.current.humidity}%`;
  refs.windRef.textContent = `${data.current.wind_kph} kph`;
  refs.conditionsRef.textContent = `${data.current.condition.text}`;
  refs.iconRef.setAttribute('alt', `${data.current.condition.text}`);
  refs.iconRef.setAttribute('src', `${data.current.condition.icon}`);

  refs.weatherDisplayRef.classList.remove('is-hidden');
}
