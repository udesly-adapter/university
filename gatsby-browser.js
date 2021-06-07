// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
import "./src/style.css"

// Highlighting for code blocks
import "prismjs/themes/prism-tomorrow.css"

import './src/browser';


export const onRouteUpdate = () => {
    const style = getComputedStyle(document.documentElement);
    const headerHeight = Number(style.getPropertyValue('--header-height').match(/\d+/g)) || 80; 
    const footerHeight = Number(style.getPropertyValue('--footer-height').match(/\d+/g)) || 43;
    const mainContent = document.body.querySelector('.main-content') || document.body
   
        if (mainContent.getBoundingClientRect().height - headerHeight - footerHeight > window.innerHeight) {
            document.body.classList.add('long-page');
        } else {
            document.body.classList.remove('long-page');
        }
    
  }

  export const onServiceWorkerUpdateReady = () => {
    const answer = window.confirm(
      `This application has been updated. ` +
        `Reload to display the latest version?`
    )
    if (answer === true) {
      window.location.reload()
    }
  }