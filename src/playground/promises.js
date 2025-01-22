const promise = new Promise((resolve, reject)=> {
    setTimeout(()=> {
        // resolve({
        //     name :"samir",
        //     age: 22
        // });
        reject("something went wrong");
    }, 5000)
});

console.log("before");

promise.then((data)=> {
    console.log("1", data);
    return "some data";
}).then((str)=> {
    console.log("does this run?", str);
}).catch((error) => {
console.log("error:", error)
});


console.log("after");


 
    
/*    
These values are for Expensify development
FIREBASE_API_KEY=AIzaSyAHiA2J5NRZwnngWD5jxNk5aGNaxZ-HJhI
FIREBASE_AUTH_DOMAIN=expensify-a4894.firebaseapp.com
FIREBASE_DATABASE_URL=https://expensify-a4894-default-rtdb.firebaseio.com
FIREBASE_PROJECT_ID=expensify-a4894
FIREBASE_STORAGE_BUCKET=expensify-a4894.firebasestorage.app
FIREBASE_MESSAGING_SENDER_ID=798236621508
*/

/*
#these values are for Expensify_test
FIREBASE_API_KEY=AIzaSyCjHIPbdBkRRsqVlrNe_1Lh9ZRwEnkE4ag
FIREBASE_AUTH_DOMAIN=expensify-test-6df4f.firebaseapp.com
FIREBASE_DATABASE_URL=https://expensify-test-6df4f-default-rtdb.firebaseio.com
FIREBASE_PROJECT_ID=expensify-test-6df4f
FIREBASE_STORAGE_BUCKET=expensify-test-6df4f.firebasestorage.app
FIREBASE_MESSAGING_SENDER_ID=852646973922
*/