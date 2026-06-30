# 1orbit — промо-лендинг

Главная промо-страница мобильной PvPvE космо-MMO **1orbit**. Mobile-first, адаптив
под desktop. Визуал и интерактив воссозданы «с нуля» по мотивам мобильной страницы-анонса
GTA VI (Rockstar), но **без какого-либо IP GTA**: бренд, тексты, палитра и шрифты — свои.

Чистый фронтенд: **React + Vite**, без тяжёлых зависимостей. Анимации — на
`IntersectionObserver` (reveal) и `requestAnimationFrame` (параллакс осколков). Дизайн —
CSS/SVG без внешних изображений (вместо артов — рамки-плейсхолдеры).

## Запуск

```bash
npm install
npm run dev      # http://localhost:5174
npm run build && npm run preview
```

## Что воссоздано из оригинала (и чем заменено)

| GTA VI (оригинал) | 1orbit (здесь) |
|---|---|
| Майами/закат, розовый `#f976b0`, ар-деко-шрифты | Космос, циан `#36e2ff` + nox-фиолетовый + sol-золото; шрифт Orbitron |
| Hero с «осколками»-полароидами (арты GTA) | Hero с осколками-плейсхолдерами (рамки под арты кораблей/пилотов) |
| «Coming November 19, 2026» | «Открытый бета-тест · 2026» |
| Ultimate Edition / Pre-order Bonuses | Издание основателя (Founder’s Pack) / Награды за предрегистрацию |
| Story: Vice City, Jason & Lucia | Мир: открытый космос, PvPvE, порталы, safe-зоны, PK-статус |
| Trailer 2 → видео-модалка | Геймплейный трейлер → видео-модалка |
| People & Places: Only in Leonida | Локации и зоны (порталы/радиация/патрули) |
| Plays Best On PS5 (PS5/Xbox) | Лучше всего на мобильных (iOS/Android/PC) |
| Get Rockstar Propaganda | Получай новости 1orbit (форма подписки) |
| Соцсети Rockstar, ESRB | Discord/X/YouTube/Telegram/TikTok/Twitch, бейдж 12+ |

## Функционал

Липкий хедер (компакт на скролле) · мобильное меню (scroll-lock, Escape, фокус) ·
параллакс «осколков» в hero по скроллу · reveal-анимации секций · видео-модалка трейлера ·
модалка «Играть/Предрегистрация» с выбором платформы · форма подписки (валидация + success).
Всё уважает `prefers-reduced-motion`.

## Где подставить свой контент

- **Тексты, ссылки, состав осколков, подписи рамок** — один файл [`src/content.js`](src/content.js)
  (структура готова под будущий i18n).
- **Свои арты вместо плейсхолдеров** — компонент [`src/components/ArtFrame.jsx`](src/components/ArtFrame.jsx):
  замени внутренность на `<img src=… alt=…>`, классы рамки оставь. Каждая рамка подписана,
  куда какой арт идёт (напр. «Корабль heavy», «Кадр трейлера», «Геймплей · полёт по локации»).
- **Видео трейлера** — [`src/components/TrailerModal.jsx`](src/components/TrailerModal.jsx):
  замени `ArtFrame` на `<video controls src=…>`.
- **Палитра и шрифты** — токены в начале [`src/styles.css`](src/styles.css) (`--accent`, `--nox`,
  `--sol`, `--nebula`, `--font-display`).
- **Логотип** — пока SVG-марка `OrbitMark` в [`src/Icons.jsx`](src/Icons.jsx); подставишь свой.
- **Отправка форм** (подписка/предрегистрация) — заглушки; подключи свой эндпоинт в
  `Newsletter.jsx` / `PlayModal.jsx`.

## Структура

```
src/
  main.jsx · App.jsx · content.js · Icons.jsx · styles.css
  hooks/    useReveal.js · useParallax.js · useScrollLock.js
  components/
    Header · MobileMenu · Hero · ShardField · Section · Features · FeatureCard
    WorldSection · ArtFrame · Modal · TrailerModal · PlayModal · Newsletter · Footer
```

> Все имена, тексты и визуальные заглушки — контент проекта 1orbit. Никаких материалов
> Rockstar/GTA в проекте нет.
