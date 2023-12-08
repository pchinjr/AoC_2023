# 🎄 Advent of Code with TypeScript-Deno Runner 🌟

## 🎁 Introduction

Welcome to this festive and fun journey through the Advent of Code challenges! Whether you're a seasoned coder or just starting, this repository is your sled ride into solving these exciting puzzles using TypeScript and Deno. No prior experience? No problem! Let's unwrap the mysteries of programming together!

## ❓ What is Advent of Code?

Advent of Code 🎅 is an enchanting online event where participants unwrap a daily programming puzzle from December 1st to 25th. Each day is like a new door on an Advent calendar, revealing two parts of a challenge: a warm-up task followed by a more intricate extension. 

## 🌐 What are TypeScript and Deno?

**TypeScript** is JavaScript with a sprinkle of magic 🪄. It adds static types, helping you catch sneaky bugs early and making your code as sturdy as a Christmas tree.

**Deno** is like Santa's modern sleigh for JavaScript and TypeScript 🛷. It's secure, fast, and built for the modern web. Think of Node.js but with a fresh sprinkle of holiday cheer.

## 🚀 Setup

To kickstart your coding adventure, you'll need Deno in your workshop. Download and install it from [Deno's official website](https://deno.land/).

## 📁 Repository Structure

Each day's challenge has its cozy little cabin:
- `day-01/`
  - `01a.ts` 📜 (Solution for Part A)
  - `01b.ts` 📜 (Solution for Part B)
  - `input.txt` 💌 (Input data for the day)

And so on for each jolly day of Advent (e.g., `day-02/`, `day-03/`, ...).

## 🏃‍♂️ How to Use the Runner

1. **Navigate to the North Pole (Repository Root):**
   Open a terminal and sled to the root directory of this repository.

2. **Run a Challenge:**
   To ignite the Christmas lights on a specific challenge:
   ```bash
   deno run --allow-read runChallenge.ts [day] [part]
   ```
   Replace `[day]` with the day number (like `1`, `2`, `3`, ...) and `[part]` with `a` or `b` for the challenge part.

   Example:
   ```bash
   deno run --allow-read runChallenge.ts 1 a
   ```
   This command magically runs Part A of Day 1's challenge.

3. **Behold the Results:**
   The output, twinkling like Christmas lights, will display in the terminal, showing your solution's result for the chosen day and part.

## 🖊️ Writing Solutions

Each solution file (like `01a.ts`) is a letter to Santa, exporting a default async function that takes the path to a wish list (file path). Write your solution logic inside, process the wish list, and return a festive result.

Example template:
```typescript
async function solveChallenge(filePath: string): Promise<any> {
    // Your solution magic here
}

export default solveChallenge;
```

## 🤝 Contributing and Support

Join Santa's workshop! Contribute by adding your solutions or enhancing the sleigh (setup). Stuck on a puzzle? Open an issue in the repository, and we'll share some holiday spirit (and help)!

## 🎉 Conclusion

This setup is your ticket to a fun-filled coding journey through the Advent of Code. Grab your hot cocoa, don your coding hat, and let's jingle all the way through these puzzles! 🎶 Happy coding, and enjoy the challenges!

## Process 

I started out with a folder structure, then created a CLI jig, then writing unit tests and documentation. Incorrect answers led me to break down functions further and adding tests as I go. 