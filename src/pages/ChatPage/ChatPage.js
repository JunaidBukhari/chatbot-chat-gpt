import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { generatePrompt, openai } from '../../lib/openAI';
import styles from './ChatPage.module.css';

const categories = [
  {
    name: 'email',
    message: 'Please enter your name to suggest emails',
    buttonText: 'Send',
  },
  {
    name: 'company',
    message: 'Please enter industry type to suggest names',
    buttonText: 'Send',
  },
  {
    name: 'pet',
    message: 'Please enter your pet (dog, cat etc)',
    buttonText: 'Send',
  },
  {
    name: 'question',
    message: 'Please ask any question',
    buttonText: 'Ask',
  },
];

const ChatPage = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState(categories[0]);
  const [thinking, setThinking] = useState(false);
  const [writingClass, setWritingClass] = useState('');
  const [question, setQuestion] = useState('');
  const [result, setResult] = useState('');
  const { name } = useParams();

  useEffect(() => {
    const category = categories.filter((category) => category.name === name);
    if (category?.[0]) {
      setCategory(category[0]);
    } else {
      navigate('/categories');
    }
  }, [name, navigate]);

  async function onSubmit(event) {
    event.preventDefault();

    try {
      setThinking(true);
      setResult('');
      setWritingClass('');
      const completion = await openai.createCompletion({
        model: 'gpt-3.5-turbo-0125',
        prompt: generatePrompt(question, category.name),
        temperature: 1,
      });
      setThinking(false);
      setResult(completion.data.choices[0].text);
      setWritingClass(styles.typewriter);
      setQuestion('');
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }
  return (
    <div className="d-flex justify-content-center">
      <div className="col-sm-12 col-lg-8 card text-center">
        <div className="m-5">
          <i className="bi bi-robot fs-1 d-block mb-4"></i>

          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="form-control"
            type="text"
            placeholder={category.message + '...'}
          />
          <button
            disabled={!question || thinking}
            onClick={onSubmit}
            className="btn btn-primary btn-sm mt-3 w-100  "
          >
            {thinking ? 'Thinking...' : category.buttonText}
          </button>
          <div className={styles.answer}>
            {thinking ? (
              <div className={styles.lightText}>Generating ....</div>
            ) : (
              <div className={`${writingClass} mt-5`}>
                <p>
                  {result}
                  <em className="text-danger">
                    {result && result.length >= 48 && ' End of capacity'}
                  </em>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
