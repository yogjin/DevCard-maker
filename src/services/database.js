import { child, get, getDatabase, onValue, ref, set } from 'firebase/database';

// db구조
// {
//   "users": {
//     "id": "FeAYOxvRNHYv08GQPWvKyHborAC3", // uid
//     "card": {
//       "company": "CNU",
//       "email": "youngjin988@gmail.com",
//       "message": "go higher",
//       "name": "영진",
//       "skills": ["javascript", "react"],
//       "title": "FrontEnd Developer"
//     }
//   }
// }

const db = getDatabase();

// function for test
export const pushData2 = (uid, changedData) => {
  console.log('pushData2');
  set(ref(db, `users/${uid}`), {
    card: changedData,
  });
};

// function for test
export const pushData = () => {
  set(ref(db, `users/${'FeAYOxvRNHYv08GQPWvKyHborAC3'}`), {
    card: {
      company: 'CNU',
      email: 'youngjin988@gmail.com',
      message: 'go higher',
      name: '영진',
      skills: ['javascript', 'react'],
      title: 'BackEnd Developer',
    },
  });
};

// function for test
export const getData = async () => {
  console.log('get');
  await get(ref(db, `users/${'FeAYOxvRNHYv08GQPWvKyHborAC3'}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        return snapshot.val();
      } else {
        console.log('No data available');
      }
    })
    .catch((error) => {
      console.error(error);
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
