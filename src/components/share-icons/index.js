import { h } from 'preact';
import { useState } from 'preact/hooks';

import { Link } from 'preact-router/match';
import style from './style.css';
import RLDD from 'react-list-drag-and-drop/lib/RLDD';
import { allIcons, getShareIcon } from './icons';

//ref https://codepen.io/volitilov/pen/gxvyRX

const placeholder = document.createElement("a");
placeholder.class = "placeholder";

const SHARE_ICONS = "SHARE_ICONS";

const getDataFromLocalStorage = () => {
    const icons = JSON.parse(window.localStorage.getItem(SHARE_ICONS)) || [];
    return icons.map(icon => ({...icon, icon: getShareIcon(icon.name, icon.link)}))
}

const saveDataToLocalStorage = (items) => {
    // const copyItems = JSON.parse(JSON.stringify(items));
    return window.localStorage.setItem(SHARE_ICONS, JSON.stringify(items.map(i => ({
        id: i.id,
        name: i.name,
        link: i.link
    }))));
}
const ShareIcon = () => {
    const [items, setItems] = useState(getDataFromLocalStorage() || []);

    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [error, setError] = useState("");
    const [name, setName] = useState("");
    const [link, setLink] = useState("");
    const [iconClass, setIconClass] = useState("");

    console.log("ITEMS: ", items)

    const handleRLDDChange = (newItems) => {
        setItems(newItems);
    }

    const showModal = () => {
        setIsModalOpen(true);
        setToDefault();
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setToDefault();
    }

    const setToDefault = () => {
        setName("");
        setLink("");
        setIconClass("");
    }

    const isAlreadySelected = (icon) => {
        return (items.map(i => i.name)).includes(icon.name)
    }

    const saveData = () => {
        console.log(name, link);
        if (!name || !link) {
            setError("name and url are required");
            return
        }

        setError("");
        const lastId = items.length > 0 ? items[items.length-1].id: 0
        const newId = lastId + 1;
        const newItems = [...items, {
            id: newId,
            name: name,
            link: link,
            icon: getShareIcon(name, link)
        }];
        setItems(newItems);

        console.log("newItems", newItems)

        saveDataToLocalStorage(newItems)

        closeModal();
    }

    const removeIcon = (icon) => {
        const newItems = items.filter(item => item.name !== icon.name);
        setItems(newItems);
        saveDataToLocalStorage(newItems)
    }
    
	return (
        <>
            <div class={`${style['s-soft']} ${isCollapsed ? style['so-collapse']: ''}`}>
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
                                <div class={`${style['s-item']} ${style[item.name]} cursor-pointer`} target="_blank">
                                    {/* <span class={`fab ${item.iconClass}`}></span> */}
                                    { item.icon}
                                </div>
                               
                            );
                        }}
                        onChange={handleRLDDChange}
                    />
               
                <a class={`${style['s-item']} cursor-pointer bg-green-600`} onClick={() => showModal()}>
                    <span class="fa fa-plus"></span>
                </a>
                <a class={`${style['s-item']} ${style.print} cursor-pointer ${style['so-close']}`} onClick={() => setIsCollapsed(true)}>
                    <span class="fa fa-arrow-left"></span>
                </a>
            </div>
            <a class={`${style['s-item']} ${style.print} ${style['so-open']} cursor-pointer ${isCollapsed ? style['left-0']: '-left-60'}`} onClick={() => setIsCollapsed(false)}>
                <span class="fa fa-arrow-right"></span>
            </a>

            <div id="modal" class={`fixed ${isModalOpen ? "" : "hidden"} z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4`}>
                <div class="relative top-40 mx-auto shadow-lg rounded-md bg-white w-2/3">

                
                    <div class="flex justify-between items-center bg-green-500 text-white text-xl rounded-t-md px-4 py-2">
                        <h3>Add Social Icon</h3>
                        <button onClick={() => closeModal()}>x</button>
                    </div>

                
                    <div class="max-h-100 overflow-y-scroll p-4">
                        {error && (
                        <div class="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-md text-red-700 bg-red-100 border border-red-300 ">
                            <div class="text-xl font-normal  max-w-full flex-initial">
                                {error}
                            </div>
                        </div>
                        )}


                        {allIcons.map(icon => (
                            <span class={` inline-block p-2 m-2 text-white relative`} key={icon.name}>
                               
                                <input type="radio" name="name" value={icon.name} class="default:ring-2 absolute top-2 left-2" 
                                    defaultChecked={name === icon.name}
                                    disabled={isAlreadySelected(icon)} 
                                    onChange={(e) => {
                                        setName(e.target.value)
                                        setIconClass(icon.iconClass);
                                    }}/>
                                {/* <i class={`fab ${icon.iconClass} fa-2x`}></i>  */}
                                {icon.icon}
                                {isAlreadySelected(icon) && (
                                 <i class={`fas fa-times cursor-pointer absolute -top-2 -right-1 w-5 h-5  rounded-full flex justify-center items-center text-center p-3 bg-black`} onClick={() => removeIcon(icon)}></i> 
                                )}


                            </span>
                        ))}
                        <div class="mt-2">
                            <label class="block">
                                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Url
                                </span>
                                <input type="text" name="link" 
                                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" 
                                placeholder="url..." value={link} onChange={(e) => setLink(e.target.value)}/>
                            </label>
                        </div>
                    </div>

                
                    <div class="px-4 py-2 border-t border-t-gray-500 flex justify-end items-center space-x-4">
                        <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition" onClick={() => saveData()}>Save</button>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ShareIcon;
