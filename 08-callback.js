// setTimeout requests the environment (Node/browser) to execute f. Node/browser executes the 
// function after 3 seconds.
// setTimeout(
//     () => {
//         console.log( "hi 3s" );
//     },
//     3000
// );

// console.log( "end of script");

function sum(x, y, callback) {
    setTimeout(
        () => {
            callback( x + y );
        },
        3000
    );
};

sum( 12, 13, ( result ) => {
    console.log( 'Result = ', result );
});