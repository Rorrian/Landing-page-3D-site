# 3D сайт с анимацией прокрутки "по оси Z"

![image](https://github.com/user-attachments/assets/e6751167-a35f-4db9-8086-4c2ddd9e0e8d)

## Основные функции
- **3D анимация прокрутки**: Модель движения слайдов в глубину при прокрутке страницы.
- **Работа с медиа**: Поддержка видео и аудио контента.

## Принципы работы
<details>
 <summary> Движения слайдов в глубину </summary>
 Весь скролл идет по оси Z.При скролле страницы мы вычисляем значение, на сколько прокручена страница, и соответственно значение, на кот. нужно изменить текущие позиции слайдов, и с помощью transform translateZ передвигаем слайды.
 Для основного контейнера обязательно задаем фиксированное положение и указываем значение перспективы, а также для родителя слайдов задаем свойство "transform-style: preserve-3d;" и для всего body указываем в качестве высоты "глубину" по оси Z
 </details>
 
## Deployment:
https://rorrian.github.io/Landing-page-3D-site/
