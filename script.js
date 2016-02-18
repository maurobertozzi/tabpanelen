$('.knoppen').each( function() {
    var thisbutton = $(this);
    var activebutton = thisbutton.find('li.actief');
    var link = activebutton.find('a');
    var activpanel = $(link.attr('href'));
    
    thisbutton.on('click', 'a', function(e) {
        e.preventDefault();
        var link = $(this);
//        alert(link.attr('href'));
        var beoogdId = this.hash;
//        alert(beoogdId);
        
        if(beoogdId && !link.parent().is('.actief')){
            activpanel.removeClass('actief');
            activebutton.removeClass('actief');
            
            activpanel = $(beoogdId).addClass('actief');
            activebutton = link.parent().addClass('actief');
        }
    })
    
});

// unobrusive weghalen van niet actieve vensters
$('.paneel').css('display', 'none')