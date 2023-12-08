// 01b_test.ts
import { processText } from './01b.ts';
import { assertEquals } from "https://deno.land/std/assert/mod.ts";

Deno.test({
  name: "Process Text",
  fn() {
    const input = `nrkbbdqdthree1fkbfivefourqlksbfdsjtthplhjhlvgh
    176seven
    3fourfiveseven681
    7b`;
    const output = processText(input);
    assertEquals(output, 159);
  },
});
