//Разработать страницу "текстовый редактор".На странице должно быть размещено поле ввода и кнопка "Сохранить".
//_(фактического сохранения данных мз поля ввода делать не надо).Если пользователь пытается закрыть окно браузера не "сохранив" данные
//в поле ввода,должно запускатся окно,которое потребует подтверждения операуии закрытия окна.

//Событие которое позволяет отображать сообщение в модальном окне при закрытии страницы
window.onbeforeunload=function (){
    return ("Хотите сохранить введенные данные перед закрытием страници?");
    }
