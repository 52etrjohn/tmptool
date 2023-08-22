(function() {
    var accessCode = prompt("Enter the access code:");

    if (accessCode !== "123") {
        return;
    }

    alert("Press ] to toggle the menu's visibility\nMade by Tmp\nSU1 made by dproscripts");

    var menuContainer = document.createElement('div');
    menuContainer.style.position = 'fixed';
    menuContainer.style.top = '10px';
    menuContainer.style.right = '10px';
    menuContainer.style.background = 'black';
    menuContainer.style.color = 'white';
    menuContainer.style.border = '1px solid #ccc';
    menuContainer.style.padding = '10px';
    menuContainer.style.zIndex = '9999';
    menuContainer.style.display = 'block';

    var unblockersNote = document.createElement('p');
    unblockersNote.innerText = 'Some unblockers not made by me';
    unblockersNote.style.fontSize = '12px';
    unblockersNote.style.color = 'grey';
    unblockersNote.style.textAlign = 'center';
    menuContainer.appendChild(unblockersNote);

    var titleElement = document.createElement('h3');
    titleElement.innerText = "Tmp's Unblockers";
    titleElement.style.marginBottom = '10px';
    titleElement.style.textAlign = 'center';
    menuContainer.appendChild(titleElement);

    var authorElement = document.createElement('p');
    authorElement.innerText = "By Tmp\nSU1 made by dproscripts";
    authorElement.style.textAlign = 'center';
    menuContainer.appendChild(authorElement);

    var creditsButton = document.createElement('button');
    creditsButton.innerText = 'Credits';
    creditsButton.style.marginRight = '5px';
    creditsButton.style.display = 'block';
    creditsButton.style.marginBottom = '5px';
    creditsButton.addEventListener('click', function() {
        menuContainer.style.display = 'none';
        creditsContainer.style.display = 'block';
    });
    menuContainer.appendChild(creditsButton);

    var gamesContainer = document.createElement('div');
    gamesContainer.id = 'games';
    gamesContainer.style.marginTop = '20px';
    gamesContainer.style.textAlign = 'center';

    var gamesTitle = document.createElement('h4');
    gamesTitle.innerText = 'Games';
    gamesTitle.style.marginBottom = '10px';
    gamesContainer.appendChild(gamesTitle);

    var workInProgress = document.createElement('p');
    workInProgress.innerText = 'Work in progress';
    workInProgress.style.color = 'red';
    workInProgress.style.marginBottom = '10px';
    gamesContainer.appendChild(workInProgress);

    var gameButtons = [
        { name: 'Poki', code: 'window.location.href = "https://www.poki.com/";' },
        { name: 'Crazy Games', code: 'window.location.href = "https://www.crazygames.com/";' },
        { name: 'Stumble Guys', code: 'window.location.href = "https://stumbleguys.com/play/";' }
    ];

    for (var j = 0; j < gameButtons.length; j++) {
        var gameButton = document.createElement('button');
        gameButton.innerText = gameButtons[j].name;
        gameButton.style.marginBottom = '5px';
        gameButton.addEventListener('click', new Function(gameButtons[j].code));
        gamesContainer.appendChild(gameButton);
    }

    menuContainer.appendChild(gamesContainer);

    var menuToggleKey = ']';

    document.addEventListener('keydown', function(event) {
        if (event.key === menuToggleKey) {
            if (menuContainer.style.display === 'none') {
                menuContainer.style.display = 'block';
                creditsContainer.style.display = 'none';
            } else {
                menuContainer.style.display = 'none';
                creditsContainer.style.display = 'block';
            }
        }
    });

    var creditsContainer = document.createElement('div');
    creditsContainer.style.position = 'fixed';
    creditsContainer.style.top = '10px';
    creditsContainer.style.right = '10px';
    creditsContainer.style.background = 'black';
    creditsContainer.style.color = 'white';
    creditsContainer.style.border = '1px solid #ccc';
    creditsContainer.style.padding = '10px';
    creditsContainer.style.zIndex = '9999';
    creditsContainer.style.display = 'none';

    var tmpCredit = document.createElement('p');
    tmpCredit.innerText = 'Tmp';
    tmpCredit.style.textAlign = 'center';
    tmpCredit.style.marginBottom = '5px';
    creditsContainer.appendChild(tmpCredit);

    var dproCredit = document.createElement('p');
    dproCredit.innerText = 'DproMc';
    dproCredit.style.textAlign = 'center';
    dproCredit.style.marginBottom = '5px';
    creditsContainer.appendChild(dproCredit);

    var backButton = document.createElement('button');
    backButton.innerText = '<- Back';
    backButton.style.marginRight = '5px';
    backButton.style.display = 'block';
    backButton.style.marginBottom = '5px';
    backButton.addEventListener('click', function() {
        menuContainer.style.display = 'block';
        creditsContainer.style.display = 'none';
    });
    creditsContainer.appendChild(backButton);

    document.body.appendChild(menuContainer);
    document.body.appendChild(creditsContainer);
})();
