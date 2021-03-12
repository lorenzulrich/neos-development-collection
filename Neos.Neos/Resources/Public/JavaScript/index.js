import { DropDownMenu, MenuPanel } from "./Components/TopBar";
import Tree from "./Components/Tree";
import { Configuration, Notification } from "./Services";
import { cachedFetch } from "./Services/ResourceCache";

// init API's
Configuration.init();
Notification.init();

// preload vieSchema
const vieSchema = cachedFetch(Configuration.get("VieSchemaUri"));

const dropDownMenuElements = document.querySelectorAll(".neos-user-menu");
dropDownMenuElements.forEach((dropDownElement) => {
	new DropDownMenu(dropDownElement);
});

const menuPanelElements = document.querySelectorAll(".neos-menu");
menuPanelElements.forEach((panelElement) => {
	new MenuPanel(panelElement);
});

const treeElements = document.querySelectorAll(".neos-tree-container");
treeElements.forEach((treeElement) => {
	new Tree(treeElement);
});
