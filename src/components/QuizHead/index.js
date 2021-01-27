import React from 'react';
import Head from 'next/head';
import db from '../../../db.json';

export default function QuizHead() {
  return (
    <Head>
      <title>Quiz CSS da Alura</title>
      <meta name="title" content={db.title} />
      <meta name="description" content={db.description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={db.vercelUrl} />
      <meta property="og:title" content={db.title} />
      <meta property="og:description" content={db.description} />
      <meta property="og:image" content={db.bg} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={db.vercelUrl} />
      <meta property="twitter:title" content={db.title} />
      <meta property="twitter:description" content={db.description} />
      <meta property="twitter:image" content={db.bg} />

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
    </Head>
  );
}
