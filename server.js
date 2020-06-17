const express = require('express');
const app = express();
const PORT = process.env.PORT || 2020

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  };

app.listen(PORT, function(err) {
    if(err){throw err}
    console.log(`Server has started on port ${PORT}`)
})