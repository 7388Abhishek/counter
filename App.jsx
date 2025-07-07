import React, { useState } from 'react';

const App = () => {
  const [text, setText] = useState('');

  const wordCount = text.trim() === ''
    ? 0
    : text.trim().split(/\s+/).length;

  return (
    <div style={styles.container}>
      <h1>Word Counter</h1>
      <textarea
        style={styles.textarea}
        placeholder="Type your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Word Count: <strong>{wordCount}</strong></p>
    </div>
  );
};
const styles = {
  container: {
    maxWidth: '600px',
    margin: '50px auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center'
  },
  textarea: {
    width: '100%',
    height: '200px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  }
};

export default App;
