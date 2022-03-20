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
//         "skills" : "",
//         "title" : "",
//         "color": ""
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

const getInitialCardObjectOfUser = () => {
  return {
    card: {
      company: 'company',
      email: 'email',
      message: 'message',
      name: 'name',
      skills: 'skills',
      title: 'title',
      color: 'black',
    },
  };
};

const pushInitialCardObject = (uid, InitialCardObject) => {
  set(ref(db, `users/${uid}`), InitialCardObject);
};

// uid에 해당하는 card object 가져오기
export const getCards = async (uid) => {
  let data;
  await get(ref(db, `users/${uid}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        data = snapshot.val();
      } else {
        const initialCardObject = getInitialCardObjectOfUser();
        pushInitialCardObject(uid, initialCardObject);
        data = initialCardObject;
      }
    })
    .catch((error) => {
      console.error(error);
    });
  return data['card'];
};
