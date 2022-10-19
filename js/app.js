// 3D Scroll

// Все переменные задаем тип "let" и перечисляем черехз запятую
let zSpacing = -1000, // Расстояние между элементами на одном фрейме по оси Z
  lastPos = zSpacing / 5, // Стартовая позиция элементов(задается при обновлении страницы)
  // Знак $ обозначает, что это для нас основная переменная для работы(это смысл кот. мы сами задаем, иного нет)
  $frames = document.getElementsByClassName("frame"), // Важно исп. именно "getElementsByClassName" чтобы работать с элементом как с массивом
  frames = Array.from($frames),
  zVals = []; // Массив, кот. будем наполнять элементами по оси Z

window.onscroll = function () {
  let top = document.documentElement.scrollTop, // Расстояние сверху до текущего элемента(позиции)
    delta = lastPos - top;

  lastPos = top;

  // Механизм:
	// Весь скролл идет по оси Z
	// При скролле страницы мы вычисляем значение, на сколько прокручена страница, и соответственно значение,
	// на кот. нужно изменить текущие позиции слайдов, и с помощью transform translateZ передвигаем слайды

  frames.forEach(function (n, i) {
    // n - текущий эл-т, i - его индекс
    zVals.push(i * zSpacing + zSpacing); // Заполняем пустой массив измененными значениями. Каждому эл-ту назначаем позицию
    zVals[i] += delta * -5.5; // Индекс -5 для управления скоростью пролистывания слайдов
    let frame = frames[i],
      transform = `translateZ(${zVals[i]}px)`,
      // Math.abs(zSpacing) - преобразуем отрицательное число в положительное
      // Делим zSpacing на индекс, чтобы слайд пропадал немного раньше реального "прохода через" него. Без деления будет пропадать с задержкой
      // Для каждого элемента изменяеи opacity, если переходит границу видимости
      opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;
    frame.setAttribute("style", `transform: ${transform}; opacity: ${opacity}`);
  });
};

// При загрузке, обновлении страницы сразу скроллим на 4px чтобы слайды не сливались вместе и отображались корректно
// И из-за этого сразу срабатывает window.onscroll и все слайды встают по своим местам
window.scrollTo(0, 4);

//--------------------
// Audio

let soundBtn = document.querySelector(".sound-button"),
  audio = document.querySelector(".audio");

soundBtn.addEventListener("click", (e) => {
  soundBtn.classList.toggle("_paused");

  // Запускаем аудио по условию
  audio.paused ? audio.play() : audio.pause();
});

// ! При переходе на другую вкладку аудио останавливается, при возврате продолжается
window.onfocus = function(){
	soundBtn.classList.contains("_paused") ? audio.pause() : audio.play();
}
window.onblur = function(){
	audio.pause() ;
}
