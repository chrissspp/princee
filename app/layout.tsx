<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            background-color: #f0f0f0; /* Light grey background */
            color: #333; /* Dark grey text */
        }
        header {
            background-color: #4CAF50; /* Green header */
            color: white;
            text-align: center;
            padding: 1em 0;
        }
        nav {
            background-color: #333; /* Dark grey navbar */
            color: white;
            padding: 1em 0;
            text-align: center;
        }
        nav ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
            display: flex;
            justify-content: center;
            gap: 1em; /* Space between nav items */
        }
        nav ul li {
            margin: 0;
        }
        nav ul li a {
            color: white;
            text-decoration: none;
            padding: 0.5em 1em;
            border-radius: 5px; /* Rounded corners for nav links */
        }
        nav ul li a:hover {
            background-color: #555; /* Slightly lighter on hover */
        }
        main {
            padding: 20px;
            text-align: center;
        }
        footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 1em 0;
            position: fixed; /* Fix footer to bottom */
            bottom: 0;
            width: 100%;
        }
        .container {
            max-width: 1200px; /* Maximum width of content */
            margin: 0 auto; /* Center the content */
        }

        /* Responsive design adjustments */
        @media screen and (max-width: 768px) {
            nav ul {
                flex-direction: column; /* Stack nav items on small screens */
                gap: 0.5em;
            }
            header, footer {
                padding: 1em;
            }
            main {
                padding: 1em;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <h1>My Website</h1>
            <p>Welcome to my site!</p>
        </div>
    </header>
    <nav>
        <div class="container">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
    <main>
        <div class="container">
            <h2>Home</h2>
            <p>This is the home page content. You can add your main content here.</p>
        </div>
    </main>
    <footer>
        <div class="container">
            <p>&copy; 2025 My Website</p>
        </div>
    </footer>
</body>
</html>

      
