const express = require('express');
const path = require('path');
const app = express();
const PORT = 2555;

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, 'frontend')));

// Fallback for SPA routing if needed (though we use separate HTML files)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Meo Mix Website running at http://localhost:${PORT}`);
});
