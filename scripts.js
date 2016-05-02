
var count = 0;
var sum = 0;
var sumSqr = 0;
var average;


DisplayStats( );

$('#submit').on( 'click', processForm );
$('#reset').on( 'click', reset );


function processForm( evt ) {
    var val = $('#the-text').val();
    var num = parseFloat( val );
   
    processNumber( num );
    
    evt.preventDefault( );
}



function processNumber( number ) {
    ++count;
    sum += number;
    sumSqr += number * number;
    ComputeStats( );
    DisplayStats( );
}



function ComputeStats( ) {
    var variance;
    if ( count > 0 ) {
        average = sum / count;
    } else {
        average = undefined;
    }
    if ( count > 1 ) {
        variance = (sumSqr  -  sum * sum / count) / (count - 1);
      
    }
}



function DisplayStats( ) {
    displayValue( '#count', count );
    displayValue( '#sum', sum );
    displayValue( '#average', average );

    

    function displayValue( selector, value ) {
        if ( value === undefined ) {
            $( selector ).empty( );
        } else {
            $( selector ).text( value );
        }
    }
}


function reset( ) {
    count = 0;
    sum = 0;
    sumSqr = 0;
    ComputeStats( );
    DisplayStats( );
}

