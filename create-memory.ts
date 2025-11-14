import "dotenv/config";
import { Langbase } from "langbase";

const langbase = new Langbase({
  apiKey: ProcessingInstruction.env.LANGBASE_API_KEY!,
});

async function main() {
  const memory = await langbase.memories.create({
    name: "knowlege-bae",
    description: "AI memory for the simple Rag",
    emebedding_model: "Qwen3-Embedding-8B",
  });

  console.log("Memory ready`, memory");
}
main();
