import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';

i18n
  .use(Backend)
  .init({
    lng: 'en-US',
    whitelist: ['en-US'],
    fallbackLng: false,
    load: 'currentOnly',
    backend: {
      loadPath: 'i18n/lang/{{lng}}/{{ns}}.json',
      allowMultiLoading: false,
      crossDomain: false,
      withCredentials: false
    }
  });

export default i18n;
