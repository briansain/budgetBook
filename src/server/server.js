const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

const recipeApi = require('./routes/recipeApi');
const budgetApi = require('./routes/budgetApi');
const transactionApi = require('./routes/transactionApi');

const recipeService = require('./services/recipe.services');
const tagService = require('./services/tag.service');
const budgetService = require('./services/budget.services');
const budgetCategoryService = require('./services/budgetCategory.services');
const transactionService = require('./services/transaction.services');

const port = process.env.PORT || 3000;
const clientDirectory = process.env.CLIENTDIRECTORY || './dist';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(clientDirectory));
app.use('/api', recipeApi);
app.use('/api', budgetApi);
app.use('/api', transactionApi);

app.get('*', (req, res) => {
    res.sendFile('index.html', { root: clientDirectory });
});

app.listen(port, () => {
    console.log(`Server started! Port: ${port}`);
    recipeService.seedDatabase();
    tagService.seedDatabase();
    budgetService.seedDatabase();
    budgetCategoryService.seedDatabase();
});