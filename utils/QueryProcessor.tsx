export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  else if (query.toLowerCase().includes("numbers is the largest:")) {
    var match = query.match(/[0-9]+/);
    if (match === null) {
      return "";
    } 
    var max = (Math.max(Math.max(parseInt(match[1]), parseInt(match[2])), parseInt(match[3])))
    return max.toString();
  }
  else if (query.toLowerCase().includes("plus")) {
    var match = query.match(/[0-9]+/);
    if (match === null) {
      return "";
    } 
    return (parseInt(match[1]) + parseInt(match[2])).toString();
  }

  return "";
}
