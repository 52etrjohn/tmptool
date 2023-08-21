javascript:(function() {
    var menuContainer = document.createElement('div');
    menuContainer.style.position = 'fixed';
    menuContainer.style.top = '10px';
    menuContainer.style.right = '10px';
    menuContainer.style.background = 'white';
    menuContainer.style.border = '1px solid #ccc';
    menuContainer.style.padding = '10px';
    menuContainer.style.zIndex = '9999';

    var titleElement = document.createElement('h3');
    titleElement.innerText = "Tmp's Unblocker";
    titleElement.style.marginBottom = '10px';
    menuContainer.appendChild(titleElement);

    var tools = [
        { name: 'Tab Cloaker', code: 'var newTitle = prompt("Enter new title for the tab:"); if (newTitle) document.title = newTitle;' },
