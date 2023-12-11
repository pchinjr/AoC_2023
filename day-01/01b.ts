// export function convertWordsToNumbers(input: string): string {
//     const numberWords: { [key: string]: string } = {
//         one: '1', two: '2', three: '3', four: '4', five: '5', 
//         six: '6', seven: '7', eight: '8', nine: '9'
//     };
//     let replacedString = input;

//     // Sort number words by length in descending order to avoid partial matches
//     const sortedNumberWords = Object.entries(numberWords).sort((a, b) => b[0].length - a[0].length);

//     sortedNumberWords.forEach(([word, digit]) => {
//         replacedString = replacedString.replace(new RegExp(word, "g"), digit);
//     });

//     return replacedString;
// }

export function parseAndConvertNumbers(input: string): string {
    const numberWords: { [key: string]: string } = {
        one: '1', two: '2', three: '3', four: '4', five: '5', 
        six: '6', seven: '7', eight: '8', nine: '9'
    };

    let result = '';
    let i = 0;

    while (i < input.length) {
        let found = false;

        // Check each substring starting from 'i'
        for (let j = input.length; j > i; j--) {
            const currentSubstring = input.substring(i, j);
            if (currentSubstring in numberWords) {
                result += numberWords[currentSubstring];
                i = j; // Move 'i' to the end of the matched substring
                found = true;
                break;
            }
        }

        if (!found) {
            result += input[i];
            i++;
        }
    }

    return result;
}

export function createTwoDigitNumber(digits: string[]): number {
    if (digits.length === 1) {
        // If there's only one digit, duplicate it
        return parseInt(digits[0] + digits[0]);
    } else if (digits.length >= 2) {
        // Use the first and last digit if there are two or more digits
        return parseInt(digits[0] + digits[digits.length - 1]);
    } else {
        // Return 0 if there are no digits
        return 0;
    }
}

export function sumTwoDigitNumbers(numbers: number[]): number {
    return numbers.reduce((acc, number) => acc + number, 0);
}


async function processFile(filePath: string): Promise<number> {
    const data = await Deno.readTextFile(filePath);
    const lines = data.split('\n');
    const twoDigitNumbers: number[] = [];

    for (const line of lines) {
        const replacedLine = parseAndConvertNumbers(line);
        const digits = replacedLine.match(/\d/g) || [];
        twoDigitNumbers.push(createTwoDigitNumber(digits));
    }

    return sumTwoDigitNumbers(twoDigitNumbers);
}

export default processFile;


