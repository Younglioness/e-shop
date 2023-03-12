const items = [{
        title: "Атласная блуза",
        description: "Блуза из вискозы с воротником и длинными рукавами",
        tags: ["для нее"],
        price: 139,
        img: "./img/1.jpg",
    },
    {
        title: "Футболка",
        description: "Футболка приталенного кроя с асимметричным вырезом и короткими рукавами",
        tags: ["для нее"],
        price: 60,
        img: "./img/2.jpg",
    },
    {
        title: "Жилет с ремнем",
        description: "Двубортный жилет из смесового хлопка",
        tags: ["для нее"],
        price: 369,
        img: "./img/3.jpg",
    },
    {
        title: "Толстовка в рубчик",
        description: "Толстовка оверсайз с круглым вырезом",
        tags: ["для нее"],
        price: 100,
        img: "./img/4.jpg",
    },
    {
        title: "Брюки карго",
        description: "Брюки из эластичной ткани",
        tags: ["для него"],
        price: 199,
        img: "./img/5.jpg",
    },
    {
        title: "Рубашка с контрастной вышивкой",
        description: "Рубашка свободного кроя с отложным воротником и короткими рукавами.",
        tags: ["для него"],
        price: 139,
        img: "./img/6.jpg",
    },
    {
        title: "Укороченная куртка с карманами",
        description: "Укороченная куртка с воротником с лацканами, длинными рукавами и манжетами с пуговицами.",
        tags: ["для него"],
        price: 199,
        img: "./img/7.jpg",
    },
    {
        title: "Поло из рельефной ткани",
        description: "Поло из смесового хлопка",
        tags: ["для него"],
        price: 119,
        img: "./img/8.jpg",
    },
    {
        title: "Толстовка в полоску",
        description: "Толстовка с круглым вырезом. Длинные рукава, детали в рубчик",
        tags: ["для детей"],
        price: 76,
        img: "./img/9.jpg",
    },
    {
        title: "Ярусная юбка",
        description: "Ярусная юбка из полупрозрачной ткани с эластичным поясом и бантиком",
        tags: ["для детей"],
        price: 86,
        img: "./img/10.jpg",
    },
    {
        title: "Футболка с надписью",
        description: "Футболка с круглым вырезом, короткими рукавами и вышивкой",
        tags: ["для детей"],
        price: 36,
        img: "./img/11.jpg",
    },
    {
        title: "Пижама в рубашечном стиле",
        description: "Пижама из двух предметов. Рубашка с воротником и длинными рукавами. Брюки с эластичным поясом.",
        tags: ["для детей"],
        price: 96,
        img: "./img/12.jpg",
    },
];


const itemsContainer = document.querySelector("#shop-items");
const itemTemplate = document.querySelector("#item-template");
const nothingFound = document.querySelector("#nothing-found");

function prepareShopItem(shopItem) {
    const { title, description, tags, img, price } = shopItem;
    const item = itemTemplate.content.cloneNode(true);
    item.querySelector("h1").textContent = title;
    item.querySelector("p").textContent = description;
    item.querySelector("img").src = img;
    item.querySelector(".price").textContent = `${price}BYN`;
    const tagsHolder = item.querySelector(".tags");
    tags.forEach((tag) => {
        const element = document.createElement("span");
        element.textContent = tag;
        element.classList.add("tag");
        tagsHolder.append(element);
    });

    return item;
}

let currentState = [...items];

function renderItems(arr) {
    nothingFound.textContent = "";
    itemsContainer.innerHTML = "";
    arr.forEach((item) => {
        itemsContainer.append(prepareShopItem(item));
    });
    if (!arr.length) {
        nothingFound.textContent = "Ничего не найдено";
    }
}

renderItems(currentState);

const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-btn");

function applySearch() {
    const searchString = searchInput.value.trim().toLowerCase();
    currentState = items.filter((el) =>
        el.title.toLowerCase().includes(searchString)
    );
    renderItems(currentState);
}

searchButton.addEventListener("click", applySearch);
searchInput.addEventListener("search", applySearch);