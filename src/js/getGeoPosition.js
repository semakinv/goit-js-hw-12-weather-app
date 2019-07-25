// Version 1 (BEFORE viwed lection  MUST DELETE!!!!!!!!!!!!1)

//import { reject } from 'q';

// import PNotify from '../../node_modules/pnotify/dist/es/PNotify';
// import spinner from './spinner';
// export default function getGeoPosition() {
//   const options = {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 1800000,
//   };

//   const processData = {};

//   const promise = new Promise((resolve, reject) => {
//     function success(pos) {
//       const crd = pos.coords;
//       processData.latitude = crd.latitude;
//       processData.longitude = crd.longitude;
//     }

//     function error(err) {
//       console.warn(`ERROR(${err.code}): ${err.message}`);

//       PNotify.notice({
//         text: 'Нет доступа к геопозиции, используйте поиск по имени города.',
//       });
//       spinner.hide();
//       //Расскоментировать для вывода уведомлний пользователю о причинах недоступной геолокации

//       // switch (err.code) {
//       //   case err.PERMISSION_DENIED:
//       //     alert(
//       //       'Пользователь не разрешил определить местоположение. Воспользуйтесь поиском по названию города',
//       //     );

//       //     break;
//       //   case err.TIMEOUT:
//       //     alert(
//       //       'Время ожидания браузером на определение местоположения прошло. Воспользуйтесь поиском по названию города или перезагрузите страницу и в течение 5 секунд позвольте браузеру определять ваше местоположение ',
//       //     );
//       //     break;
//       //   case err.POSITION_UNAVAILABLE:
//       //     alert(
//       //       'Информация о местоположении недоступна. Воспользуйтесь поиском по названию города',
//       //     );
//       //     break;
//       //   case err.UNKNOWN_ERROR:
//       //     alert(
//       //       'Произошла неизвестная ошибка определения местоположения. Воспользуйтесь поиском по названию города',
//       //     );
//       //     break;
//       //   default:
//       //     alert('Error.code: ' + err.code + ' Error.message: ' + err.message);
//       //     break;
//       // }
//       return (processData.error = `ERROR(${err.code}): ${err.message}`);
//     }
//     navigator.geolocation.getCurrentPosition(success, error, options);

//     resolve(processData);
//   });

//   return promise;
// }

//===================================================================
//Version2
export default function getGeoPosition() {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 1800000,
  };
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}
