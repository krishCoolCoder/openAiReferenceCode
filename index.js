import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: "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",
});
// const openai = new OpenAIApi(configuration);
// const response = await openai.createCompletion({
//   model: "text-davinci-002",
//   prompt: "Say this is a test",
//   max_tokens: 7,
//   temperature: 0,
// });

// console.log(response.data.choices[0].text);

// import { Configuration, OpenAIApi } from "openai";
// const configuration = new Configuration({
//   apiKey: "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",
// });
// const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

// console.log("The response is this : ", response.data.data);

// `The following AI tool helps youtubers identify if a comment can should be replied to or not. Questions and or asking for advice are good examples of when a reply is needed.\n\n` +
//     `User: John Smith\n` +
//     `Comment : That was a great video, thanks!\n` +
//     `Should Reply: No\n\n` +
//     `User: Sue Mary\n` +
//     `Comment: I'm stuck on step four, how do I do it?` +
//     `Should Reply: Yes\n\n` +
//     `User: Saikrishna` +
//     `Comment: this video sucks so bad. I will not watch it.` +
//     `Should Reply:`,

const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
  model: "text-davinci-002",
  prompt:
    'I need you to answers all the questions in a json format and remember that the format has to be in spevific format only. The json format is "{ question : "the question", answer : "the answers"}. The question is the parameter that you have to use all the text that if fed to you and the answer is the paramer that you feed all the answer. so what is pythogorous theorem?.',
  max_tokens: 70,
  temperature: 0,
});

// we can only hold  20,480 English characters

let responseData = response.data.choices[0].text;

console.log(
  "The response is this : ",
  responseData.substring(0, responseData.indexOf("}") + 1)
);
