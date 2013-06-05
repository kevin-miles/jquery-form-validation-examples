var validate = function() 
{ 
    var first = $("#f_name").val();
    var last = $("#l_name").val();
    var error = false; //will turn to true if error is found, form won't submit unless this is false

    if(first==""){  $("#f_name").next().text("* Please input first name"); 
error = true;}
    else {  $("#f_name").next().text(""); }
    if(last==""){ $("#l_name").next().text("* Please input last name"); 
error = true; }
    else { $("#l_name").next().text(""); }

    if(error==false){ $("#send").submit(); }
    else{ return false; } //false cancels the default action 
}

//wait for the window to load completely
$(document).ready(
 function() {
     $("#send").click(validate); //run the validate function when the send button is clicked
     $("#f_name").focus(); //make the browser focus on the first name input
 });
