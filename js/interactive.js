$(document).ready(function() {
   $(document).scroll(function() {
     $("header").css("background-position","50% " + ($(this).scrollTop() / 2) + "px");
   });

  $("#overlay, #photo-main, #photo").click(function() {
     $("#main-container").css({'visibility':'hidden', 'z-index':-9 });
     $("#photo").attr('src','');
   });

   $("a.photo").click(function() {
     console.log('hier');
     show_image($(this).attr('id'));
     return false;
   });

   $("#left, #right").click(function(e) { e.stopPropagation(); });
});

function show_image(what) {
    var data = photo_data[what];

    file = 'imgs/' + data.foto;
    html = '<h2>' +data.titel+'</h2>';
    $("#photo").attr('src', file);
    $("#photo-data").html(html);

    $("#comments").html(data.beschrijving);
    $("#main-container").css({'visibility':'visible', 'z-index':9});
  }