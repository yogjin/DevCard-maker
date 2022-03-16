import { child, get, getDatabase, onValue, ref, set } from 'firebase/database';

// db구조
// {
//   "users" : {
//     "uid" : {
//       "card" : {
//         "company" : "",
//         "email" : "",
//         "message" : "",
//         "name" : "",
//         "skills" : [ "javascript", "react" ],
//         "title" : ""
//       }
//     }
//   }
// }

const db = getDatabase();

// function for test
export const pushData = (uid, changedData) => {
  set(ref(db, `users/${uid}`), {
    card: changedData,
  });
};

// uid에 해당하는 card object 가져오기
export const getCards = async (uid) => {
  let data;
  await get(ref(db, `users/${uid}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        data = snapshot.val();
      } else {
        console.log('No data available');
      }
    })
    .catch((error) => {
      console.error(error);
    });
  return data['card'];
};
