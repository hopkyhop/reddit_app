import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import styles from './postcommentsanswer.css';

interface IPostCommentsAnswer {
  author?: string
}

export function PostCommentsAnswer({author} : IPostCommentsAnswer) {
  const answerInput = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (answerInput.current) {
      answerInput.current.focus();
      answerInput.current.selectionStart = value.length;
    }
  },[])

  const [value, setValue] = useState(`${author}, `);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) { 
    setValue(event.target.value);
  } 

  return (
    <form>
      <textarea value={value} className={styles.textarea} onChange={handleChange} ref={answerInput}></textarea>
    </form>
  );
}
