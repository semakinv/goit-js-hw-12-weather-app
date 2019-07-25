import './styles.css';

import spinner from './js/spinner';
import updateFaceData from './js/updateFaceData';
import getGeoPosition from './js/getGeoPosition';
import fetchWeather from './js/fetchWeather';
import PNotify from '../node_modules/pnotify/dist/es/PNotify';

const getWeatherFunc = getGeoPosition().then(data => {
  spinner.show();
  const getCityFormRef = document.getElementById('search-form');
  const cityInput = getCityFormRef.querySelector('input[type="text"]');
  function handleSubmit(event) {
    event.preventDefault();
    const valueOfCity = cityInput.value;
    if (valueOfCity === '') {
      PNotify.notice({
        text: 'Пожалуйста введите название города!',
      });
      return;
    }

    fetchWeather(`${valueOfCity}`).then(data => {
      updateFaceData(data);
    });

    getCityFormRef.reset();
  }

  setTimeout(() => {
    if (Object.keys(data).length === 1) {
      getCityFormRef.addEventListener('submit', handleSubmit);
      spinner.hide();
      return;
    }

    setTimeout(() => {
      getCityFormRef.addEventListener('submit', handleSubmit);
      fetchWeather(`${data.latitude},${data.longitude}`).then(data => {
        if (Object.keys(data).length === 1) {
          spinner.hide();
          return;
        }
        updateFaceData(data);
        return;
      });
      spinner.hide();
      return;
    }, 5000);
  }, 10);
});
