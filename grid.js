
 $( ".exit-top" ).on( "click", function() {
	if ($('.exit-top').hasClass('highlight'))
  	$('.dialogue-box').show();
    $('.dialogue-exit-top').show();
    	    });
 $( ".exit-bottom" ).on( "click", function() {
	if ($('.exit-bottom').hasClass('highlight'))
  	$('.dialogue-box').show();
    $('.dialogue-exit-bottom').show();
    	    });
 $( ".maple-tree" ).on( "click", function() {
	if ($('.maple-tree').hasClass('highlight'))
  	$('.dialogue-box').show();
    $('.dialogue-maple-tree').show();
    	    });
 $( ".quest-giver" ).on( "click", function() {
	if ($('.quest-giver').hasClass('highlight'))
  	$('.dialogue-box').show();
    $('.dialogue-quest-giver').show();
    	    });
$( ".iron-ore" ).on( "click", function() {
	if ($('.iron-ore').hasClass('highlight'))
  	$('.dialogue-box').show();
    $('.dialogue-iron-ore').show();
    	    });
$( ".water, .water-bottom-right, .water-bottom-left, .water-top-right, .water-top-left, .water-middle" ).on( "click", function() {
	if ($(this).hasClass('highlight'))
  	$('.dialogue-box').show();
    $('.dialogue-water').show();
    	    });
$( ".cancel" ).on( "click", function() {
	$('.dialogue-all').hide();
});


$("#choice-exit-top" ).on( "click", function() {
  $('.nothing1').remove();
  $('.dialogue-box').remove();
    $('.board-squares-contain').load('grid-2.html');
    $('.dialogue-contain').load('dialogue-box-page.html');
    up = 233;
    $('#square233').addClass('char-back');
          });
$( "#choice-exit-bottom" ).on( "click", function() {
  $('.nothing2').remove();
  $('.dialogue-box').remove();
    $('.board-squares-contain').load('grid-1.html');
    $('.dialogue-contain').load('dialogue-box-page.html');
    up = 24;
    $('#square24').addClass('char');
          });
$( "#harvest-maple-wood" ).on( "click", function() {
  mapleWood++;
  $('.dialogue-all').hide();
  $('.report-maple-wood').html(mapleWood);
  $('.running-dialogue').prepend('<p>you harvested 1 log of maple wood</p>');
});
$( "#harvest-iron-ore" ).on( "click", function() {
  ironOre++;
  $('.dialogue-all').hide();
  $('.report-iron-ore').html(ironOre);
  $('.running-dialogue').prepend('<p>you harvested 1 ore of iron</p>');
});
$( "#harvest-bass-fish" ).on( "click", function() {
  bassFish++;
  $('.dialogue-all').hide();
  $('.report-bass-fish').html(bassFish);
  $('.running-dialogue').prepend('<p>you harvested 1 fish</p>');
});
$( "#take-quest" ).on( "click", function() {
  $('.dialogue-all').hide();
  $('.running-dialogue').prepend('<p>you took a quest!</p>');
  randomItems();
});

//everything fish related

              function createProgressbar(id, duration, callback) {
                // We select the div that we want to turn into a progressbar
                var progressbar = document.getElementById(id);
                progressbar.className = 'progressbar';
                // We create the div that changes width to show progress
                var progressbarinner = document.createElement('div');
                progressbarinner.className = 'inner';
                // Now we set the animation parameters
                progressbarinner.style.animationDuration = duration;
                // Eventually couple a callback
                if (typeof(callback) === 'function') {
                  progressbarinner.addEventListener('animationend', callback);
                }
                // Append the progressbar to the main progressbardiv
                progressbar.appendChild(progressbarinner);
                // When everything is set up we start the animation
                progressbarinner.style.animationPlayState = 'running';
              }
              var fishprobsA = [1000, 1500, 2000, 2200, 2500, 3000];
              var fishrandom1 = fishprobsA[Math.floor(Math.random() * fishprobsA.length)];
              $('.cast').on('click', function() {
                $('.cast').hide();
                $('#fishing-result').empty();
                createProgressbar('progressbar4', '6s', function() {
                  $('#fishing-result').prepend('<img src="grid-pic/fish-hook.png" width="50px">');
                  $('#fishing-result').prepend('<p>you did not catch a fish</p>');
                  $('#progressbar4').empty();
                  $('#progressbar4').removeClass();
                $('.cast').show();       
                });
               });
              $('.cast').on('click', function() {
               setTimeout(function(){
                       $('.pull').addClass('fish-bite-alert');
                      }, fishrandom1);
              });
              setInterval(function(){
                      if ($('.pull').hasClass('fish-bite-alert'))
                       $('.pull').removeClass('fish-bite-alert');
                      }, 1000);
              $('.pull').on('click', function() {
                if ($('.pull').hasClass('fish-bite-alert')) {
                $('#fishing-result').prepend('<p>YOU CAUGHT A FISH!</p>');
                $('#fishing-result').prepend('<img src="grid-pic/fish-bite.png" width="100px">');
                bassFish++;
                $('.report-bass-fish').html(bassFish);
                $('.running-dialogue').prepend('<p>you harvested 1 fish</p>');
                $('.pull').removeClass('fish-bite-alert');
                $('#progressbar4').empty();
                  $('#progressbar4').removeClass();
                  $('.cast').show();
              }
                else {
                $('.pull').removeClass('fish-bite-alert');
                $('#progressbar4').empty();
                  $('#progressbar4').removeClass();
                $('#fishing-result').prepend('<p>you did not catch a fish</p>');
                $('#fishing-result').prepend('<img src="grid-pic/fish-hook.png" width="50px">');
                $('.cast').show();
                }
              });