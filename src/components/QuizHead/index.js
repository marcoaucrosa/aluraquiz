import Head from 'next/head'
import db from '../../../db.json';

export default function QuizHead() {
    return (
        <Head>
            /* Primary Meta Tags */
            <title>Quiz CSS da Alura</title>
            <meta name="title" content={db.title}/>
            <meta name="description" content={db.description}/>

            /* Open Graph / Facebook */
            <meta property="og:type" content="website"/>
            <meta property="og:url" content={db.vercelUrl}/>
            <meta property="og:title" content={db.title}/>
            <meta property="og:description" content={db.description}/>
            <meta property="og:image" content={db.bg}/>

            /* Twitter */
            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content={db.vercelUrl}/>
            <meta property="twitter:title" content={db.title}/>
            <meta property="twitter:description" content={db.description}/>
            <meta property="twitter:image" content={db.bg}/>
        </Head>
    );
}