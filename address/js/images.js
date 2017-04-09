npm i clarifai@1.2.1
var Clarifai = require('clarifai'); 

Clarifai.initialize({
  "clientId": "7BIkzOxYNCDetmwuzXIPALVrVFxdGTPwFrnkUVZo", 
  "clientSecret": "OKRmO6QT9-hzEqR8wVeu9HNYAUa_W9bFOk1h7WJ8"
});

Clarifai.getTagsByUrl('img\nasavid_01.m4a', {
}).then(
  handleResponse,
  handleError
);

Clarifai.getTagsByImageBytes('R0lGODlhZAHIAPcAAKeno6Oinc3Do6iVeMe7o1ZEM...', {
}).then(
  handleResponse,
  handleError
)