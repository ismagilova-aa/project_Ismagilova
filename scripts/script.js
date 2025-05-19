"use strict";

document.addEventListener("DOMContentLoaded", () => {
    // * 1. Начало.
    // * 2. Получаем все элементы изображений с описанием.
    // * 3. Для каждого изображения (проверяем есть ли такие изображения):
    // *    3.1. Добавляем обработчик наведения курсора на изображение:
    // *         3.1.1. Да:
    // *             3.1.1.1. показываем текст при наведении.
    // *             3.1.2. Нет: продолжаем.
    // *    3.2. Добавляем обработчик курсор уходит с изображением:
    // *         3.3.1. Да:
    // *             3.3.1.1. Скрываем элементы с описанием.
    // *         3.3.2. Нет: продолжаем.
    // * 4. Конец.
    
    const teachersImg = document.querySelectorAll(".teachers__card");
    
    teachersImg.forEach((item, index) => {
        const teachersText = document.querySelectorAll('.teachers__desc');

        item.addEventListener('mouseenter', () => {
            teachersText[index].removeAttribute('hidden');
        });

        item.addEventListener('mouseleave', () => {
            teachersText[index].setAttribute('hidden', true);
        });
    });

});

/* 1. Динамический вывод карточек тегов. Часть 1 (Используем с данными) */
const teachersContainer = document.querySelector(".teachers__list");

if (teachersContainer) {
    const dataTitleTeachers= [
        "Ким Маргарита Сергеевна",
        "Иванова Елена Андреевна",
        "Сидорова Яна Павловна",
        "Марков Марк Маркович",
    ];

    const titleTeachers =
         teachersContainer.querySelectorAll(".teachers__name");

         titleTeachers.forEach((item, index) => {
            item.textContent = dataTitleTeachers[index];
        });
 }

/* 4. Появление модального окна*/
const aboutButtonModal = document.querySelector(".about__button");
const modalApplication = document.querySelector(".applications");
    
if (aboutButtonModal && modalApplication) {
    aboutButtonModal.addEventListener("click", () => {
        modalApplication.removeAttribute("hidden");
    });
}
// Закрытие модального окна при коике вне его области
window.addEventListener("click", (event) => {
    if (event.target === modalApplication) {
        modalApplication.setAttribute("hidden", true);
    }
});

// Закрытие модального окна при коике на кнопку закрытия
const closeModalButton = document.querySelector(".application__close");

closeModalButton.addEventListener("click", () => {
    modalApplication.setAttribute("hidden", true);
});






