import * as firebase from 'firebase';

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

  export {firebase, database as default};

  // //child_removed
  // database.ref('expenses').on('child_removed', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });

  // //child_changed
  // database.ref('expenses').on('child_changed', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });

  // //child_added
  // database.ref('expenses').on('child_added', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });


  // database.ref('expenses')
  //   .once('value')
  //   .then((snapshot) => {
  //     const expenses = [];
  //     snapshot.forEach((childSnapshot) => {
  //       expenses.push({
  //         id: childSnapshot.key,
  //         ...childSnapshot.val()
  //       });
  //     });
  //     console.log(expenses);
  //   })

// database.ref('expenses').on('value', (snapshot) => {
//       const expenses = [];
//       snapshot.forEach((childSnapshot) => {
//         expenses.push({
//           id: childSnapshot.key,
//           ...childSnapshot.val()
//         });
//       });
//       console.log(expenses);
// }, (e) => {
//     console.log('error fetching', e)
// })

  // database.ref('expenses').push({
  //   description: 'rent',
  //   note: 'note',
  //   amount: 154,
  //   createdAt: 56
  // });




// database.ref('notes').push({
//     title: 'course',
//     body: 'Go for a run'
// })

// const firebaseNotes = {
//     notes: {
//         askf: {
//             title: 'First note!',
//             body: 'This is my note'
//         },
//         asdfjs: {   
//             title: 'Anoter note!',
//             body: 'This is my note',
//         }
//     }
// };

// const notes = [{
//     id: '12',
//     title: 'First note!',
//     body: 'This is my note'
// }, {
//     id: '761e',
//     title: 'Anoter note!',
//     body: 'This is my note',
// }];

// database.ref('notes').set(notes);

// const onValueVhange = database.ref().on('value', (snapshot) => {
//     const object = snapshot.val();
//     console.log(`${object.name} is a ${object.job.title} at ${object.job.company}.`)
// }, (e) => {
//     console.log('error fetching', e)
// })

// setTimeout(()=> {
//     database.ref('job/title').set('manager')
// }, 3500);


//   database.ref('location')
//     .once('value')
//     .then((snapshot) => {
//         const val = (snapshot.val());
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e)
//     });

//   database.ref().set({
//       name: 'Anita Silva',
//       age: 18,
//       stressLevel: 6,
//       job: {
//           title: 'software developer',
//           company: 'google'
//       },
//       location: {
//           city: 'Spokane',
//           country: 'United States'
//       }
//   }).then(() => {
//     console.log('data saved');
//   }).catch((e) => {
//      console.log('this failed', e);
//   });

//   database.ref().update({
//       stressLevel: 9,
//       'job/company': 'amazon',
//       'location/city': 'Seattle'
//   });

// database.ref().remove().then(() => {
//     console.log('removed');
// }).catch((e) => {
//     console.log('did not remove');
// })