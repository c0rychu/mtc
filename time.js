//Modified from https://codepen.io/anon/pen/PxKEWo
$(document).ready(function() {
        $(window).scroll(function(e){
            var scrollTop = $(window).scrollTop();
            var docHeight = $(document).height();
            var winHeight = $(window).height();
            var scrollPercent = (scrollTop) / (docHeight-winHeight );
            var HR = Math.round(scrollPercent*48%23);
            var cst = moment(HR+"00", "hmm").tz( "Asia/Taipei");

           // get the zone offsets for this time, in minutes
            var CSToffset = moment().tz("Asia/Taipei").utcOffset(); 
            var JSToffset = moment().tz("Asia/Tokyo").utcOffset();
            var CERNoffset = moment().tz("Europe/Zurich").utcOffset();
            var LHOoffset = moment().tz("America/Los_Angeles").utcOffset();
            var LLOoffset = moment().tz("America/Chicago").utcOffset();


            $('#CST').html(cst.format("HH:mm") +" "+ moment.tz.zone("Asia/Taipei").abbr(moment()));
            var jst = cst.clone();
            $('#JST').html(jst.add((JSToffset-CSToffset), 'm').format("HH:mm") +" "+ moment.tz.zone("Asia/Tokyo").abbr(moment())); 
            var cern = cst.clone();
            $('#CERN').html(cern.add((CERNoffset-CSToffset), 'm').format("HH:mm") +" "+ moment.tz.zone("Europe/Zurich").abbr(moment()));
            var lho = cst.clone();
            $('#LHO').html(lho.add((LHOoffset-CSToffset), 'm').format("HH:mm") +" "+ moment.tz.zone("America/Los_Angeles").abbr(moment()));
            var llo = cst.clone();
            $('#LLO').html(llo.add((LLOoffset-CSToffset), 'm').format("HH:mm") +" "+ moment.tz.zone("America/Chicago").abbr(moment()));

            repositionLabel();
        });

        $(window).resize(function(){
            repositionLabel();
        });

        function repositionLabel() {
            $('#scrollPercentLabel').css({
                position:'fixed',
                left: ($(window).width() - $('#scrollPercentLabel').outerWidth()) / 2,
                top: (($(window).height() - $('#scrollPercentLabel').outerHeight()) / 2) - $('#scrollPercentLabel').height()
            });
        }

        repositionLabel();
    });

