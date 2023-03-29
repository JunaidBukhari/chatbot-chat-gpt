import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});
console.log(process.env.REACT_APP_OPENAI_API_KEY);
export const openai = new OpenAIApi(configuration);

export function generatePrompt(question, type) {
  console.log(question, type);
  if (type === 'pet') {
    const capitalizedAnimal =
      question[0].toUpperCase() + question.slice(1).toLowerCase();
    return `Suggest three names for an animal that is a superhero.
    
    Animal: Cat
    Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
    Animal: Dog
    Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
    Animal: ${capitalizedAnimal}
    Names:`;
  }
  if (type === 'email') {
    const capitalizedName =
      question[0].toUpperCase() + question.slice(1).toLowerCase();
    return `Suggest three names for an email id which is not in use of any one.
    
    Name: Junaid
    Suggestions: junaid_2023, junaid_09, junaid_001
    Name: Asad
    Suggestions: asad_12x, cool_asad, imAsad
    Name: ${capitalizedName}
    Suggestions:`;
  }
  if (type === 'question') {
    return question;
  }
  if (type === 'company') {
    const capitalizedIndustryName =
      question[0].toUpperCase() + question.slice(1).toLowerCase();
    return `Suggest three names for a company that can be used as professional name.
    
    Industry: Software
    Names: Web Giant, Solutions Geek, Developer Force
    Industry: ${capitalizedIndustryName}
    Names:`;
  }
}
