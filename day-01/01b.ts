export function processText(data: string): number {
    const numberWords: { [key: string]: string } = {
        one: '1', two: '2', three: '3', four: '4', five: '5', 
        six: '6', seven: '7', eight: '8', nine: '9'
    };
    const numWordRegex = new RegExp(Object.keys(numberWords).join("|"), "g");

    const lines = data.split('\n');
    let sum = 0;

    for (const line of lines) {
        
        const replacedLine = line.replace(numWordRegex, match => {
            return numberWords[match as keyof typeof numberWords] ?? match;
        });

        const digits = replacedLine.match(/\d/g);

        if (digits && digits.length >= 2) {
            const firstDigit = parseInt(digits[0]);
            const lastDigit = parseInt(digits[digits.length - 1]);
            const twoDigitNumber = firstDigit * 10 + lastDigit;
            sum += twoDigitNumber;
            console.log(sum)
        } else if (digits && digits.length === 1) {
            // Handle the case with a single digit
            const digit = parseInt(digits[0]);
            const twoDigitNumber = digit * 10 + digit;
            sum += twoDigitNumber;
        } else if (replacedLine.trim() !== "") {
            // Handle the case of non-empty lines with no digits
            // Add an appropriate default value (e.g., 0)
            sum += 0;
        }
    }

    return sum;
}

async function processFile(filePath: string): Promise<number> {
    const data = await Deno.readTextFile(filePath);
    return processText(data);
}

export default processFile;
