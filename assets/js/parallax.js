// Section 3
$(window).scroll(function() {
    var section3 = $('.s3');
    var sectionContent3 = $('.s3-header');
    var sectionContent3_span = $('.s3-header-span');
    var sectionTop = section3.offset().top;
    var windowHeight = $(window).height();
    var scrollTop = $(window).scrollTop();
    var fixedAdd = 300;

    if (scrollTop - fixedAdd + windowHeight >= sectionTop) {
      sectionContent3.css('visibility', 'visible');
      sectionContent3.animate({ opacity: 1, bottom: 0 }, 500);

     sectionContent3_span.css('visibility', 'visible');
     sectionContent3_span.animate({opacity:1}, 500);
    }
});

// Section 5
  $(window).scroll(function() {
    var section5 = $('.s5');
    var sectionContent5 = $('.s5-header');
    var sectionTop = section5.offset().top;
    var windowHeight = $(window).height();
    var scrollTop = $(window).scrollTop();
    var fixedAdd = 300;
    
    
    
    if (scrollTop - fixedAdd + windowHeight >= sectionTop) {
      sectionContent5.css('visibility', 'visible');
      sectionContent5.animate({ opacity: 1, bottom:0 }, 500);
    }
  });


//Section 4
$(window).scroll(function() {
    var section = $('.s4');
    var sectionContent = $('.s4-cont');
    var sectionTop = 2200;
    var windowHeight = $(window).height();
    var scrollTop = $(window).scrollTop();
    var fixedAdd = 500;
    
   
    if (scrollTop - fixedAdd + windowHeight >= sectionTop) {
      sectionContent.fadeIn();
    }
});

// Section 6.1 

$(window).scroll(function() {
  var section = $('.s6-odd-1');
  var sectionBtn = $('.s6-btn-odd-1');
  var sectionTop = section.offset().top;
  var windowHeight = $(window).height();
  var scrollTop = $(window).scrollTop();
  var fixedAdd = 500;
  
  console.log(sectionTop);
  if (scrollTop - fixedAdd + windowHeight >= sectionTop) {

  
    section.css('visibility', 'visible');
    section.animate({ right:0 }, 500);
    section.animate({opacity: 1}, 500);
    
  }
});

// Section 6.2

$(window).scroll(function() {
  var section = $('.s6-even-1');
  var sectionBtn = $('.s6-btn-even-1');
  var sectionTop = section.offset().top;
  var windowHeight = $(window).height();
  var scrollTop = $(window).scrollTop();
  var fixedAdd = 500;
  
  console.log(sectionTop);
  if (scrollTop - fixedAdd + windowHeight >= sectionTop) {
    section.css('visibility', 'visible');
    section.animate({ left:0 }, 500);
    section.animate({opacity: 1}, 500);
  }
});

// Section 6.3

$(window).scroll(function() {
  var section = $('.s6-odd-2');
  var sectionBtn = $('.s6-btn-odd-2');
  var sectionTop = section.offset().top;
  var windowHeight = $(window).height();
  var scrollTop = $(window).scrollTop();
  var fixedAdd = 500;
  
  console.log(sectionTop);
  if (scrollTop - fixedAdd + windowHeight >= sectionTop) {
    section.css('visibility', 'visible');
    section.animate({ right:0 }, 500);
    section.animate({opacity: 1}, 500);
  }
});

// Section 6.4

$(window).scroll(function() {
  var section = $('.s6-even-2');
  var sectionBtn = $('.s6-btn-even-2');
  var sectionTop = section.offset().top;
  var windowHeight = $(window).height();
  var scrollTop = $(window).scrollTop();
  var fixedAdd = 500;
  
  console.log(sectionTop);
  if (scrollTop - fixedAdd + windowHeight >= sectionTop) {
    section.css('visibility', 'visible');
    section.animate({ left:0 }, 500);
    section.animate({opacity: 1}, 500);
  }
});


// Section 6.5

$(window).scroll(function() {
  var section = $('.s6-odd-3');
  var sectionBtn = $('.s6-btn-odd-3');
  var sectionTop = section.offset().top;
  var windowHeight = $(window).height();
  var scrollTop = $(window).scrollTop();
  var fixedAdd = 500;
  
  console.log(sectionTop);
  if (scrollTop - fixedAdd + windowHeight >= sectionTop) {
    section.css('visibility', 'visible');
    section.animate({ right:0 }, 500);
    section.animate({opacity: 1}, 500);
  }
});

// Section 7
$(window).scroll(function() {
  var section = $('.s7');
  var sectionContent5 = $('.s7-header');
  var sectionTop = section.offset().top;
  var windowHeight = $(window).height();
  var scrollTop = $(window).scrollTop();
  var fixedAdd = 300;
  
  
  
  if (scrollTop - fixedAdd + windowHeight >= sectionTop) {
    sectionContent5.css('visibility', 'visible');
    sectionContent5.animate({ opacity: 1, bottom:0 }, 500);
  }
});

//Section 8
$(window).scroll(function() {
  var section = $('.s8');
  var sectionContent = $('.s8-header');
  var sectionTop = section.offset().top;
  var windowHeight = $(window).height();
  var scrollTop = $(window).scrollTop();
  var fixedAdd = 500;
  
 
  if (scrollTop - fixedAdd + windowHeight >= sectionTop) {
    sectionContent.css('visibility', 'visible');
    sectionContent.animate({ opacity: 1 }, 500);
  }
});
