// Font Size Increase bar 

    $(document).ready(function ()  {
        $("#range-slider").on("input change", function () {
            $(".text").css("font-size", $(this).val() + "px");
            $("body").css("font-size", $(this).val() + "px");
            //span value
            $(".value").text($(this).val() + "px");
        });
    });

    

$(document).ready(function () {
    $("home-tab").hover(function() {
        $(this).css("background-color", "black")

    });
});

// pop up box with learn more button

$('#show-content').on('click' , function() {
    $('#page-section').fadeToggle();
    
    
    if ($('#show-content').text() == 'Learn More') {
      $('#show-content').text('Hide')
    } else {
      $('#show-content').text('Learn More')
    }
  });
  $('#page-section').hide();

 
 // resource page magnefication on pictures

 $(document).ready(function() {
    $('.res-buttons').click(function(){
        $(this).addClass('active').siblings().removeClass('active');

        var filter = $(this).attr('data-filters')

        if(filter == 'all'){
            $('.images').show(400);
        } else{
            $('.images').not('.'+filter).hide(200);
            $('.images').filter('.'+filter).show(400);

        }
    });

    $('.resources').magnificPopup({
        delegate:'a',
        type:'image',
        gallery: {
            enabled:true

        }


    });
 });

// Automatic Date and Time Clock

 function updateClock() {
    var now = new Date();
    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "AM";

        if(hou == 0){
          hou = 12;
        }
        if (hou > 12){
          hou = hou - 12;
          pe = "PM";
        }

        Number.prototype.pad = function(digits) {
          for(var n = this.toString(); n.length < digits; n = 0 + n);
          return n;
        }

        var months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sunday"] 
        var ids = ["dayname", "month", "daynum", "year", "hour", "minute", "second", "period"]
        var values = [week[dname], months[mo], dnum, yr, hou.pad(2), min.pad(2), sec.pad(2), pe];
        for(var i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}       

function initClock() {
  updateClock();
  setInterval(() => updateClock(), 1000)
};

initClock();