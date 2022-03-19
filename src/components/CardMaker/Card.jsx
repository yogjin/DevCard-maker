import React from 'react';
import styles from './Card.module.css';

const Card = ({ card }) => {
  const { name, company, title, email, message } = card;
  const leftCode = (
    <>
      <pre>{`{
`}</pre>
      <span className={styles.codeSpan}>
        &nbsp;&nbsp;&nbsp;&nbsp;{title}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;{company}
      </span>
      <pre>{`}
`}</pre>
      <pre>{`
<email>
`}</pre>
      <span className={styles.codeSpan}>&nbsp;&nbsp;&nbsp;&nbsp;{email}</span>
      <pre>{`<email/>        
<br/>
<message>
`}</pre>
      <span className={styles.codeSpan}>
        &nbsp;&nbsp;&nbsp;&nbsp;{`${message}`}
      </span>
      <pre>{`<message>
      `}</pre>
    </>
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
