import React from 'react';
import styles from './Card.module.css';

const Card = ({ card }) => {
  const { name, company, title, email, message } = card;
  const leftCode = (
    <pre>{`{  
    ${title}
    ${company}
}


<br/>
<email/> ${email}
<br/>
<br/>
<message/> ${message}
`}</pre>
  );
  const rightCode = (
    <pre>{`
  <skills>
  

  </skills> 
  `}</pre>
  );

  return (
    <>
      <div className={styles.left}>
        <div className={styles.name}>{name}</div>
        <div>{leftCode}</div>
      </div>
      <div className={styles.right}>
        <div className={styles.profile}>
          <img src="./image/github.png" alt="profile"></img>
        </div>
        <div>{rightCode}</div>
      </div>
    </>
  );
};

export default Card;
