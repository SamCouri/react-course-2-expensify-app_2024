import * as firebase from "firebase";

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default};




/*
//child_removed
database.ref("expenses").on("child_removed", (snapshot)=> {
console.log("child removed: "+snapshot.key, snapshot.val());
});

//child_changed
database.ref("expenses").on("child_changed", (snapshot)=> {
  console.log(snapshot.key, snapshot.val());
  });

//child_added
database.ref("expenses").on("child_added", (snapshot)=> {
  console.log("child added: "+snapshot.key, snapshot.val());
  });

  setTimeout(()=> {
    database.ref("expenses").push({
      description: "coffee",
      notes: "this is my note for coffee",
      amount: 150,
      createdAt: 994594539
    });
  }, 3500);

/*
database.ref("expenses").push({
  description: "coffee",
  notes: "this is my note for coffee",
  amount: 150,
  createdAt: 994594539
});

database.ref("expenses").on("value", (snapshot)=> {
  const expenses = [];
  snapshot.forEach((childSnapshot)=> {
  expenses.push({
  id: childSnapshot.key,
    ...childSnapshot.val()
  });
  });
  console.log(expenses);
  });
  

  setTimeout(()=> {
    database.ref("expenses").push({
      description: "Cake",
      notes: "this is my note for cake",
      amount: 5550,
      createdAt: 99459453977
    });
  }, 3500);

database.ref("expenses").once("value").then((snapshot)=> {
const expenses = [];
snapshot.forEach((childSnapshot)=> {
expenses.push({
id: childSnapshot.key,
  ...childSnapshot.val()
});
});
console.log(expenses);
});


database.ref("expenses").push({
  description: "coffee",
  notes: "this is my note for coffee",
  amount: 150,
  createdAt: 994594539
});
*/


/*
database.ref("notes/-OFyjg2TtqzEAsxmeiKk").update({
body: "buy food"
});

//database.ref("notes/-OFyjg2TtqzEAsxmeiKk").remove();

database.ref("notes").push({
  title: "course topics",
  body: "react, Redux"
});
*/

/*
const onValueChange = database.ref().on("value", (snapshot)=>{
  const val = snapshot.val();
  console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
}, (e)=>{
  console.log("error fetching date", e);
});

setTimeout(()=> {
  database.ref("job/company").set("MS")
}, 3500);

setTimeout(()=> {
  database.ref().off("value",onValueChange);
  }, 7000);
  
setTimeout(()=> {
  database.ref("job/company").set("Oracle")
}, 10500);
*/


/*
const onValueChange = database.ref().on("value", (snapshot)=> {
  console.log(snapshot.val());
  }, (e)=> {
    console.log("error with data fetching", e);
  });

setTimeout(()=> {
database.ref("age").set(29);
}, 3500);

setTimeout(()=> {
  database.ref().off(onValueChange);
  }, 7000);
  
  setTimeout(()=> {
    database.ref("age").set(30)
    }, 10500);

*/


// database.ref("location/city")
// .once("value")
// .then((snapshot)=> {
//   const val = snapshot.val();
//   console.log(val);
// })
// .catch((e)=> {
//   console.log(("error fetching data", e))
// });


//   database.ref().set({
//     name: "samir-2024",
//     age: 26,
//     stressLevel: 6,
//     job: {
//       title: "software developer",
//       company: 'Google'
//     },
//     location: {
//         city: "Montreal",
//         country: "Canada"
//     }
//   }).then(()=>{
//     console.log("data is saved!")
//   }).catch((e)=> {
//     console.log("this failed", e);
//   });

//   //database.ref().set("this is my data.");
//   // database.ref('age').set(27);
//   // database.ref('location/city').set("Ottawa");
  
// database.ref("attributes").set({
//     height: 61,
//     weight: 160
// }).then(()=> {
//   console.log("height and weight are set")
// }).catch((e)=> {
//   console.log("something wrong with height and weight", e)
// });


// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "seatle"
//   }
// ).then(()=> {
//   console.log("data were updated")
// }).catch((e)=> {
//   console.log("data could not be updated", e)
// });

/*
database.ref().remove().then(()=> {
console.log("all Database was removed");
}).catch((e)=> {
  console.log("could not remove", e);
});
*/
