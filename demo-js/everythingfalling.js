

    function fallingWood() {
    
        var $woodflakes = $(), qt = 1;
        
        for (var i = 0; i < qt; ++i) {
            var $woodflake = $('<div class="smart snowflakes"></div>');
            $woodflake.css({
                'left': (Math.random() * $('#site').width()) + 'px',
                'top': (- Math.random() * $('#site').height()) + 'px'
            });
            // add this snowflake to the set of snowflakes
            $woodflakes = $woodflakes.add($woodflake);
        }
        $('#snowZone').prepend($woodflakes);
    
        $woodflakes.animate({
            top: "100%",
        }, Math.random() + 10000, function(){
            $(this).remove();
            // run again when all 20 snowflakes hit the floor
            if (--qt < 1) {
                fallingWood();
            }
        });
    }
  




    function fallingOre() {
    
        var $oreflakes = $(), qt = 1;
        
        for (var i = 0; i < qt; ++i) {
            var $oreflake = $('<div class="smarter otherflakes"></div>');
            $oreflake.css({
                'left': (Math.random() * $('#site').width()) + 'px',
                'top': (- Math.random() * $('#site').height()) + 'px'
            });
            // add this snowflake to the set of snowflakes
            $oreflakes = $oreflakes.add($oreflake);
        }
        $('#snowZone').prepend($oreflakes);
    
        $oreflakes.animate({
            top: "100%",
        }, Math.random() + 8000, function(){
            $(this).remove();
            // run again when all 20 snowflakes hit the floor
            if (--qt < 1) {
                fallingOre();
            }
        });
    }
   



    function fallingBrick() {
    
        var $brickflakes = $(), qt = 1;
        
        for (var i = 0; i < qt; ++i) {
            var $brickflake = $('<div class="smartest bestflakes"></div>');
            $brickflake.css({
                'left': (Math.random() * $('#site').width()) + 'px',
                'top': (- Math.random() * $('#site').height()) + 'px'
            });
            // add this snowflake to the set of snowflakes
            $brickflakes = $brickflakes.add($brickflake);
        }
        $('#snowZone').prepend($brickflakes);
    
        $brickflakes.animate({
            top: "100%",
            }, Math.random() + 9000, function(){
            $(this).remove();
            // run again when all 20 snowflakes hit the floor
            if (--qt < 1) {
                fallingBrick();
            }
        });
    }
    


// Snow Falling
    function bestGold() {
    
        var $goldflakes = $(), qt = 1;
        
        for (var i = 0; i < qt; ++i) {
            var $goldflake = $('<div class="goldsmart goldflakes"></div>');
            $goldflake.css({
                'left': (Math.random() * $('#site').width()) + 'px',
                'top': (- Math.random() * $('#site').height()) + 'px'
            });
            // add this snowflake to the set of snowflakes
            $goldflakes = $goldflakes.add($goldflake);
        }
        $('#snowZone').prepend($goldflakes);
    
        $goldflakes.animate({
            top: "100%",
            }, Math.random() + 9000, function(){
            $(this).remove();
            // run again when all 20 snowflakes hit the floor
            if (--qt < 1) {
                bestGold();
            }
        });
    }
    



    function fallingGoblin() {
    
        var $goblinflakes = $(), qt = 1;
        
        for (var i = 0; i < qt; ++i) {
            var $goblinflake = $('<div class="goblinsmart goblindownsmart goblinflakes">');
            $goblinflake.css({
                'left': (Math.random() * $('#site').width()) + 'px',
                'top': (- Math.random() * $('#site').height()) + 'px'
            });
            // add this snowflake to the set of snowflakes
            $goblinflakes = $goblinflakes.add($goblinflake);
        }
        $('#snowZone').prepend($goblinflakes);
    
        $goblinflakes.animate({
            top: "100%",
            }, Math.random() + 20000, function(){
            $(this).remove();
            // run again when all 20 snowflakes hit the floor
            if (--qt < 1) {
                fallingGoblin();
            }
        });
    }
    

    function startAllFalling() {
      fallingWood();
      fallingOre();
      fallingBrick();
      bestGold();
      fallingGoblin();
}
