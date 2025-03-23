//render js file 
document.addEventListener('DOMContentLoaded', () => { //sets up an event listener that waits for HTML code to be uploaded first before executing inside code
    const startButton = document.getElementById('start-button'); //creates a start button variable that refers to the 'start-button' in the index.html 

    startButton.addEventListener('click', () => {
        //upon clicking on the start button the event listener will transfer the user to the "Timer" page 
        window.location.href = 'timer.html'; //changes the current page to 'timer.html' 


    }); 

    //Minimize and Close buttons 
    // the query selector finds an image element with an image element with the alt attribute 'Minimize' inside an element with the class with class 'window-controls'
    const minimizeButton = document.querySelector('.window-controls img[alt="Minimize"]');
    const closeButton = document.querySelector('.window-controls img[alt="Close"]');
    
    console.log('Minimize button found:', !!minimizeButton);
    console.log('Close button found:', !!closeButton);
    console.log('electronAPI available:', !!window.electronAPI);
    
    if (minimizeButton) {
        minimizeButton.addEventListener('click', () => {
            console.log('Minimize button clicked');
            if (window.electronAPI) {
                window.electronAPI.minimizeWindow();
            } else {
                console.error('electronAPI not available');
            }
        });
    }
    
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            console.log('Close button clicked');
            if (window.electronAPI) {
                window.electronAPI.closeWindow();
            } else {
                console.error('electronAPI not available');
            }
        });
    }

});
