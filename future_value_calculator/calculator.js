var futureValue = function(time, annual_rate, inv)
{
    var investment = inv,
        rate       = annual_rate,
        years      = time;

    for(var i=1, future=investment; i<=years; i++)
    {
	future += (future * rate / 100);
    }
    return parseInt(future); //convert from float to int
}

var calculate = function()
{
    $("#future").val(""); 
    //clear future value. this needs to be done to prevent an old correct value from continuing to show after erroneous input has been given

    var investment = parseFloat($("#investment").val());
    var interest   = parseFloat($("#interest").val());
    var years      = parseInt($("#years").val());

    var error = false;

    //errors given when erroneous conditions are met
    var NaN_ERROR = "* Value must be numeric";
    var NEG_ERROR = "* Value must be a positive number";                                                                                                                      
    if(isNaN(investment)) 
    {
	error = true;
	$("#investment_error").text(NaN_ERROR);
    }
    else if (investment < 0)
    {
	error = true;
	$("#investment_error").text(NEG_ERROR);
    }

    else
    {
	$("#investment_error").text("");
    }

    if(isNaN(interest))
    {
	error = true;
	$("#interest_error").text(NaN_ERROR);
    }
    else if (interest < 0)
    {
	error = true;
	$("#interest_error").text(NEG_ERROR);
    }
    else
    {
	$("#interest_error").text("");
    }

    if(isNaN(years))
    {
	error = true;
	$("#years_error").text(NaN_ERROR);
    }
    else if (years < 0)
    {
	error = true;
	$("#years_error").text(NEG_ERROR);
    }
    else
    {
	$("#years_error").text("");
    }

    if(error == false)
    {
	future = futureValue(years, interest, investment);
	$("#future").val(future);
    }
}

var clear = function()
{
    $("#calculator_area :text").each(function(){ $(this).val(""); }); //clear the text from each error class(spans in this case)
    $("#calculator_area .error").each(function(){ $(this).text(""); }); //clear the text from each error class(spans in this case)

}

$(document).ready(function() {
    //add events
    $("#calculate").click(calculate);
    $("#clear").click(clear);

    $("#investment").focus();
});
