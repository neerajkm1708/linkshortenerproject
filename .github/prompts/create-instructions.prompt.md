---
name: create-instructions
description: Describe when to use this prompt
---
agent: instructions-generators
model: claude-sonnet-4.6

Take a instriction below and generate an agent instruction .md file for it in the /docs directory. if a .md file is provided then use that, otherwise generate an appropriatefile name based on generate content. Make sure instructions are concise and not to long Make sure to update the agents .md file to include the new agent and its description. If no information is provided, proppt the user to provide necessary details about the architecture or coding standard to generate the instruction file.