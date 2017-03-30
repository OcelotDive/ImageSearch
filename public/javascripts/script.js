

setInterval(function() {
    $('#header').removeClass('animated bounceInDown');
    $('#header').addClass('animated pulse infinite');
    // $('#loader').append('<progress id="progBar" max="100" min="0"></progress>' + '<label>SEARCHING.....</label>');
    
},2000);

$(document).ready(function() {
    
    $('#back').click(function() {
        
        parent.history.back();
       
        return false;
    });
});

$('#sButton').click(function(){
   searchOnsearchOff();
})
 //<meter value="6" min="0" max="10"></meter>
   // <progress max="100" min="0"></progress>


function searchOnsearchOff() {
    $('#loader').css('opacity', '1');
    
    setTimeout(function() {
        $('#loader').css('opacity', '0');
    }, 3800);
}