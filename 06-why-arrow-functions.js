const outer = function() {
    console.log( 'outer: this = ', this );

    const innerOld = function() {
        console.log( 'innerOld: this = ', this );
    };

    innerOld();

    // Arrow function does not have their own context
    const innerNew = () => {
        console.log( 'innerOld: this = ', this );
    };

    innerNew();
};

outer();
outer.call({
    name: 'John',
    age: 32
});