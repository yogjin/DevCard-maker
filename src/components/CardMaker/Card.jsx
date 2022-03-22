import React from 'react';
import styles from './Card.module.css';

const CodeInCardWithBrTag = ({ code }) => {
  return (
    <>
      <code>{code}</code>
      <br />
    </>
  );
};

const Card = ({ card }) => {
  const { name, company, title, email, message, skills, url } = card;
  const leftCode = (
    <>
      <CodeInCardWithBrTag code={'{'} />
      <code className={styles.infoCode}>
        &nbsp;&nbsp;&nbsp;&nbsp;{title}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;{company}
      </code>
      <br />
      <CodeInCardWithBrTag code={'}'} />
      <br />
      <CodeInCardWithBrTag code={'<br/>'} />
      <code>{`<email/> `} </code>
      <code className={styles.infoCode}>{email}</code>
      <br />
      <CodeInCardWithBrTag code={'<br/>'} />
      <CodeInCardWithBrTag code={'<br/>'} />
      <code>{`<message/> `}</code>
      <code className={styles.infoCode}>{message}</code>
    </>
  );
  const rightCode = (
    <>
      <CodeInCardWithBrTag code={'<skills>'} />
      <code className={styles.infoCode}>&nbsp;&nbsp;&nbsp;&nbsp;{skills}</code>
      <br />
      <CodeInCardWithBrTag code={'<skills/>'} />
    </>
  );

  return (
    <>
      <div className={styles.left}>
        <div className={styles.name}>{name}</div>
        <div>{leftCode}</div>
      </div>
      <div className={styles.right}>
        <div className={styles.profile}>
          <img src={url} alt="profile"></img>
        </div>
        <div>{rightCode}</div>
      </div>
    </>
  );
};

export default Card;
