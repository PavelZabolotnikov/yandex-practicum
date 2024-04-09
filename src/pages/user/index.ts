export { UserPage } from './user-profile'
export { UserInfoChangePage } from './user-info-change'
import Handlebars from 'handlebars';
Handlebars.registerHelper('userInfo', () => ({
    email: 'yandex@yandex.ru',
    login: 'SailorMan',
    second_name: 'Бортников',
    first_name: 'Александр',
    chat_name: 'Sailorman',
    phone_number: '8-495-224-22-22',
  }));