import { getAllIcons, getShareIcon } from "./icons";

import { Link } from "preact-router/match";
import RLDD from "react-list-drag-and-drop/lib/RLDD";
import { h } from "preact";
import style from "./style.css";
import { useState } from "preact/hooks";

//ref https://codepen.io/volitilov/pen/gxvyRX

const placeholder = document.createElement("a");
placeholder.class = "placeholder";

import { Popover } from 'react-tiny-popover'

const getFirstFourElements = (link) => {
  const allIcons = getAllIcons();
  const icons = allIcons.slice(0, 4);
  return icons.map((icon, i) => ({
    ...icon,
    id: i + 1,
    link: link,
    icon: getShareIcon(icon.name, link, 55),
  }));
};

const getRemainingElements = (link) => {
  const allIcons = getAllIcons(20);
  const icons = allIcons.slice(4, allIcons.length);
  return icons.map((icon, i) => ({
    ...icon,
    id: i + 4,
    link: link,
    icon: getShareIcon(icon.name, link, 25),
  }));
};

const ShareIcon = ({align = 'left', link}) => {
  const [items, setItems] = useState(getFirstFourElements(link) || []);
  const [dropdownItems, setDropdownItems] = useState(
    getRemainingElements(link) || []
  );

  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleRLDDChange = (newItems) => {
    setItems(newItems);
  };

  const getCollapseClasses = () => {
    let collapseClass = "";
    if (isCollapsed) {
      collapseClass += style["so-collapse"];

      if (align === "left") {
        collapseClass += " -left-60";
      }
  
      if (align === "right") {
        collapseClass += " -right-60";
      }
    }
    return collapseClass;
  }

  const getAlignClass = () => {
    let alignClass = "";
    if (align === "left") {
      alignClass += "flex-col left-0 top-40";
    }
    if (align === "right") {
      alignClass += "flex-col right-0 top-40";
    }

    if (align === "top") {
      alignClass += "flex top-0 justify-center w-screen";
    }

    if (align === "bottom") {
      alignClass += "flex bottom-0 justify-center w-screen";
    }

    if (align === "top-left") {
      alignClass += "flex flex-row-reverse top-0 left-0";
    }

    if (align === "top-right") {
      alignClass += "flex top-0 right-0";
    }

    if (align === "bottom-left") {
      alignClass += "flex flex-row-reverse bottom-0 left-0";
    }

    if (align === "bottom-right") {
      alignClass += "flex bottom-0 right-0";
    }

    return alignClass;
  }

  const getDropdownDirection = () => {
    return (align.includes("bottom") ? "top": "bottom")
  }
  return (
    <>
      <div
        class={`${style["s-soft"]} ${getCollapseClasses()} ${getAlignClass()}`}
      >
        {/* {items.map((item, index) => (
                    <a href={item.link} class={`${style['s-item']} ${style[item.name]}`} id={ index }
                        key={ index }>
                        <span class={`fab ${item.iconClass}`}></span>
                    </a>
                ))} */}

        <RLDD
          items={items}
          layout={(align.includes("top") || align.includes("bottom")) ?  "horizontal" : "vertical"}
          itemRenderer={(item) => {
            return (
              <div
                class={`${style["s-item"]} ${style[item.name]} cursor-pointer ${align === 'left'? 'hover:pl-10': (align === "right"? "hover:pr-10" : "")}`}
                target="_blank"
              >
                {/* <span class={`fab ${item.iconClass}`}></span> */}
                {item.icon}
              </div>
            );
          }}
          onChange={handleRLDDChange}
        />

        {/* <a
          class={`${style["s-item"]} ${style.print} cursor-pointer ${style["so-close"]}`}
          onClick={() => setIsCollapsed(true)}
        >
          <span class="fa fa-arrow-left"></span>
        </a> */}

        <div  class={`relative inline-block ${style["dropdown"]}`}>
          <a
            class={`${style["s-item"]} cursor-pointer bg-green-600 `}
            data-dropdown-toggle="dropdownTop" data-dropdown-placement={getDropdownDirection()}
          >
            <span class="fa fa-ellipsis-h"></span>
          </a>
            <div class={align.includes("bottom") ? style["dropup-content"]: style["dropdown-content"]}>
              <ul class="py-1">
                {dropdownItems.map((di, i) => (
                  <li>
                    <div
                      class={`flex cursor-pointer block py-0.5 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white`}
                      target="_blank"
                    >
                      {/* <span class={`fab ${item.iconClass}`}></span> */}
                      {di.icon} 
                      {/* <span class="flex-1 ml-2">{di.name}</span> */}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
        </div>
       

   
      </div>
    </>
  );
};

export default ShareIcon;
