import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/MCQ.css'; 

function MultipleChoiceQuestion(props) {
  const {
    login, username, setUsername, setLogin
  } = props;

  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { id: 1, text: "Option A" },
    { id: 2, text: "Option B" },
    { id: 3, text: "Option C" },
    { id: 4, text: "Option D" },
  ];

  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId);
  };

  const handleSubmit = () => {
    // Add logic to handle submission, check the selected option, etc.
    console.log(`Selected option: ${selectedOption}`);
  };

  return (
    <>
      <Navbar setLogin={setLogin} login={login} setUsername={setUsername} username={username} />
      <div className="container">
        <h2>Multiple Choice Question</h2>
        <div className="question">
          <p>What is the correct answer to the question?</p>
        </div>
        <ul className="options-list">
          {options.map((option) => (
            <li
              key={option.id}
              className={`option-box ${selectedOption === option.id ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(option.id)}
            >
              {option.text}
            </li>
          ))}
        </ul>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}

export default MultipleChoiceQuestion;