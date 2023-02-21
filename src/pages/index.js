import "./index.scss";

const headerSettingsMenuOpenButton =
  document.querySelector(".header__link-menu");
const topPanelMenuOpenButton = document.querySelector(
  ".top-panel__menu-button"
);
const topPanelMenuOpenAddButton = document.querySelector(
  ".top-panel__add-button"
);

const headerSettingsMenu = document.querySelector(".header-settings-menu");
const topPanelMenu = document.querySelector(".top-panel-menu");
const topPanelMenuAdd = document.querySelector(".top-panel-menu-add");

const menuItem = document.querySelectorAll(".menu__item");

// Появление меню
function openMenu(button, menu, buttonClass, menuClass) {
  button.addEventListener("click", () => {
    if (!menu.classList.contains(menuClass)) {
      menu.classList.add(menuClass);
      button.classList.add(buttonClass);
    } else {
      menu.classList.remove(menuClass);
      button.classList.remove(buttonClass);
    }
  });
}
openMenu(
  topPanelMenuOpenButton,
  topPanelMenu,
  "top-panel__menu-button_active",
  "top-panel-menu_visible"
);

openMenu(
  headerSettingsMenuOpenButton,
  headerSettingsMenu,
  "header__link-menu_active",
  "header-settings-menu_visible"
);

openMenu(
  topPanelMenuOpenAddButton,
  topPanelMenuAdd,
  "top-panel__add-button_active",
  "top-panel-menu-add_visible"
);

// Подсветка пункта меню при наведении
let current = undefined;
function onMouseover() {
  if (current) {
    current.classList.remove("menu__item_active");
  }
  this.classList.add("menu__item_active");
  current = this;
  // Записываем текущий пункт,
  // чтобы удалить с него класс
  // при переходе курсора на новый элемент
}

for (let i = 0; i < menuItem.length; ++i) {
  const item = menuItem[i];
  item.addEventListener("mouseover", onMouseover);
}
