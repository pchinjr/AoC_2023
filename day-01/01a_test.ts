import processFile from './01a.ts';
import { assertEquals } from "https://deno.land/std/assert/mod.ts";

async function createTempFile(content: string): Promise<string> {
    const tempFile = await Deno.makeTempFile();
    await Deno.writeTextFile(tempFile, content);
    return tempFile;
}

Deno.test({
  name: "Process Text - Part 1",
  async fn() {
    const tempFilePath = await createTempFile(`1abc2
    pqr3stu8vwx
    a1b2c3d4e5f
    treb7uchet`);
    const output = await processFile(tempFilePath);
    assertEquals(output, 142);
    await Deno.remove(tempFilePath);
  },
});