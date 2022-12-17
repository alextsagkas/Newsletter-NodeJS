import express from "express";
import bodyParser from "body-parser";
import client from "@mailchimp/mailchimp_marketing";

import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const apiKey = process.env.API_KEY;
const server = apiKey.slice(apiKey.length - 4, apiKey.length);
const listId = process.env.LIST_ID;

client.setConfig({
  apiKey: apiKey,
  server: server,
});

app.post("/", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;

  // Add contact to audience
  const data = {
    email_address: email,
    status: "subscribed",
    merge_fields: {
      FNAME: firstName,
      LNAME: lastName,
    },
  };

  async function run() {
    try {
      const response = await client.lists.addListMember(listId, data);
      res.sendFile(`${process.cwd()}/success.html`);
    } catch (error) {
      res.sendFile(`${process.cwd()}/failure.html`);
    }
  }

  run();
});

app.post("/failure", (req, res) => {
  res.redirect("/");
});

app.get("/", (req, res) => {
  res.sendFile(`${process.cwd()}/signup.html`);
});

app.listen(PORT, () => {
  console.log(`The app is running at port ${PORT}`);
});
