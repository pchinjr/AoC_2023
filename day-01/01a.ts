async function processFile(filePath: string): Promise<number> {
    const data = await Deno.readTextFile(filePath);
    const lines = data.split('\n');
    let sum = 0;

    for (const line of lines) {
        const digits = line.match(/\d/g) || [];
        if (digits.length > 0) {
            const firstDigit = digits[0];
            const lastDigit = digits[digits.length - 1];
            sum += parseInt(firstDigit + lastDigit);
        }
    }
    return sum;
}

export default processFile;
