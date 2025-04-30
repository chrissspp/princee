**File 1: layout.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Static Website</title>
    <style>
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f3f4f6;
        color: #1f2937;
      }
      .container {
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 1rem;
        padding-right: 1rem;
      }
      header {
        background-color: #ffffff;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
        padding-top: 1rem;
        padding-bottom: 1rem;
        margin-bottom: 1rem;
      }
      header h1 {
        font-size: 1.875rem;
        font-weight: bold;
        color: #4b5563;
        margin-top: 0;
        margin-bottom: 0;
      }
      main {
        padding-top: 2rem;
        padding-bottom: 2rem;
        min-height: calc(100vh - 10rem);
      }
      footer {
        background-color: #ffffff;
        margin-top: 4rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
        text-align: center;
        color: #6b7280;
        border-top: 1px solid #e5e7eb;
      }
      ul {
        list-style: disc;
        padding-left: 2rem;
        color: #3b82f6;
      }
      ul li a{
        color: #3b82f6;
        text-decoration: none;
      }
      ul li a:hover {
        text-decoration: underline;
      }
    </style>
</head>
<body>
    <div class="min-h-screen flex flex-col">
        <header>
            <div class="container">
                <h1>My Static Website</h1>
            </div>
        </header>
        <main class="flex-grow">
            <div class="container" id="page-content">
                </div>
        </main>
        <footer>
            <div class="container">
                &copy; 2025 My Website.  Static Version.
            </div>
        </footer>
    </div>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            // Fetch and insert page content
            fetch('page.html')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('page-content').innerHTML = data;
                })
                .catch(error => {
                    console.error('Error fetching page content:', error);
                    document.getElementById('page-content').innerHTML = '<p>Failed to load page content.</p>';
                });
        });
    </script>
</body>
</html>
```
