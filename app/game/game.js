window.onload = function() {
    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create , update : update});
    var player;
    var platforms;
    var cursors;
    var jumpButton;
    function preload () {
        game.stage.backgroundColor = '#85b5e1';
        game.load.crossOrigin = 'anonymous';
        game.load.spritesheet('player', 'images/chara.png',50,44,5);
        game.load.image('platform', 'images/platform.png');
    }
    function create () {
        createPlayer(game.add.sprite(250, 200, 'player'));
        platforms = game.add.physicsGroup();
        platforms.create(500, 150, 'platform');
        platforms.create(-200, 300, 'platform');
        platforms.create(400, 450, 'platform');
        platforms.setAll('body.immovable', true);
        cursors = game.input.keyboard.createCursorKeys();
        jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    }
    function update () {
        game.physics.arcade.collide(player, platforms);

        if(player.body.velocity.x < 0){
            player.body.velocity.x += 5;
        }else if(player.body.velocity.x > 0){
            player.body.velocity.x -= 5;
        }else{
            player.body.velocity.x = 0;
        }
        if (cursors.left.isDown)
        {
            //createPlayer(game.add.sprite(100, 200, 'playerMoveLeft'));
            player.body.velocity.x = -250;
        }
        else if (cursors.right.isDown)
        {
            //createPlayer(game.add.sprite(100, 200, 'playerMoveRight'));
            player.body.velocity.x = 250;
        }
        if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.down))
        {
            player.body.velocity.y = -400;
        }
    }

    function createPlayer(playerSprites){
        player = playerSprites;
        player.animations.add('walk');
        player.animations.play('walk', 10, true);
        game.physics.arcade.enable(player);
        player.body.collideWorldBounds = true;
        player.body.gravity.y = 500;
    }

};