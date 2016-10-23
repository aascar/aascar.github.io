/**
 * Created by Araja Jyothi Babu on 23-Oct-16.
 */
$(document).on('submit', "#form-join", function(e){
    e.preventDefault();
    $("#form-submit").text("Submitting..");
    var mail = $("#form-email").val();
    var channel = '#join_requests';
    var text = "*Message:* Hai, Let me join your community..! ";
    var obj = {};
    obj.channel = channel;
    obj.username = mail;
    obj.text = text;
    obj.icon_emoji = ":rocket:";
    $.ajax({
        url : "https://hooks.slack.com/services/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",
        method : "POST",
        dataType: 'text',
        async: true,
        data: JSON.stringify(obj),
        timeout : 30000     //30 seconds timeout
    }).done(function(status){
        $("#form-email").attr("placeholder", "Welcome On board..!");
        $("#form-email").val("");
    }).fail(function(){
        $("#form-email").attr("placeholder", "Oops..! Please try again.");
        $("#form-email").val("");
    }).always(function(){
        $("#form-submit").text("Join Us!");
    });

});