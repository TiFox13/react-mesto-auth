# Проект: Место (регистрация и аутентификация)
Небольшой сайт для обмена фотографиями. В этот раз был добавлен базовый функционал по регистрации пользователя.Добавлена защита от незарегистрированных пользовательй для внутреннего контента.

## Основной функционал
* Отрисовка страницы с помощью React.js
* Регистрация новых пользователей
* Проверка токена при входе в систему
* Редактирование профиля
* Добавление новых фотографий или удаление уже имеющихся
* Поставить / убрать "лайк"
* Открытие фотографий с карточек в полном размере
* Закрытие всплывающих окон по клику вне окна или по клавише Esc

## Используемые техники и технологии
* React.js
* React Router 6
* Grid
* Flex-box
* Медиа-запросы (@media) для изменения стилей в точках перехода между разрешениями
* БЭМ
* JS
* CSS и HTML

## Планы по доработке
* Сделать валидацию ворм на стороне пользователя
* Доработать мобильную версию для новых элементов страницы

## Инструкция по развертыванию
Убедитесь, что Node.js и NPM установлены.
Склонируйте к себе репозиторий
git clone git@github.com:TiFox13/mesto-react.git

cd mesto-react

Запустите команду
npm i

Запустите пролижение
npm start

После запуска приложение перейдите на http://localhost:3000, чтобы посмотреть результат в браузере
