import React, { useState } from 'react';

const PersonalityTest = () => {
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState({
    extroversionPercentage: null,
    creativityPercentage: null,
    feelingPercentage: null,
    conscientiousPercentage: null,
    personalityType: null,
    careerChoices: null,
  });

  const handleAnswerChange = (index, answer) => {
    setAnswers({
      ...answers,
      [index]: answer === 'Yes',
    });
  };

  const determineCareerChoices = (ptype) => {
    switch (ptype) {
      case 'INTP':
        return 'Physicists, chemists, biologists, photographers, strategic planners, mathematicians, university professors, computer programmers, computer animators, technical writers, engineers, lawyers, forensic researchers, writers, artists, psychologists, social scientists, systems analysts, researchers, surveyors. Highly analytical, you can discover connections between two seemingly unrelated things, and work best when allowed to use your imagination and critical thinking. You like working independently with creative freedom which will help you realize your full potential. In difficult circumstances, you do not like taking orders from other people and prefer it when things go as you personally like them to be.';
      case 'ENTP':
        return 'Entrepreneurs, lawyers, psychologists, consultants, sales representatives, actors, engineers, scientists, inventors, marketers, computer programmers, comedians, computer analysts, credit investigators, journalists, psychiatrists, public relations, designers, writers, artists, musicians, politicians. Very freedom-oriented, you need a career that allows you to act independently and express your creativity and insight. You do not like following rules if they do not make sense to you and prefer working independently.';
      // Add cases for other personality types
      case 'INTJ':
        return 'Your career choices are:  Entrepreneurs, lawyers, psychologists, consultants, sales representatives,'
      default:
        return 'Career choices will be displayed here.';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert answers to the format expected by the original script
    const apercent = { A: 0, B: 0, C: 0, N: 0 };
    questions.forEach((question, index) => {
      const answer = answers[index];
      if (answer !== undefined) {
        apercent[question.f] += answer ? 20 : 0;
      }
    });

    // Perform personality type calculation (similar to the original script)
    const calculatePercentage = (type) => (apercent[type] > 50 ? type : 'not ' + type);
    const extroversionPercentage = calculatePercentage('A');
    const creativityPercentage = calculatePercentage('N');
    const feelingPercentage = calculatePercentage('B');
    const conscientiousPercentage = calculatePercentage('C');

    // Update state with results
    setResults({
      extroversionPercentage,
      creativityPercentage,
      feelingPercentage,
      conscientiousPercentage,
      personalityType: `${extroversionPercentage}${creativityPercentage}${feelingPercentage}${conscientiousPercentage}`,
      careerChoices: determineCareerChoices(`${extroversionPercentage}${creativityPercentage}${feelingPercentage}${conscientiousPercentage}`),
    });
  };

  return (
    <div>
      <h1>Personality Test</h1>
      <form onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <div key={index}>
            <label>
              {`${index + 1}. ${question.q}? Yes/No:`}
              <input
                type="radio"
                name={`question_${index}`}
                value="Yes"
                checked={answers[index] === true}
                onChange={() => handleAnswerChange(index, 'Yes')}
              />
              Yes
              <input
                type="radio"
                name={`question_${index}`}
                value="No"
                checked={answers[index] === false}
                onChange={() => handleAnswerChange(index, 'No')}
              />
              No
            </label>
          </div>
        ))}
        <button type="submit">Submit</button>

        {/* Display results within the component */}
        {results.extroversionPercentage !== null && (
          <div>
            <p>Your extroversion percentage: {results.extroversionPercentage}%</p>
            <p>Your creativity percentage: {results.creativityPercentage}%</p>
            <p>Your feeling percentage: {results.feelingPercentage}%</p>
            <p>Your conscientious percentage: {results.conscientiousPercentage}%</p>
            <p>Your personality type: {results.personalityType}</p>
            <p>Your career choices: {results.careerChoices}</p>
          </div>
        )}
      </form>
    </div>
  );
};

const questions = [
  {"q": "Would you call yourself a thinker", "f": "N"},
  {"q": "Are you creative", "f": "N"},
  {"q": "Do you like philosophy", "f": "N"},
  {"q": "Do you like to think about complex questions", "f": "N"},
  {"q": "Do you have an interest in artistic pursuits like painting and writing", "f": "N"},
  {"q": "Do you like initiating conversations", "f": "A"},
  {"q": "Do you like to start talks with new people", "f": "A"},
  {"q": "Is it easy for you to adjust in an environment where you initially do not know anyone", "f": "A"},
  {"q": "Are you social", "f": "A"},
  {"q": "Do you like social events (parties, fests and events)", "f": "A"},
  {"q": "Do you mostly make your decisions by heart", "f": "B"},
  {"q": "Do you put others before yourself", "f": "B"},
  {"q": "Do you think that one should change their views if they hurt someone", "f": "B"},
  {"q": "Do you often get lost in your feelings", "f": "B"},
  {"q": "Are you run more by your feelings than logic", "f": "B"},
  {"q": "Can you make a timetable and stick to it", "f": "C"},
  {"q": "Do you usually follow the rules/laws", "f": "C"},
  {"q": "Are you organized", "f": "C"},
  {"q": "Do you plan before doing something", "f": "C"},
  {"q": "Are you ok with following orders", "f": "C"}
];

export default PersonalityTest;
