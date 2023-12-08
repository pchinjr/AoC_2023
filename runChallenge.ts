// runChallenge.ts
async function runChallenge(day: string, part: string) {
    try {
        const modulePath = `./day-${day.padStart(2, '0')}/01${part.toLowerCase()}.ts`;
        const challenge = await import(modulePath);
        const filePath = `./day-${day.padStart(2, '0')}/input.txt`;
        const result = await challenge.default(filePath);
        console.log(`Result for Day ${day}, Part ${part.toUpperCase()}:`, result);
    } catch (error) {
        console.error('Error running the challenge:', error);
    }
}

const [day, part] = Deno.args;

if (!day || !part) {
    console.error('Please specify a day and part (e.g., `deno run --allow-read runChallenge.ts 1 a`)');
    Deno.exit(1);
}

await runChallenge(day, part);
