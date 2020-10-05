const express = require('express');
const app = express();


// ROUTES
app.get('/', (req, res) => {
    res.send('We are on the homepage')
});

app.get('/posts', (req, res) => {
    res.send('We are on the posts page')
});

//SERVER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));