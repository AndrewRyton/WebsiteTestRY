import { describe, expect, it } from "vitest";
import { serviceTerms } from "@/lib/service-terms";

describe("PDF service terms", () => {
  it("offers a two-week trial", () => expect(serviceTerms.trialWeeks).toBe(2));
  it("includes up to five client accounts", () => expect(serviceTerms.clientAccounts).toBe(5));
  it("includes 15 weekly exports", () => expect(serviceTerms.weeklyExports).toBe(15));
  it("requires no credit card", () => expect(serviceTerms.creditCardRequired).toBe(false));
  it("does not automatically become paid", () => expect(serviceTerms.automaticPaidConversion).toBe(false));
  it("has a $299 introductory monthly rate", () => expect(serviceTerms.monthlyPriceUSD).toBe(299));
});