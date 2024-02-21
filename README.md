# Method Financial Node Sandbox

This example server builds in all of Method's Node library to give you a working playground to try different requests.

## Requirements

 - A machine with node and npm installed (this was written using node v21.1.0)

## Installation

 - Clone this repo `git clone https://github.com/ossiggy/method-node-sandbox.git`
 - `cd` into the repo and run `npm install`
 - Create a `.env` file in the root directory of this repo and provide the values listed in `env_example`
 - Run the server with `npm run start`

## Usage

 - This is to be used as a test server to run locally.
 - If you wish to test the Method element, you can change the `entity_id` in `public/app.js` on line 40 and head to the URL you are running this on (ex: `http://localhost:8080`) to see the element rendered.  Also ensure that the `env` on line 2 of that file matches the `env` you are testing in.