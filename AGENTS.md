# AGENTS.md

## Назначение проекта

Мобильное приложение «Сообщество инвесторов» на React Native (Expo) — перенос лендинга
kulagin-landing. Два экрана: «Главная» (содержание лендинга) и «О приложении». Подробности и
список обещаний — в `README.md`.

## Команды

```bash
npm install        # установка зависимостей
npx expo start      # запуск дев-сервера, QR-код для Expo Go
npx expo start --web  # запуск в браузере (опционально)
```

Хеш коммита на экране «О приложении» берётся из `EXPO_PUBLIC_COMMIT` (иначе — `dev`):

```bash
EXPO_PUBLIC_COMMIT=$(git rev-parse --short HEAD) npx expo start
```

## Облачная сборка Android

Workflow `.github/workflows/android-build.yml` собирает Android APK через EAS Build.
Запускается только вручную (`workflow_dispatch`) — вкладка **Actions** → **Android build** →
**Run workflow**. На push ничего не собирается.

Шаги workflow: `npm ci` → логин в EAS токеном из `secrets.EXPO_TOKEN` → вычислить короткий
хеш коммита → положить его в `EXPO_PUBLIC_COMMIT` EAS-окружения `preview`
(`eas env:create ... --force`) → `eas build -p android --profile preview --wait` → вывести
ссылку на страницу сборки и хеш в журнал и в Summary запуска.

Профиль `preview` в `eas.json` собирает internal APK и использует EAS-окружение `preview`
(`"environment": "preview"`) — именно туда workflow кладёт `EXPO_PUBLIC_COMMIT` перед сборкой.

## Правила изменений

- Напрямую в `main` не коммитим. Любое изменение — через отдельную ветку и Pull Request.
- Ветка создаётся от свежего `main`:

  ```bash
  git switch main
  git pull --ff-only
  git switch -c <логин>/<тема>
  ```

- Перед отправкой — локально запустить `npx expo start` и убедиться, что приложение
  открывается без ошибок.
- PR описывает, что изменилось и как проверить.

## Технические ограничения

- Только React Native и Expo. Без WebView, без отображения веб-страницы внутри приложения,
  без Flutter, Capacitor и нативного кода.
- Базовые компоненты React Native (`View`, `Text`, `Image`, `ScrollView`, `Pressable`).
  Новые библиотеки добавляются только после согласования.
- Ссылки открываются через `Linking.openURL`, не через WebView.

## Секреты

В репозиторий и коммиты не кладём пароли, ключи, токены, адреса внутренних сервисов и
персональные данные. `EXPO_PUBLIC_COMMIT` — не секрет, это просто короткий хеш коммита.
`EXPO_TOKEN` живёт только в Secrets репозитория (Settings → Secrets and variables → Actions),
в `eas.json`/workflow/код не попадает и в логи не печатается.
