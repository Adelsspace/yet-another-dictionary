# Yet another Dictionary - онлайн словарь

## **1 уровень (необходимый минимум)**

- Реализованы Требования к функциональности, описанные в прикрепленном документе: ✔️

## React

- Пишем функциональные компоненты c хуками в приоритете над классовыми: ✔️
- Есть четкое разделение на умные и глупые компоненты: ✔️ [Умный](https://github.com/Adelsspace/yet-another-dictionary/blob/master/src/components/SearchedInfoComponent/SearchedInfo.tsx) , [Глупый](https://github.com/Adelsspace/yet-another-dictionary/blob/master/src/components/AcountLoginComponent/AcountLogin.tsx)
- Есть рендеринг списков: ✔️ [HistoryComponent](https://github.com/Adelsspace/yet-another-dictionary/blob/master/src/components/HistoryComponent/HistoryComponent.tsx)
- Реализована хотя бы одна форма: ✔️[LoginForm](https://github.com/Adelsspace/yet-another-dictionary/blob/master/src/components/LoginComponent/LoginForm.tsx)
- Есть применение Контекст API: ✔️ из [App](https://github.com/Adelsspace/yet-another-dictionary/blob/master/src/App.tsx) в [HistoryComponent](https://github.com/Adelsspace/yet-another-dictionary/blob/master/src/components/HistoryComponent/HistoryComponent.tsx)
- Есть применение предохранителя: ✔️ [App](https://github.com/Adelsspace/yet-another-dictionary/blob/master/src/App.tsx) [ErrorBoundary](https://github.com/Adelsspace/yet-another-dictionary/blob/master/src/components/ErrorBoundariesComponent/ErrorBoundaries.tsx)
- Есть хотя бы один кастомный хук: ✔️ [useDebounce](https://github.com/Adelsspace/yet-another-dictionary/blob/master/src/components/hooks/useDebounce.tsx)
- Хотя бы несколько компонентов используют PropTypes: ✔️ [AcountLogin](https://github.com/Adelsspace/yet-another-dictionary/blob/master/src/components/AcountLoginComponent/AcountLogin.tsx) [SearchedInfo](https://github.com/Adelsspace/yet-another-dictionary/blob/7576b4fd1549bbb32f7cdf315435dad9313e1a20/src/components/SearchedInfoComponent/SearchedInfo.tsx#LL80C27-L80C27)
- Поиск не должен триггерить много запросов к серверу: ✔️ [debounce](https://github.com/Adelsspace/yet-another-dictionary/blob/7576b4fd1549bbb32f7cdf315435dad9313e1a20/src/components/SearchComponent/Search.tsx#L14)
- Есть применение lazy + Suspense: ✔️[App](https://github.com/Adelsspace/yet-another-dictionary/blob/master/src/App.tsx)

## Redux

- Используем Modern Redux with Redux Toolkit: ✔️
- Используем слайсы: ✔️ [translateDirectionSlice](https://github.com/Adelsspace/yet-another-dictionary/blob/7576b4fd1549bbb32f7cdf315435dad9313e1a20/src/redux/translateDirection/slice.ts) [userSlice](https://github.com/Adelsspace/yet-another-dictionary/blob/7576b4fd1549bbb32f7cdf315435dad9313e1a20/src/redux/user/slice.ts)
- Есть хотя бы одна кастомная мидлвара: ✔️ [loggerMiddleware](https://github.com/Adelsspace/yet-another-dictionary/blob/7576b4fd1549bbb32f7cdf315435dad9313e1a20/src/redux/loggerMiddleware.ts)
- Используется RTK Query: ✔️ [yandexApi](https://github.com/Adelsspace/yet-another-dictionary/blob/7576b4fd1549bbb32f7cdf315435dad9313e1a20/src/redux/yandexApi.ts)
- Используется Transforming Responses: ✔️ [yandexApi](https://github.com/Adelsspace/yet-another-dictionary/blob/7576b4fd1549bbb32f7cdf315435dad9313e1a20/src/redux/yandexApi.ts)

## **2 уровень (необязательный)**

- Использование TypeScript: ✔️
