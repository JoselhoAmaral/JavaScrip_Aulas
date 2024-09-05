/*
function f1 () {
    setTimeout( () => {
    console.log('F1');
}, 500);
}

function f2 () {
    setTimeout( () => {
        console.log('F2');
    }, 400);
}

function f3 () {
    setTimeout( () => {
        console.log('F3');
    }, 900);
}

f1();
f2();
f3();
console.log("Hello Word!");
*/
// Como podemos ver, as funcoes estão sendo executadas em uma ordem diferete da pedida. Para resolver isso usamos o callback.


function f1 (callback) {
    setTimeout( () => {
    console.log('F1');
    if(callback) callback();
}, 500);
}

function f2 (callback) {
    setTimeout( () => {
        console.log('F2');
        if(callback) callback();
    }, 400);
}

function f3 (callback) {
    setTimeout( () => {
        console.log('F3');
        if(callback) callback();
    }, 900);
}

f1(function() {
    f2(function() {
        f3( function () {
            console.log("Hello Word!");
        });
    });
});

