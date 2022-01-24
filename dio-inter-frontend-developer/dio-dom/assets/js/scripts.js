function changeMode(params) {
    var h1Element = document.getElementById('page-title');
    h1Element.classList.toggle('dark-mode');
    btnMode.classList.toggle('dark-mode');
    btnMode.innerHTML = btnMode.classList.contains('dark-mode') ? "Light Mode" : "Dark Mode";   
    document.getElementsByTagName('footer')[0].classList.toggle('dark-mode');
    document.getElementsByTagName('body')[0].classList.toggle('dark-mode');
    h1Element.innerHTML = h1Element.classList.contains('dark-mode') ? "Dark Mode ON": "Light Mode ON";
    
}

const btnMode = document.getElementById('mode-selector');
btnMode.addEventListener('click', changeMode);