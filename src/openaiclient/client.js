import OpenAI from "openai";
import { config } from "dotenv";

if (process.env.NODE_ENV !== "production") {
  config();
}
const OPENAIAPIKEY = process.env.OPENAIAPIKEY || "";
const client = new OpenAI({
  apiKey: OPENAIAPIKEY,
});
const model = "gpt-3.5-turbo-1106";

const openaiclient = {
  getFunctionCall: async function (input) {
    let response = {};
    const messages = [
      {
        role: "system",
        content:
          "Don't make assumptions about what values to plug into functions. Ask for clarification if a user request is ambiguous. Suggest that user inform what they want to see or navigate to in the portfolio web application. Don't add line breaks in your text response",
      },
    ];
    messages.push({
      role: "user",
      content: `${input}`,
    });
    console.log(OPENAIAPIKEY);
    const completion = await client.chat.completions.create({
      model: model,
      messages: messages,
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      seed: null,
      tools: [
        {
          type: "function",
          function: {
            name: "navigateTo",
            description:
              "Navigate to the right relative path in the portfolio web application by interpreting the given input parameter. Possible options are 'home' for Home page or About page, 'projects' for Projects page, 'career' for Career page or 'contact' for the Contact Us page. Default should be 'home'",
            parameters: {
              type: "object",
              properties: {
                path: { type: "string", description: "Path to navigate to" },
              },
              required: ["path"],
            },
          },
        },
      ],
    });
    const message = completion.choices[0].message;
    if (message.content) {
      response.textResponse = message.content;
    }
    if (
      completion.choices[0].finish_reason === "tool_calls" &&
      message.tool_calls &&
      message.tool_calls[0].function
    ) {
      response.functionResponse = message.tool_calls[0].function;
    }
    return response;
  },
};

export default openaiclient;
