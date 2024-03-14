export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  else if (query.toLowerCase().includes("name?")) {
    return (
      "My name is Git Goon 1. Why am I Git Goon 1? Because I am the greatest. " +
      "The greatest Git Goon there ever was, there is, and there will ever be. " +
      "Long live me."
    );
  }

  return "";
}
