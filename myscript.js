$(document).ready(function () {
	var testNumLength = function(number) {
        if (number.length > 9) {
            totaldiv.text(number.substr(number.length-9,9));
            if (number.length > 15) {
                number = "";
                totaldiv.text("Err");
            }
        } 
    };
	var number = "";
    var newnumber = "";
    var operator = "";
    var totaldiv = $("#total");
    var result;
    totaldiv.text("0");
    
    // Declare Number click function
    $("#numbers > a").not("#clear,#clearall,#reciprocal,#decimal").click(function(){
		number += $(this).text();
		totaldiv.text(number);
		testNumLength(number);
    });
    
    // Declare operator click function
    $("#operators > a").not("#equals").click(function(){
		operator = $(this).text();
		newnumber = number;
		number = "";
		totaldiv.text("0");
    });
    
    $("#squared").click(function(){
        number = parseInt(number,10);
        //var result = "";
        result = (number * number);
        result = result.toString(10);
        totaldiv.text(result);
        testNumLength(result);
        number = "";
    });
    
    $("#reciprocal").click(function(){
        number = parseFloat(number,10);
        result = 1 / number;
        result = result.toFixed(2);
        totaldiv.text(result);
        testNumLength(result);
        number = "";
    });
    
    // Declare Clear functions
    $("#clear,#clearall").click(function(){
		number = "";
		totaldiv.text("0");
		if ($(this).attr("id") === "clearall") {
			newnumber = "";
		}
    });
    
    // Declare equals function
    $("#equals").click(function(){
    number = parseFloat(number,10);
    newnumber = parseFloat(newnumber,10);
    //var result;
    if (operator==="+"){
        result = newnumber + number;
    }
    else if (operator==="-"){
        result = newnumber - number;
    }
    else if (operator==="*"){
        result = newnumber * number;
    }
    else if (operator==="/"){
        result = newnumber / number;
    }

    result = result.toString(10);
    totaldiv.text(result);
    testNumLength(result);
    number = "";
    newnumber = "";
    });
});
