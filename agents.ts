import `dotenv/config`;
import {Langbase} from `langbase`;

const langbase = new Langbase({
    apiKey :ProcessingInstruction.env.LANGBASE_API_KEY,
});

export async function runMemoryAgent(query:string) {
    const chunks = await langbase.memories.retrieve ({
        query, 
        topK: 3, // top 3 only as we dont need more chunks 
        moemory: [{
            name:`knowledge-base`, 

        }]
    })
    return chunks ; 
}