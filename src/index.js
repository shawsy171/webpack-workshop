import nav from "./nav";
// import { top, bottom } from "./footer"; 
/**
 * if there is a already a reference to the dynamic import route (./footer) then the file we be in the bundle 
 * and not separated out for a dynamic import
 */
import makeButton from "./button"; // common js default export
import { makeColorStyle } from "./button-style";

const getFooter = () => import("./footer");

// images
import image from "./webpack-logo.jpg";
import makeImage from "./image";

const button = makeButton("My Button")
button.style = makeColorStyle('red')
const logo = makeImage(image);

button.addEventListener('click', e => {
    
    getFooter().then(footerModule => {
        /**
         * An additional chunk (bundle) will be created in the webpack output
         * you will see this is dynamically import because there will be a network request to get this file (./footer) / chunk
         * which can be seen in the network tab
         */
        document.body.appendChild(footerModule.footer);
    });
});

document.body.appendChild(button);
document.body.appendChild(logo);

console.log(nav)
