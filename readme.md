# exercise: Creating a JSON file

We will be creating a JSON file to use in our next exercise.

## Learning

- Express Server
- JSON files

## Achieving

- A server that serves a JSON file that you created.

### Create a Server with Express

- [ ] Install the project's dependencies using `npm install`
- [ ] Start the server by running `index.js` using `npm run dev`.
- [ ] Visit your running server at `http://localhost:3000` with a web browser.

## Creating the JSON

- Create a new subfolder at the top level, called `api`.
- Within `api`, create `answers.json`
- This JSON should contain the following key-value pairs: name, quest, favorite color.
- _Think back to a previous project where you were provided JSON and use that as a reference for syntax_


## Serving the JSON

- [ ] In your server, use a GET method to serve your 'answers.json' file. If you have done this correctly, when you navigate to the server in the browser at the route of the GET, you will see your JSON.

## Outcome 

- A server that serves a JSON file that you created.

## Going Further

- Add multiple values to each key, either as an array or an object. This would allow for multiple names, quests, and favorite colors. 
