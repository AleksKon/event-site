/*!
 * jQuery ClassyCountdown
 * www.class.pm
 *
 * Written by Marius Stanciu - Sergiu <marius@class.pm>
 * Licensed under the MIT license www.class.pm/LICENSE-MIT
 * Version 1.0.0
 *
 */                                     

$(function() {
                                            
    $('#countdown2').ClassyCountdown({
            end: '1495428654',
            now: Math.round(new Date().getTime()/1000.0),
            labels: true,
            style: {
                element: "",
                textResponsive: .5,
                days: {
                    gauge: {
                        thickness: .01,
                        bgColor: "rgba(0,0,0,0.05)",
                        fgColor: "#1abc9c"
                    },
                    textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#656D78;'
                },
                hours: {
                    gauge: {
                        thickness: .01,
                        bgColor: "rgba(0,0,0,0.05)",
                        fgColor: "#2980b9"
                    },
                    textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#656D78;'
                },
                minutes: {
                    gauge: {
                        thickness: .01,
                        bgColor: "rgba(0,0,0,0.05)",
                        fgColor: "#8e44ad"
                    },
                    textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#656D78;'
                },
                seconds: {
                    gauge: {
                        thickness: .01,
                        bgColor: "rgba(0,0,0,0.05)",
                        fgColor: "#f39c12"
                    },
                    textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#656D78;'
                }

            },
            onEndCallback: function() {
                console.log("Time out!");
            }
        });
});
                               

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();