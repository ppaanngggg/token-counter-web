const models = [
  {
    group: "OpenAI",
    models: [
      { name: "GPT-3.5", value: "gpt-3.5", hub: "Xenova/gpt-3.5-turbo" },
      {
        name: "GPT-3.5 Turbo",
        value: "gpt-3.5-turbo",
        hub: "Xenova/gpt-3.5-turbo",
      },
      { name: "GPT-4", value: "gpt-4", hub: "Xenova/gpt-4" },
      { name: "GPT-4 Turbo", value: "gpt-4-turbo", hub: "Xenova/gpt-4" },
      {
        name: "Embedding V3 large",
        value: "text-embedding-3-large",
        hub: "Xenova/text-embedding-ada-002",
      },
      {
        name: "Embedding V3 small",
        value: "text-embedding-3-small",
        hub: "Xenova/text-embedding-ada-002",
      },
      {
        name: "Embedding Ada 002",
        value: "text-embedding-ada-002",
        hub: "Xenova/text-embedding-ada-002",
      },
    ],
  },
  {
    group: "Anthropic",
    models: [
      {
        name: "Claude 3 Opus",
        value: "claude-3-opus",
        hub: "Xenova/claude-tokenizer",
      },
      {
        name: "Claude 3 Sonnet",
        value: "claude-3-sonnet",
        hub: "Xenova/claude-tokenizer",
      },
      {
        name: "Claude 3 Haiku",
        value: "claude-3-haiku",
        hub: "Xenova/claude-tokenizer",
      },
      {
        name: "Claude 2.1",
        value: "claude-2.1",
        hub: "Xenova/claude-tokenizer",
      },
      {
        name: "Claude 2.0",
        value: "claude-2.0",
        hub: "Xenova/claude-tokenizer",
      },
      {
        name: "Claude Instant 1.2",
        value: "claude-instant-1.2",
        hub: "Xenova/claude-tokenizer",
      },
    ],
  },
  {
    group: "Llama",
    models: [
      { name: "Llama 3", value: "llama-3", hub: "Xenova/llama-3-tokenizer" },
      { name: "Llama 2", value: "llama-2", hub: "Xenova/llama2-tokenizer" },
      {
        name: "Code Llama",
        value: "code-llama",
        hub: "Xenova/llama-code-tokenizer",
      },
    ],
  },
];

function getModel(group: string, model: string) {
  return models
    .find((m) => m.group.toLowerCase() === group)
    ?.models.find((m) => m.value === model);
}

export { models, getModel };
