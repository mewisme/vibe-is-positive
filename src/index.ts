import OpenAI from "openai";

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  throw new Error(
    "[vibe-is-positive] Missing OPENAI_API_KEY. Please set process.env.OPENAI_API_KEY"
  );
}

const client = new OpenAI({ apiKey });

function validateInput(num: number | bigint): string {
  if (typeof num !== "number" && typeof num !== "bigint") {
    throw new TypeError(`Expected a number or bigint, got ${typeof num}`);
  }
  return num.toString();
}

/**
 * Check if a number is positive
 */
export async function isPositive(num: number | bigint): Promise<boolean> {
  const value = validateInput(num);

  const res = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "Answer only with TRUE or FALSE." },
      { role: "user", content: `Is the number ${value} greater than 0?` }
    ],
  });

  return res.choices[0].message?.content?.trim() === "TRUE";
}

/**
 * Check if a number is negative
 */
export async function isNegative(num: number | bigint): Promise<boolean> {
  const value = validateInput(num);

  const res = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "Answer only with TRUE or FALSE." },
      { role: "user", content: `Is the number ${value} less than 0?` }
    ],
  });

  return res.choices[0].message?.content?.trim() === "TRUE";
}

/**
 * Check if a number is zero
 */
export async function isZero(num: number | bigint): Promise<boolean> {
  const value = validateInput(num);

  const res = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "Answer only with TRUE or FALSE." },
      { role: "user", content: `Is the number ${value} equal to 0?` }
    ],
  });

  return res.choices[0].message?.content?.trim() === "TRUE";
}
