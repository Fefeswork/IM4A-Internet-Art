var topCard = 1;
var facingUp = true;

function flipCard(n) {
    if (topCard === n) return;

    // Replace the contents of the current back-face with the contents
    // of the element that should rotate into view.
    var curBackFace = $('.' + (facingUp ? 'face2' : 'face1'));
    //var nextContent = $('.store' + n).html(); 
    var nextContent = $('.store li:nth-child(' + n + ')').html(); 
    curBackFace.html(nextContent);

    // Rotate the content
    $('.card').toggleClass('flipped');
    topCard = n;
    facingUp = !facingUp;
}

$('#flip1').on('click', function(){ flipCard(1); });
$('#flip2').on('click', function(){ flipCard(2); });
$('#flip3').on('click', function(){ flipCard(3); });
$('#flip4').on('click', function(){ flipCard(4); });

$(document).ready(function(){
    // Add the appropriate content to the initial "front side"
    var frontFace = $('.face1');
    var frontContent = $('.store li:first-child').html(); 
    frontFace.html(frontContent);
});