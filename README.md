# Review Reporter
Утилита быстрого сбора тикетов для отчета на ревью за указанный период

## Установка
```
git clone https://github.yandex-team.ru/nybble/host-cleaner.git 
&& cd host-cleaner 
npm i
```

## Настройка
<b>./src/configs</b>:
- <b>query</b> - как искать тикеты. Поменять дату, начиная с которой искать на свою. [Язык запросов](https://wiki.yandex-team.ru/tracker/vodstvo/query/)

<b>.env</b> (создать свой):
- <b>STARTREK_TOKEN</b> - токен для Стартрека. [Получить тут](https://oauth.yandex-team.ru/authorize?response_type=token&client_id=5f671d781aca402ab7460fde4050267b)

## Запуск
- `npm run task:makeIssuesReport` - разослать уведомления на почту с просьбой удалить ненужные git-ветки

## Отчеты
Отчеты хранятся в папке <b>./reports</b> в виде html-страничек, которые потом можно отправить на почту
Файлы не перетирают друг друга. 
Почистить отчеты можно `npm run clean:reports`

## Разработка

### Отладка
`npm run watch` и работать в <b>./src/index.ts</b>. 

## Тикет с предложениями
[MARKETFRONTECH-2682](https://st.yandex-team.ru/MARKETFRONTECH-2682)
