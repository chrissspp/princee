import React from 'react';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <header className="bg-white dark:bg-gray-800 shadow-md py-4">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                        My Static Website
                    </h1>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
                        Welcome!
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        This is a simple, statically exported Next.js website, ready for
                        deployment on GitHub Pages.  It demonstrates a basic layout.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                        About
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        This page is built with React and Next.js, and then statically
                        exported to HTML, CSS, and JavaScript.
                    </p>
                 </section>
                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                        Links
                    </h2>
                    <ul className="list-disc list-inside text-blue-600 dark:text-blue-400">
                        <li><a href="#">Home</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>
                 </section>
            </main>

            <footer className="bg-white dark:bg-gray-800 py-4 mt-8">
                <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
                    &copy; {new Date().getFullYear()} My Website.  Static Version.
                </div>
            </footer>
             <style jsx global>{`
                body {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                }
                .container {
                    max-width: 1200px;
                    margin-left: auto;
                    margin-right: auto;
                }
                a {
                    color: #0070f3;
                    text-decoration: none;
                }
                a:hover {
                    text-decoration: underline;
                }
            `}</style>
        </div>
    );
};

export default HomePage;

