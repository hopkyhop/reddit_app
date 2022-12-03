import React from 'react';
//import styles from './loader.css';
import SyncLoader from "react-spinners/SyncLoader";

export function Loader( text: string ) {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <div role="alert" style={{ textAlign: 'center', padding: '10px' }}>
          {text}
        </div>
      </div>
      <div style={{textAlign: 'center', marginBottom: '10px'}}>
        <SyncLoader color='orange' />
      </div>
    </>
  );
}
