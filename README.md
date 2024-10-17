Приложение состоит из 6 компонентов, лежащих в /components. InfoPanel содержит в себе закрепленную боковую панель (которая на планшете или мобильнике превращается в верхнюю и прокручивается). В ней, помимо прочего, есть TheScale - компонент со шкалой, которая показывает уровень FUN. SubsPanel - компонент, внутри которого рендерятся карточки, собственно SubCard. Внутри карточек есть компонент CardBadge, который отвечает за кнопочку Subscribe/Unsubscribe. Наконец, TheModal - это модальное окно, которое появляется при нажатии на Unsubscribe from all.
Данные хранятся в папке /data в Pinia store. В задании написано, что "Страница должна получать данные из JSON файла Subscribe.json.". Однако в предоставленном файле не хватает некоторых данных, которые есть в макете: описаний, а также седьмого сайта по счету. Так что я сделал файл /data/data.json, в который добавил эту информацию. Соответственно store при инициализации берет два файла и смотрит, подписки на какие сайты в data.json subscribtions.json отмечены как true, и доавляет данные в реактивный объект sites, с которым и будет дальше работать приложение. Изображения для карточек, особо не заморачиваясь, сохранил под теми же названиями, которые имеют соответствующие сайты, плюс расширение svg. Файл с кастомным типом SiteData тоже расположен в папке /data.
Данные при инициализации приложения импортируются в Pinia и вся логика приложения сконцентрирована там же: подписка/отписка на один/все сайты, а также включение/выключение модального окна.
Стили написаны с использованием SASS, все файлы - в папке /styles. Там же - файл с двумя переменными, которые отвечают за брейкпойнты (на одном боковая панель сменяется верхней, на другом карточки выравниваются по середине страницы).
Некоторые дополнительные пояснения можно найти в перечисленных файлах.
