$(document).on('ready',function(){
  $(".foo-hamburger").on('click',function(){
    $(".navmobile-wrapper").toggle();
  });
  //$(window).scrollTo(/*can put to content inside of section*/, 250);
  // get height of .nav-wrapper (including any margins)
  var offset = $('.navdesktop-wrapper .navmobile-wrapper').outerHeight(true);
  console.log(offset);

  // add margin-top to our body
  $('body').css('margin-top', offset);
    $('.navdesktop-wrapper .navmobile-wrapper').outerHeight(true);


  $('.navmobile-wrapper a').on('click',function(event){
    //scroll to the page associated with 'this' link
    console.log(event);

    event.preventDefault();

    var pageToScrollTo = $(this).attr('href');
    //console.log(pageToScrollTo)
    // use pageToScrollTo in a .scrollto function

    $(window).scrollTo(/*can put to content inside of section*/pageToScrollTo, 800, {offset: -offset});

  });
  $('.navdesktop-wrapper a').on('click',function(event){
    //scroll to the page associated with 'this' link
    console.log(event);

    event.preventDefault();

    var pageToScrollTo = $(this).attr('href');
    //console.log(pageToScrollTo)
    // use pageToScrollTo in a .scrollto function

    $(window).scrollTo(/*can put to content inside of section*/pageToScrollTo, 800, {offset: -offset});

  });
})
