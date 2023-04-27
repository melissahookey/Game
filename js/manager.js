let Manager = {
    setGameStart: function(classType) {
        this.resetPlayer(classType);
        this.setPreFight();
    },
    // health, mana, strength, agility, speed
    resetPlayer: function (classType) {
        switch (classType) {
            case "char 1":
                player = new Player(classType, 300, 0, 200, 100, 100);
                break;
            case "char 2":
                player = new Player(classType, 250, 50, 100, 300, 200);
                break;
            case "char 3":
                player = new Player(classType, 200, 100, 200, 250, 300);
                break;
            case "char 4":
                player = new Player(classType, 350, 0, 300, 100, 50);
                break;
        }
        let getInterface = document.querySelector(".interface");
        // add avatar image here
        getInterface.innerHTML = '<img src="x/x/' + classType.toLowerCase() + '.png" class="img-avatar"><div><h3>' + '</h3><p>Health: ' + player.health + '</p><p>Mana: ' + player.mana + '</p><p>Strength: ' + player.strength + '</p><p>Agility: ' + player.agility + '</p><p>Speed: ' + player.speed + '</p></div>';
    },
    setPreFight: function() {
        let getHeader = document.querySelector(" .header");
        let getActions = document.querySelector(" .actions");
        let getArena = document.querySelector(" .arena");
        getHeader.innerHTML = '<p>Task: Find an enemy</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="Manager.setFight()">Search for an enemy</a>';
        getArena.style.visability = "visable";
    },
    setFight: function() {
        let getHeader = document.querySelector(" .header");
        let getActions = document.querySelector(" .actions");
        let getEnemy = document.querySelector(" .enemy");
        let enemy00 = new Enemy("E1", 300, 0, 200, 100, 100);
        let enemy01 = new Enemy("E1", 250, 50, 100, 300, 200);
        let enemy02 = new Enemy("E1", 200, 100, 200, 250, 300);
        let enemy03 = new Enemy("E1", 350, 0, 300, 100, 50);
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
        console.log(chooseRandomEnemy);
        switch (classType) {
            case 0:
                enemy = E1;
                break;
            case 1:
                enemy = E2;
                break;
            case 2:
                enemy = E3;
                break;
            case 3:
                enemy = E4;
                break;
        } 
        getHeader.innerHTML = '<p>Task: Make a move</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
        // add image of enemies here
        getEnemy.innerHTML = <'img src=".../...' + enemy.enemyType.toLowerCase() + '.png" alt="' + enemy.enemyType + '"class="avatar"><div><h3>' + enemy.enemyType + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Mana: ' + enemy.mana + '</p>' + '</p><p>Strength: ' + enemy.strength + '</p>' + '</p><p>Agility: ' + enemy.agility + '</p>' + '</p><p>Speed: ' + enemy.speed + '</p></div>';
    }
    
}