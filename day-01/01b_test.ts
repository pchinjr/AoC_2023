import { assertEquals } from "https://deno.land/std/assert/mod.ts";

import processFile, { parseAndConvertNumbers, createTwoDigitNumber, sumTwoDigitNumbers } from './01b.ts';

async function createTempFile(content: string): Promise<string> {
  const tempFile = await Deno.makeTempFile();
  await Deno.writeTextFile(tempFile, content);
  return tempFile;
}

Deno.test({
  name: "Process Text - Part 2",
  async fn() {
    const tempFilePath = await createTempFile(`nrkbbdqdthree1fkbfivefourqlksbfdsjtthplhjhlvgh
    176seven
    3fourfiveseven681
    twone
    7b`);
    const output = await processFile(tempFilePath);
    assertEquals(output, 180);
    await Deno.remove(tempFilePath);
  },
});

Deno.test({
  name: "Parse and Convert Numbers",
  fn() {
    assertEquals(parseAndConvertNumbers("one"), "1");
    assertEquals(parseAndConvertNumbers("twothree"), "23");
    assertEquals(parseAndConvertNumbers("fourfivesix"), "456");
    assertEquals(parseAndConvertNumbers("seveneightninetwo"), "7892");
    assertEquals(parseAndConvertNumbers("twone"), "21");
    assertEquals(parseAndConvertNumbers("oneight"), "18");
  },
});

Deno.test({
  name: "Create Two-Digit Numbers",
  fn() {
    assertEquals(createTwoDigitNumber(["1", "2"]), 12);
    assertEquals(createTwoDigitNumber(["3"]), 33);
    assertEquals(createTwoDigitNumber(["4", "5", "6"]), 46);
  },
});

Deno.test({
  name: "Sum Two-Digit Numbers",
  fn() {
    assertEquals(sumTwoDigitNumbers([12, 34, 56]), 102);
    assertEquals(sumTwoDigitNumbers([77, 88]), 165);
    assertEquals(sumTwoDigitNumbers([11, 22, 33, 44]), 110);
  },
});