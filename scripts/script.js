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

// Закрытие модального окна при клике на кнопку закрытия
const closeModalButton = document.querySelector(".application__close");

closeModalButton.addEventListener("click", () => {
    modalApplication.setAttribute("hidden", true);
});

const cardsPrice = document.querySelector('.price');
if (cardsPrice) {
    const priceList = cardsPrice.querySelector('.price__list');
    
    const cardsPriceData = {
        price1: {
            level: 'Пробный урок английского языка',
            price: 'бесплатно',
            description: 'Бесплатный пробный урок в действующих группах. По уровню и возрасту',
            button: 'Записаться'
        },
        price2: {
            level: 'Английский язык для дошкольников',
            price: '350₽/час',
            description: 'Групповые и индивидуальные занятия для дошкольников',
            button: 'Записаться'
        },
        price3: {
            level: 'Английский язык для учащихся младших классов',
            price: '400₽/час',
            description: 'Групповые и индивидуальные занятия для учащихся начальной школы',
            button: 'Записаться'
        },
        price4: {
            level: 'Английский язык для школьников',
            price: '450₽/час',
            description: 'Групповые и индивидуальные занятия для школьников средних классов, с учетом возраста и уровня знаний',
            button: 'Записаться'
        },
        price5: {
            level: 'Английский язык для взрослых',
            price: '500₽/час',
            description: 'Групповое и индивидуальное обучение разговорному английскому языку для взрослых, начинающих и продолжающих обучение',
            button: 'Записаться'
        },
        price6: {
            level: 'Французский язык',
            price: '450₽/час',
            description: 'Групповые и индивидуальные занятия обучения французскому языку для взрослых и детей',
            button: 'Записаться'
        },
        price7: {
            level: 'Летний интенсивный курс английского языка',
            price: 'от 3000₽',
            description: 'Летний интенсив "Разговорный английский" для взрослых',
            button: 'Записаться'
        }
    }

    const createCard = (level, price, description, button) => {
        const card = `
        <li class="price__item">
            <p class="price__level">${level}</p>
            <p class="price__price">${price}</p>
            <p class="price__description">${description}</p>
            <button class="price__button">${button}</button>
        </li>
    `;
        return card;
    }

    for (const cardKey in cardsPriceData) {
        const card = cardsPriceData[cardKey];
        const cardElement = createCard(card.level, card.price, card.description, card.button);
        priceList.insertAdjacentHTML('beforeend', cardElement);
    }
}

const cardsImages = document.querySelector(".images");
    if (cardsImages) {
        const cardListImages = cardsImages.querySelector(".images__list");

        const apiUrl = "images.json";

        const createCard = (imageUrl, imageAlt, imageWidth) => {
          
            const image = `
            <li class="images__item">
                <img class="images__picture" src="${imageUrl[0]}" alt="${imageAlt}" width="${imageWidth}">
                <img class="images__picture" src="${imageUrl[1]}" alt="${imageAlt}" width="${imageWidth}" style="display: none;">
            </li>
        `;

            return image;
        };
        const apiUrl = "images.json";
  
        fetch(apiUrl)
            .then((response) => response.json())
            .then((images) => {
                console.log(images); 
                console.log(typeof images);

                images.forEach((item) => {
                    const cardElement = createCard(
                        item.imageUrl,
                        item.imageAlt,
                        item.imageWidth
                    );
                    cardListImages.insertAdjacentHTML("beforeend", cardElement);
                });
                const pictures = document.querySelectorAll(".images__picture");
                if (pictures) {
                    pictures.forEach((picture) => {
                        picture.addEventListener("click", () => {
                            const parentItem = picture.parentElement;
                            const parentPictures =
                                parentItem.querySelectorAll(".images__picture");
                                parentPictures.forEach((parentPictures) => {
                                    if (parentPictures !== picture) {
                                        parentPictures.style.display = "block"; 
                                    } else {
                                        parentPictures.style.display = "none"; 
                                    }
                                });
                            });
                        });
                    }                    
                });
    }
















