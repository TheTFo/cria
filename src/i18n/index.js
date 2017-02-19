import i18n from 'i18next';

i18n.init({
  lng: 'en',
  resources: {
    en: {
      app: {
        "welcome": "Welcome",
      },
      todo: {
        "todo_list": "Todo List",
        "add_todo": "Add todo",
        "clear_all": "Clear all",
        "done": "Done"
      },
    },
    es: {
      app: {
        "welcome": "Bienvenido",
      },
      todo: {
        "todo_list": "Lista de quehaceres",
        "add_todo": "Añadir para hacer",
        "clear_all": "Limpiar todo",
        "done": "Hecho"
      }
    }
  }
});

export default i18n;
