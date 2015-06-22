
// When clicking on Full hide fail/success boxes
$('#name').focus(function() {
    $('#success').html('');
});

$().ready(function() {
    
     $('#btnSendEmail').on('click', function(e)  {
         
        
    	
    	var email =  $("#email").val();
         alert(email);
        
         $("#contactForm").attr('action', 'MAILTO:'+email).submit();
    });
});



