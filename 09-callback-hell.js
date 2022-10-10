function sum(x, y, callback) {
    setTimeout(
        () => callback( x + y ),
        3000
    );
};

sum( 12, 13, ( result1 ) => {
    console.log( 'Result = ', result1 );

    sum( result1, 14, ( result2 ) => {
        console.log( "Result2 = ", result2 )

        sum( result2, 15, ( result3 ) => {
            console.log( 'Result3 = ', result3 );
        });
    });
});