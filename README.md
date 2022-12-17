# Newsletter App

## Run the App

In order to run the app you need to:

- Clone the repository to your local machine
- Install dependencies with `npm install`
- Run `npm start` to get the server going

For the mailchimp functionality to work you need to follow the steps
in the [MailChimp API](#mailchimp-api) section.

## Tools

- For the server Express.js is used
- Styling is done with plain CSS and Bootstrap
- Mailchimp API is used to submit to the newsletter

## Mailchimp API

To set up the Mailchimp Api you need to configure API_KEY and LIST_ID in the .env file.
To get those values you need to create an account on Mailchimp and create a list.
Then you can find the API_KEY and LIST_ID in the Mailchimp dashboard.
