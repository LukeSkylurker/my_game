
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


