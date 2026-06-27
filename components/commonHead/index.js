
import React from 'react'
import Head from 'next/head'

const CommonHead = (props) => {
    return (
        <Head>
            <title>Ayush Kumar | Full Stack AI Developer</title>
            <meta name="description" content="Full Stack AI Engineer with 3 years of experience. Expert in MERN, Python/FastAPI, LangChain, RAG, OpenAI, and AWS EC2. Based in Gurgaon, Haryana." />
            <meta name="keywords" content="Ayush Kumar, Full Stack Developer, React, Next.js, Python, FastAPI, AI, LangChain, MERN, Node.js, MongoDB, AWS" />
            <meta name="author" content="Ayush Kumar" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default CommonHead;
