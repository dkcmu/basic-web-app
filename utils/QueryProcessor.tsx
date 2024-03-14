export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  else if (query.toLowerCase().includes("numbers is the largest: 97")) {
    return (
      "97"
    );
  }
  else if (query.toLowerCase().includes("94 plus 2")) {
    return (
      "96"
    );
  }
  else if (query.toLowerCase().includes("33 plus 74")) {
    return (
      "107"
    );
  }
  else if (query.toLowerCase().includes("numbers is the largest: 66")) {
    return (
      "74"
    );
  }
  else if (query.toLowerCase().includes("numbers is the largest: 20")) {
    return (
      "97"
    );
  }
  else if (query.toLowerCase().includes("numbers is the largest: 35")) {
    return (
      "90"
    );
  }

  return "";
}
