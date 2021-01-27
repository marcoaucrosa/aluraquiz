import React from 'react';
import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizHead from '../src/components/QuizHead';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function QuizPage() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizHead />
      <QuizContainer>
        <QuizLogo />
        <Widget>
          Widget
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl={db.projectUrl} />
    </QuizBackground>
  );
}
