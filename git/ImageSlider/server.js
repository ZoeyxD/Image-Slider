const express = require('express');
const path = require('path');
const app = express();

const PORT = 8080;

// Caching configuration
app.use(express.static(path.join(__dirname, 'public'), {
    setHeaders: (res, path) => {
        if (/\.(jpg|jpeg|png|gif|ico)$/.test(path)) {
            // Images: Cache for 1 year
            res.setHeader('Cache-Control', 'public, max-age=31536000'); // 1 year
        } else if (/\.(css)$/.test(path)) {
            // CSS: Cache for 1 month
            res.setHeader('Cache-Control', 'public, max-age=2592000'); // 1 month
        } else if (/\.(js)$/.test(path)) {
            // JavaScript: Cache for 1 month
            res.setHeader('Cache-Control', 'public, max-age=2592000'); // 1 month
        } else if (/\.(html)$/.test(path)) {
            // HTML: No caching or short cache
            res.setHeader('Cache-Control', 'no-cache'); // or 'max-age=0'
        }
    }
}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Error handling for 404
app.use((req, res, next) => {
    res.status(404).send('404: File Not Found');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
