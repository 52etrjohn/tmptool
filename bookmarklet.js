javascript: var password = prompt("Enter the access code:");
if (password !== "tmptool5") {
    alert("Access denied.");
} else {
    alert("Press ] to toggle the menu's visibility\nMade by Tmp");

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
    authorElement.innerText = "By Tmp";
    authorElement.style.textAlign = 'center';
    menuContainer.appendChild(authorElement);

    var tools = [
        { name: 'Tab Cloaker', code: 'var newTitle = prompt("Enter new title for the tab:"); if (newTitle) document.title = newTitle;' },
        { name: 'Old SU1 Tool (Some features might not work)', code: 'const scriptUrl = "https://raw.githubusercontent.com/securlyunblocker/SU1/main/main.js";\nconst loadScript = async (url) => {\n const response = await fetch(url);\n const script = await response.text();\n eval(script);\n};\nloadScript(scriptUrl);' },
        { name: 'Point Blank Swap Disabler', code: 'document = window.document; alert("This has to be ran on a extension about:blank page"); document.write("<html><body><h1>[Point Blank Swap Launcher]</h1><center><h1>---Disabling---</h1></center><center><button id=\'kill\'>Soft Disable</button></center><center><button id=\'disable\'>Hard Kill</button></center><center><button id=\'revkill\'>Revert Hard Kill</button></center><center><h1>--Extension Sites--</h1></center><center><h4>This is where you find the pages you are supposed to run this bookmarklet Choose your blocker below, if it says blocked by chrome, reload the page then click the link</h4><button id=\'blocksi\'>Blocksi</button><button id=\'classrom\'>Securly Classroom</button><button id=\'curly\'>Securly</button><button id=\'gogog\'>GoGuardian</button><button id=\'iBoss\'>iBoss</button><button id=\'umbrella\'>Cisco Umbrella</button><center><h1> ---Scripts--- </h1></center><center><button id=\'goofy\'>Display Goofy Alert</button><button id=\'aboutB\'>A.B.C Cloaker</button></center><button id=\'suggestions\'>Suggestions</button><center><button id=\'securly\'>Custom Securly Page</button><button id=\'classroom\'>Custom Securly Classroom page</button></center><center><center><h4>Note: Some extensions do not allow eval to be ran, which means running your own code won\'t work. Instead, try the other scripts above</h4></center><textarea id=\'code\' placeholder=\'Put Code Here\'></textarea></center><center><button id=\'run\'>Run Code</button></center></body></html>");' }
    ];

    for (var i = 0; i < tools.length; i++) {
        var toolButton = document.createElement('button');
        toolButton.innerText = tools[i].name;
        toolButton.style.marginRight = '5px';
        toolButton.style.display = 'block';
        toolButton.style.marginBottom = '5px';
        toolButton.addEventListener('click', new Function(tools[i].code));
        menuContainer.appendChild(toolButton);
    }

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

    var suggestionsButton = document.createElement('button');
    suggestionsButton.innerText = 'Suggestions';
    suggestionsButton.style.marginRight = '5px';
    suggestionsButton.style.display = 'block';
    suggestionsButton.style.marginBottom = '5px';
    suggestionsButton.addEventListener('click', function() {
        window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdJMt5hg_la2Knd2WevGC_ETTXjIx2FyQi6heBMaIHGomhVcA/viewform?usp=sf_link";
    });
    gamesContainer.appendChild(suggestionsButton);

    menuContainer.appendChild(gamesContainer);

    var menuToggleKey = ']';

    document.addEventListener('keydown', function(event) {
        if (event.key === menuToggleKey) {
            menuContainer.style.display = menuContainer.style.display === 'none' ? 'block' : 'none';
        }
    });

    document.body.appendChild(menuContainer);
}
