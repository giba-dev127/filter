// Функция для работы с Intersection Observer
const observer = new IntersectionObserver(
   (entries) => {
     entries.forEach((entry) => {
       if (entry.isIntersecting) {
         // Добавляем класс, если элемент виден
         entry.target.classList.add('visible');
       } else {
         // Убираем класс, если элемент выходит за пределы видимости
         entry.target.classList.remove('visible');
       }
     });
   },
   {
     threshold: 0.1, // Триггерится, если хотя бы 10% элемента видны
   }
 );
 
 // Находим все элементы, которые нужно анимировать
 const elements = document.querySelectorAll('#scroll-element');
 elements.forEach((el) => observer.observe(el)); 