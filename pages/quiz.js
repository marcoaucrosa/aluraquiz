/* eslint-disable react/prop-types */
import React from 'react';
import db from '../db.json';
import QuizContainer from '../src/components/QuizContainer';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizHead from '../src/components/QuizHead';
import Button from '../src/components/Button';

function Loading() {
  return (
    <Widget>
      <Widget.Header>
        <h3>
          Carregando...
        </h3>
      </Widget.Header>
      <Widget.Content>
        <p>
          Carregando pergunta e alternativas...
        </p>
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
}) {
  const questionId = `question__${questionIndex}`;
  return (
    <Widget>
      <Widget.Header>
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>
      <img src={question.image} alt={question.description} />
      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            onSubmit();
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative_${alternativeIndex}`;
            return (
              <Widget.Topic
                as="label"
                htmlFor={alternativeId}
              >
                <input
                  name={questionId}
                  type="radio"
                  id={alternativeId}
                />
                {alternative}
              </Widget.Topic>
            );
          })}
          <Button>
            Confirmar
          </Button>
        </form>
      </Widget.Content>
    </Widget>
  );
}

function Result() {
  return (
    <Widget>
      <Widget.Header>
        <h3>
          Resultado do Quiz
        </h3>
      </Widget.Header>
      <Widget.Content>
        <p>
          Você acertou x questões!
        </p>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];
  const totalQuestions = db.questions.length;

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);

  function handleSubmit() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizHead />
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmit}
          />
        )}
        {screenState === screenStates.LOADING && (
          <Loading />
        )}
        {screenState === screenStates.RESULT && (
          <Result />
        )}
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl={db.projectUrl} />
    </QuizBackground>
  );
}
