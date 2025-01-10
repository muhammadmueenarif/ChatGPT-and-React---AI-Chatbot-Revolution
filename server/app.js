const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
require("dotenv").config();

//server running port
const port = 8000;

//express server
const app = express();

//cors for api error handling
app.use(cors());

app.use(express.json());

//get data
app.get("/", async (req, res) => {
  res.send("Hello world");
});

app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;
  // Add your logic here to process the messages and generate a response.
  // For example, you could use a pre-trained model like GPT-3.5-turbo to generate a response.
  // You can use the provided messages array to access the content and role of each message.
  // You can also use the provided 'data' object to access the GPT-3.5-turbo model configuration.

  // For demonstration purposes, let's simulate a response by returning the first message in the array.
  // return res.json({
  //     choices: [
  //         {
  //             message: messages[0].content,
  //         },
  //     ],
  // });

  //setting gpt model.
  const data = {
    module: "gpt 3.5-turbo",
    messages: [
      {
        role: "user",
        content: "I want to use Prompts.",
      },
    ],
  };

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        ...data,
        ...messages,
      }), //json data to proper format.
    });

    const resData = await response.json();
    console.log(resData, "Response received");
    res.send(resData); // sending response to client.
  } catch (error) {
    console.error("Error:", error);
    // res.status(500).send('Server Error');  // sending 500 error if any error occurs.
  }
});

app.listen(port, () => {
  console.log(`Example app at http://localhost:${port}`);
});
