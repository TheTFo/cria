import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';

i18n
  .use(Backend)
  .init({
    fallbackLng: false,
    lng: 'en-US',
    backend: {
      loadPath: 'i18n/lang/{{lng}}.json',
      allowMultiLoading: false,
      crossDomain: false,
      withCredentials: false,
    }
  });

export default i18n;
