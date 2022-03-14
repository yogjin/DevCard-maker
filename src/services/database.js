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
export const pushData2 = (uid, cardData, changedData) => {
  set(ref(db, `users/${uid}`), {
    card: {
      ...cardData,
      ...changedData,
    },
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
      title: 'BackEnd22234',
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
  onValue(ref(db, `users/${uid}`), (snapshot) => {
    data = snapshot.val();
  });
  return data['card'];
};
