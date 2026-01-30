Energy Analytics Portal

Демо-проект frontend-приложения, развёрнутого в интернете по HTTPS с использованием Docker Compose и Nginx.

Доступ:
https://uxdel.ru

Стек
Nginx (reverse proxy, HTTPS)
Docker / Docker Compose
Let’s Encrypt (certbot)
HTML
Node.js API (в отдельном контейнере)

Архитектура

nginx — принимает HTTP/HTTPS трафик, обрабатывает SSL, проксирует API
api — backend-контейнер
certbot — выпуск и хранение SSL-сертификатов

Схема:
Internet → Nginx (80/443) → 
                 ├── frontend (HTML)
                 └── /api → API container

Запуск проекта
docker compose up -d

SSL
Для домена используется сертификат Let’s Encrypt.
Файлы сертификатов монтируются в nginx-контейнер:

/etc/letsencrypt/live/uxdel.ru/fullchain.pem
/etc/letsencrypt/live/uxdel.ru/privkey.pem

Проверка
curl -I https://uxdel.ru

Ожидаемый результат: HTTP/1.1 200 OK