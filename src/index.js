// Version 1 (BEFORE viwed lection  MUST DELETE!!!!!!!!!!!!1)

// import './styles.css';

// import spinner from './js/spinner';
// import updateFaceData from './js/updateFaceData';
// import getGeoPosition from './js/getGeoPosition';
// import fetchWeather from './js/fetchWeather';
// import PNotify from '../node_modules/pnotify/dist/es/PNotify';

// const getWeatherFunc = getGeoPosition().then(data => {
//   spinner.show();
//   const getCityFormRef = document.getElementById('search-form');

//   function handleSubmit(event) {
//     event.preventDefault();
//     const valueOfCity = document.getElementsByTagName('input')[0].value;
//     if (valueOfCity === '') {
//       PNotify.notice({
//         text: 'Пожалуйста введите название города!',
//       });
//       return;
//     }

//     fetchWeather(`${valueOfCity}`).then(data => {
//       updateFaceData(data);
//     });

//     getCityFormRef.reset();
//   }

//   setTimeout(() => {
//     if (Object.keys(data).length === 1) {
//       getCityFormRef.addEventListener('submit', handleSubmit);
//       spinner.hide();
//       return;
//     }

//     setTimeout(() => {
//       getCityFormRef.addEventListener('submit', handleSubmit);
//       fetchWeather(`${data.latitude},${data.longitude}`).then(data => {
//         if (Object.keys(data).length === 1) {
//           spinner.hide();
//           return;
//         }
//         updateFaceData(data);
//         return;
//       });
//       spinner.hide();
//       return;
//     }, 5000);
//   }, 20);
// });

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//version2 After viwed lections

import './styles.css';

import spinner from './js/spinner';
import updateFaceData from './js/updateFaceData';
import getGeoPosition from './js/getGeoPosition';
import fetchWeather from './js/fetchWeather';
import PNotify from '../node_modules/pnotify/dist/es/PNotify';

const getCityFormRef = document.getElementById('search-form');

function handleSubmit(event) {
  event.preventDefault();

  const valueOfCity = document.getElementsByTagName('input')[0].value;
  if (valueOfCity === '') {
    PNotify.notice({
      text: 'Пожалуйста введите название города!',
    });
    return;
  }
  fetchWeather(`${valueOfCity}`).then(data => {
    updateFaceData(data);
    document.forms['search-form'].reset();
  });
}
getCityFormRef.addEventListener('submit', handleSubmit);
getGeoPosition()
  .then(location => {
    spinner.show();

    fetchWeather(
      `${location.coords.latitude},${location.coords.longitude}`,
    ).then(data => {
      updateFaceData(data);
      spinner.hide();

      return;
    });
  })
  .catch(error => {
    PNotify.notice({
      text: 'Нет доступа к геопозиции, используйте поиск по имени города.',
    });
    spinner.hide();
  });
