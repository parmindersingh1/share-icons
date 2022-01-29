import { getAllIcons, getShareIcon } from "./icons";

import { Link } from "preact-router/match";
import RLDD from "react-list-drag-and-drop/lib/RLDD";
import { h } from "preact";
import style from "./style.css";
import { useState } from "preact/hooks";

//ref https://codepen.io/volitilov/pen/gxvyRX

const placeholder = document.createElement("a");
placeholder.class = "placeholder";

const SHARE_ICONS = "SHARE_ICONS";
const link = window.location.origin;

const getFirstFourElements = () => {
  const allIcons = getAllIcons();
  const icons = allIcons.slice(0, 4);
  return icons.map((icon, i) => ({
    ...icon,
    id: i + 1,
    link: link,
    icon: getShareIcon(icon.name, icon.link, 55),
  }));
};

const getRemainingElements = () => {
  const allIcons = getAllIcons(20);
  const icons = allIcons.slice(4, allIcons.length);
  return icons.map((icon, i) => ({
    ...icon,
    id: i + 4,
    link: link,
    icon: getShareIcon(icon.name, icon.link, 20),
  }));
};

const ShareIcon = () => {
  const [items, setItems] = useState(getFirstFourElements() || []);
  const [dropdownItems, setDropdownItems] = useState(
    getRemainingElements() || []
  );
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);

  const [isCollapsed, setIsCollapsed] = useState(false);

  console.log("ITEMS: ", items);

  const handleRLDDChange = (newItems) => {
    setItems(newItems);
  };

  const showDropdownPopover = () => {
    setDropdownPopoverShow(true);
  };

  const closeDropdownPopover = () => {
    // setDropdownPopoverShow(false);
  };

  return (
    <>
      <div
        class={`${style["s-soft"]} ${isCollapsed ? style["so-collapse"] : ""}`}
      >
        {/* {items.map((item, index) => (
                    <a href={item.link} class={`${style['s-item']} ${style[item.name]}`} id={ index }
                        key={ index }>
                        <span class={`fab ${item.iconClass}`}></span>
                    </a>
                ))} */}

        <RLDD
          items={items}
          itemRenderer={(item) => {
            return (
              <div
                class={`${style["s-item"]} ${style[item.name]} cursor-pointer`}
                target="_blank"
              >
                {/* <span class={`fab ${item.iconClass}`}></span> */}
                {item.icon}
              </div>
            );
          }}
          onChange={handleRLDDChange}
        />

        <a
          class={`${style["s-item"]} ${style.print} cursor-pointer ${style["so-close"]}`}
          onClick={() => setIsCollapsed(true)}
        >
          <span class="fa fa-arrow-left"></span>
        </a>

        <div onMouseLeave={() => closeDropdownPopover()}>
          <a
            class={`${style["s-item"]} cursor-pointer bg-green-600`}
            onMouseEnter={() => showDropdownPopover()}
          >
            <span class="fa fa-ellipsis-h"></span>
          </a>

          {/* (dropdownPopoverShow ? "block " : "hidden ")  */}
          <div
            id="dropdown"
            class={
              (dropdownPopoverShow ? "block " : "hidden ") +
              " z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 overflow-y-scroll h-80"
            }
          >
            <ul class="py-1" aria-labelledby="dropdownButton">
              {/* <li>
                <a
                  href="#"
                  class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li> */}
              {dropdownItems.map((di, i) => (
                <li>
                  <div
                    class={`flex cursor-pointer block py-0.5 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white`}
                    target="_blank"
                  >
                    {/* <span class={`fab ${item.iconClass}`}></span> */}
                    {di.icon} 
                    <span class="flex-1 ml-2">{di.name}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <a
          class={`${style["s-item"]} ${style.print} ${
            style["so-open"]
          } cursor-pointer ${isCollapsed ? style["left-0"] : "-left-60"}`}
          onClick={() => setIsCollapsed(false)}
        >
          <span class="fa fa-arrow-right"></span>
        </a>
      </div>
    </>
  );
};

export default ShareIcon;
