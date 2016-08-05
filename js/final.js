//JQUERY FOR SLIDING NAVIGATION (PARALLAX)--->   
$(function() {
  $('a[href*=#]').each(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname
    && this.hash.replace(/#/,'') ) {
      var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
      var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
       if ($target) {
         var targetOffset = $target.offset().top;

// JQUERY CLICK FUNCTION REMOVE AND ADD CLASS "ACTIVE" + SCROLL TO THE #DIV (PARALLAX)--->   
         $(this).click(function() {
            $("nav li a").removeClass("active");
            $(this).addClass('active');
           $('html, body').animate({scrollTop: targetOffset}, 1000);
           return false;
         });
      }
    }
  });

//JQUERY FOR HEADER/NAV SCROLL
    $(".nav a").smoothScroll({
            offset: -$("nav").outerHeight()
        });

//------JQUERY LEARN MORE TOGGLE--------//
    $('div#more').hide();
        var $moreButton= $('button#moreBtn');

        $moreButton.on('click', function(){
            var $this=$(this);
            $this.next().slideToggle(700);
            $this.text( $this.text() == 'More' ? "Less" : "More");      
        });

//------JSON CODE--------//
 function seeSchedule(){
    $.getJSON('data/dataTalks.json').done( function(data){

        var newContent='';

        for (var i = 0; i < data.talks.length; i++){

        newContent += '<div id="seeTalk">';
        newContent += '<h3>'+ data.talks[i].title +'</h3>';
        newContent += '<p>'+ data.talks[i].speaker +'</p>';
        newContent += '<p>' + data.talks[i].date + '</p>';
        newContent += '</div>';
        }

        $('#seeTalk').html(newContent);

       var newContent='';

        for (var i = 0; i < data.tastings.length; i++){

        newContent += '<div id="seeTastings">';
        newContent += '<h3>'+ data.tastings[i].title +'</h3>';
        newContent += '<p>' + data.tastings[i].date + '</p>';
        newContent += '</div>';
        }
        $('#seeTastings').html(newContent); 
    });
}

seeSchedule();

$('div#seeTalk').hide();
$('div#seeTastings').hide();

var $button = $('#talksSch,#tastingsSch');

$button.on('click', function(){
    var $this = $(this);
    $this.next().slideToggle(800);
    $this.text( $this.text() == "See Schedule" ? "Hide" : "See Schedule");
});       


});//End of ready function

//------Form: Choose pass--------//
var selectPass = document.getElementById('dropdown');
var passMsg  = document.getElementById('description');


function passHint() {                                 
  var pack = this.options[this.selectedIndex].value;     
  if (pack === 'friday') {                             
    passMsg.innerHTML = 'Access to all events, 9am-6pm Friday!';
  } 
  if (pack === 'saturday') {                           
    passMsg.innerHTML = 'Access to all events, 9am-6pm Saturday!';
  }
  if (pack === 'sunday') {                            
    passMsg.innerHTML = 'Access to all events, 9am-6pm Sunday!';
  }
  if (pack === 'threeDay') {                             
    passMsg.innerHTML = 'Access to all events for the duration of the festival';
  }
  if(pack=== 'select'){
     passMsg.innerHTML =' ';
  }
}

selectPass.addEventListener('change', passHint, false);

//------GOOGLE MAPS--------//
function init(){

    // BASIC MAP SETTINGS
    var mapNYCOptions = {
        center: new google.maps.LatLng(40.724708, -73.995288),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 15,
        scrollwheel: false,

        //Custom Controls
    streetViewControl:false,
    overviewMapControl:false,
    mapTypeControl: true,
    mapTypeControlOptions:{
    	position:google.maps.ControlPosition.TOP_RIGHT,
    	style:google.maps.MapTypeControlStyle.DROPDOWN_MENU
    },
    zoomControl:true,
    zoomControlOptions:{
    	style:google.maps.ZoomControlStyle.LARGE,
    },
    scaleControl:true,
    scaleControlOptions:{
    	position:google.maps.ControlPosition.RIGHT_BOTTOM

    },
        //Styling
    	styles:[
			{
				stylers:[
					{hue: '#787979'},
					{saturation: -50}
			]
			}, {
				featureType: 'neighborhood', 
				elementType: 'labels', 
				stylers:[
					{visibility: 'on'}
				]
			},{
				featureType: 'water', 
				elementType: 'geometry',
				stylers: [
					{hue: '#030807'},
				]
			},{
				featureType: 'road', 
				elementType: 'labels',
				stylers: [
					{visibility: 'on'},
					{saturation: 5}
				]
			},{
				featureType: 'road', 
				elementType: 'geometry',
				stylers: [
					{visibility: 'simplified'},
					{lightness: 50}
				]
			},
		]
    }

    //Markers
    var nyc = new google.maps.Map(document.getElementById('googleMap'), mapNYCOptions);
    
    var locations = [
    		['Cha-An <br> 230 East 9th St', 40.729444, -73.988137],
            ['Whole Foods LES <br> 95 Houston St', 40.723811, -73.992352],
            ['The Puck Building <br> 295 Lafayette St', 40.724708, -73.995288],
            ['Tasting Table Test Kitchen <br> 450 Broome St', 40.722251, -74.000395]

    ];
    var infowindow = new google.maps.InfoWindow({
        content: ''
    });
    for (var i=0; i<locations.length; i++) {
    	var location = locations[i];
    	var marker = new google.maps.Marker({
            position: new google.maps.LatLng (location[1],location[2]),
            map: nyc,
            title: location[0],
            icon: 'img/mapIcon.png'
        });
     	google.maps.event.addListener(marker, 'click', function () {
            infowindow.setContent('<p>' + this.title + '</p>');
            infowindow.open(nyc, this);
        });
    }
}

function loadScript(){
    var script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?sensor=false&callback=init'; //callsback the function created above
    document.body.appendChild(script);
}

window.onload = loadScript;

//

