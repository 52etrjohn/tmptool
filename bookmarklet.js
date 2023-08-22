javascript:(function() {
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
    titleElement.innerText = "Tmp's Tools"; // Changed name here
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

    var toolsContainer = document.createElement('div');
    toolsContainer.style.marginTop = '20px';
    toolsContainer.style.textAlign = 'center';

    var toolsTitle = document.createElement('h4');
    toolsTitle.innerText = 'Tools';
    toolsTitle.style.marginBottom = '10px';
    toolsContainer.appendChild(toolsTitle);

    var tools = [
        { name: 'Tab Cloaker', code: 'var newTitle = prompt("Enter new title for the tab:"); if (newTitle) document.title = newTitle;' },
        { name: 'Old SU1 Tool (Some features might not work)', code: 'const scriptUrl = "https://raw.githubusercontent.com/securlyunblocker/SU1/main/main.js";\nconst loadScript = async (url) => {\n const response = await fetch(url);\n const script = await response.text();\n eval(script);\n};\nloadScript(scriptUrl);' },
        { name: 'Point Blank Swap Disabler', code: 'document = window.document; alert("This has to be ran on an extension about:blank page"); document.write("<html><body><h1>[Point Blank Swap Launcher]</h1><center><h1>---Disabling---</h1></center><center><button id=\'kill\'>Soft Disable</button></center><center><button id=\'disable\'>Hard Kill</button></center><center><button id=\'revkill\'>Revert Hard Kill</button></center><center><h1>--Extension Sites--</h1></center><center><h4>This is where you find the pages you are supposed to run this bookmarklet Choose your blocker below, if it says blocked by chrome, reload the page then click the link</h4><button id=\'blocksi\'>Blocksi</button><button id=\'classrom\'>Securly Classroom</button><button id=\'curly\'>Securly</button><button id=\'gogog\'>GoGuardian</button><button id=\'iBoss\'>iBoss</button><button id=\'umbrella\'>Cisco Umbrella</button><center><h1> ---Scripts--- </h1></center><center><button id=\'goofy\'>Display Goofy Alert</button><button id=\'aboutB\'>A.B.C Cloaker</button></center><center><button id=\'securly\'>Custom Securly Page</button><button id=\'classroom\'>Custom Securly Classroom page</button></center><center><center><h4>Note: Some extensions do not allow eval to be ran, which means running your own code won\'t work. Instead, try the other scripts above</h4></center><textarea id=\'code\' placeholder=\'Put Code Here\'></textarea></center><center><button id=\'run\'>Run Code</button></center></body></html>");' }
    ];

    for (var i = 0; i < tools.length; i++) {
        var toolButton = document.createElement('button');
        toolButton.innerText = tools[i].name;
        toolButton.style.marginRight = '5px';
        toolButton.style.display = 'block';
        toolButton.style.marginBottom = '5px';
        toolButton.addEventListener('click', new Function(tools[i].code));
        toolsContainer.appendChild(toolButton);
    }

    menuContainer.appendChild(toolsContainer);

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
       
