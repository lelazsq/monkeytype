import * as FunboxList from "./funbox/funbox-list";
import { Wordset } from "../utils/misc";
import Config from "../config";

let currentWordset: Wordset | null = null;

export async function withWords(words: string[]): Promise<Wordset> {
  const wordFunbox = FunboxList.get(Config.funbox).find(
    (f) => f.functions?.withWords
  );
  if (wordFunbox?.functions?.withWords) {
    return wordFunbox.functions.withWords(words);
  }
  if (currentWordset == null || words !== currentWordset.words) {
    currentWordset = new Wordset(words);
  }
  return currentWordset;
}
