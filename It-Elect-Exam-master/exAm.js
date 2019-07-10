var thingsArray = [],
    thingsCounter = 0,
    day = true
  ;



thingsArray = ["Applications", "Websites","Graphics","Video","Audio","Media"];


/* Things I create text
======================================================= */

function setCreateText(){
  $("#things-display").fadeOut(5);
  $("#things-display").fadeIn(500).html(thingsArray[thingsCounter]).delay(1000).fadeOut(500);
  thingsCounter++;
  setInterval(function(){ 
      $("#things-display").fadeIn(500).html(thingsArray[thingsCounter]).delay(1000).fadeOut(500);
      thingsCounter++;
      if (thingsCounter >= thingsArray.length) {
          thingsCounter = 0;
      }
  }, 2200);
}

/* Parallax NYC
======================================================= */

function parallaxNYC() {
  $("#top-left-hover").hover(function(){
    $("#port").css({
      left: "0%",
      backgroundPosition: "top left"
    });
  }, function(){
    $("#port").css({
      left: "-10%",
      backgroundPosition: "center center"
    });
  });
  
  $("#top-middle-hover").hover(function(){
    $("#port").css("background-position", "top center");
  }, function(){
    $("#port").css("background-position", "center center");
  });
  
  $("#top-right-hover").hover(function(){
    $("#port").css({
      left: "-20%",
      backgroundPosition: "top right"
    });
  }, function(){
    $("#port").css({
      left: "-10%",
      backgroundPosition: "center center"
    });
  });
  
  $("#center-left-hover").hover(function(){
    $("#port").css({
      left: "0%",
      backgroundPosition: "center center"
    });
  }, function(){
    $("#port").css({
      left: "-10%",
      backgroundPosition: "center center"
    });
  });
  
  $("#center-right-hover").hover(function(){
    $("#port").css({
      left: "-20%",
      backgroundPosition: "center center"
    });
  }, function(){
    $("#port").css({
      left: "-10%",
      backgroundPosition: "center center"
    });
  });
  
  $("#bottom-left-hover").hover(function(){
    $("#port").css({
      left: "0%",
      backgroundPosition: "bottom left"
    });
  }, function(){
    $("#port").css({
      left: "-10%",
      backgroundPosition: "center center"
    });
  });
  
  $("#bottom-middle-hover").hover(function(){
    $("#port").css("background-position", "bottom center");
  }, function(){
    $("#port").css("background-position", "center center");
  });
  
  $("#bottom-right-hover").hover(function(){
    $("#port").css({
      left: "-20%",
      backgroundPosition: "bottom right"
    });
  }, function(){
    $("#port").css({
      left: "-10%",
      backgroundPosition: "center center"
    });
  });
  
  
  
}



/* Responsive Sizing
======================================================= */

function sizeElements() {
  
  var wHeight = window.innerHeight;
  if (wHeight < 420) {
    wHeight = 420;
  }
  $("#connect").css({
    height: wHeight
  });
  $("#connect-links-top").css({
    top: wHeight / 3 
  });
  $("#connect-links-bottom").css({
    top: wHeight / 3 * 2
  });
}

/* Animate Scroll
======================================================= */

$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 750);
      
      $('#nav-drop').prop('checked', false);
      
      return false;
    }
  }
});

/* Is it on Screen
======================================================= */

function isElementPartiallyInViewport(el, offset) {
  if(!offset){
   var offset = 2
  }
  if (el === false) {
    return false;
  }
  el = el[0];
  var rect = el.getBoundingClientRect();

  var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
  var windowWidth = (window.innerWidth || document.documentElement.clientWidth);

  var vertInView = (rect.top <= windowHeight - windowHeight / offset) && ((rect.top + rect.height - windowHeight / offset) >= 0);
  var horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

  return (vertInView && horInView);
}

/* move sun-moon
======================================================= */

window.setInterval(function(){
  if(day){
    $("#sun-moon").attr('src', 'http://www.kurtpetrek.com/portfolio/images/moon.svg');
    day = false;
  } else {
    $("#sun-moon").attr('src', 'http://www.kurtpetrek.com/portfolio/images/sun.svg');
    day = true;
  }
  
}, 15000);

/* Work Switches
======================================================= */

function switchTiles(el, section){

  $(el).change(function() {
      if($(el).prop('checked')){
        $(section).parent().css({
          maxHeight: "100%",
          maxWidth: "100%",
          display: "block",
          margin: "auto",
          transition: "all 1s"
        });
        $(section).parent().parent().css({
          overflow: "visible"
        });
      } else {
        $(section).parent().css({
          maxHeight: "0",
          maxWidth: "0",
          display: "block",
          margin: "auto",
          transition: "all 1s"
        });
        $(section).parent().parent().css({
          overflow: "hidden"
        });
      }
  });
  
}

switchTiles('#work-apps',".app");
switchTiles('#work-sites',".site");
switchTiles('#work-graphics',".graphic");
switchTiles('#work-video',".video");


/* Window Resize listener
======================================================= */

$( window ).resize(function() {
  
  sizeElements();
  
});

/* Window Scroll listener
======================================================= */

$(window).scroll(function() {
  
  //Sticky Nav Bar Section
  if($(window).scrollTop() > $("#banner-container").height()){
    $("#main-nav").css({
      position: "fixed",
      top: "0px",
      width: "100%"
    });
    $("#main-content").css({
      paddingTop: "60px"
    });
  } else {
    $("#main-nav").css({
      position: "static"
    });
    $("#main-content").css({
      paddingTop: "0px"
    });
  }
  
  if(isElementPartiallyInViewport($("#about"))){
    $("#main-nav ul li:nth-child(3) a").css({
      color: '#A6C3DD'
    });
  } else {
    $("#main-nav ul li:nth-child(3) a").css({
      color: '#fff'
    });
  }
  
  if(isElementPartiallyInViewport($("#work"))){
    $("#main-nav ul li:nth-child(2) a").css({
      color: '#A6C3DD'
    });
  } else {
    $("#main-nav ul li:nth-child(2) a").css({
      color: '#fff'
    });
  }
  
  if(isElementPartiallyInViewport($("#connect"))){
    $("#main-nav ul li:nth-child(1) a").css({
      color: '#A6C3DD'
    });
  } else {
    $("#main-nav ul li:nth-child(1) a").css({
      color: '#fff'
    });
  }
  
});

function init() {
  sizeElements();
  setCreateText();
  parallaxNYC();
}


/* Document Ready listener
======================================================= */

$(function() {
  "use strict";
  init();
});
