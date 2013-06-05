
var calculate = function()
{
    $("#mpg").val(""); 
    //clear last MPG value. this needs to be done to prevent an old correct value from continuing to show after erroneous input has been given

    var miles = parseFloat($("#miles").val());
    var gas   = parseFloat($("#gas").val());
    var error = false;

    //errors given when erroneous conditions are met
    var NaN_ERROR = "* Value must be numeric";
    var NEG_ERROR = "* Value must be a positive number";

 if(isNaN(miles))
    {
	error = true;
	$("#miles_error").text(NaN_ERROR);
    }
    else if (miles < 0)
    {
	error = true;
	$("#miles_error").text(NEG_ERROR);
    }
    else
    {
	$("#miles_error").text("");
    }

    if(isNaN(gas))
    {
	error = true;
	$("#gas_error").text(NaN_ERROR);
    }
    else if (gas < 0)
    {
	error = true;
	$("#gas_error").text(NEG_ERROR);
    }
    else
    {
	$("#gas_error").text("");
    }

    if(error == false)
    {
	var mpg = miles/gas; //gas is in gallons
	$("#mpg").val(mpg.toFixed(2));
    }
}

var clear = function()
{
    $("#miles").val("");
    $("#gas").val("");
    $("#mpg").val("");
    $("#miles_error").text("");
    $("#gas_error").text("");
}

$(document).ready(function() {
    //add events
    $("#calculate").click(calculate);
    $("#clear").click(clear);
    $("#miles").dblclick(clear);

    $("#miles").focus();
});
