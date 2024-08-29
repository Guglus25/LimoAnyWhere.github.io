
$(".chatpopup-icon-close").on('click', function(event) {
    event.preventDefault();
    $(".chatpopup-widget__body").hide(400);
});

$(".chatpopup-widget__trigger").on('click', function(event) {
    event.preventDefault();
    $(".chatpopup-widget__body").show(400);
});

$(".chatpopup-input-icon").on('click', function(event) {
    event.preventDefault();
    sendMessage();
});

$("input[name=message_to_send]").on('keydown', function(event) {
    console.log(event.which);
    if(event.which == 13){
        sendMessage();
    }
});

function sendMessage() {
    var number = "22892971128";
    var message = $("input[name=message_to_send]").val();

    if (message === undefined || message === "") {
        message = "Salut j'ai visité votre ce lien sur votre site" + " "+ location.href + " "+ "et j'ai besoin de plus d'information...".replace(" ", "%20");
    } else{
        message += " " + location.href;
    }

    var url = "https://api.whatsapp.com/send?phone="+ number +"&text="+ message;

    $("input[name=message_to_send]").val("");
    window.open(url, '_blank');
}



function change_image(image){

    var container = document.getElementById("main-image");

   container.src = image.src;
}
document.addEventListener("DOMContentLoaded", function(event) {

});