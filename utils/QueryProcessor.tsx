export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  else if (query.toLowerCase().includes("largest")) {
    var match = query.match(/\d+/g);
    if (match === null) {
      return "";
    } 
    var max = (Math.max(Math.max(parseInt(match[0]), parseInt(match[1])), parseInt(match[2])))
    return max.toString();
  }
  else if (query.toLowerCase().includes("plus")) {
    var match = query.match(/\d+/g);
    if (match === null) {
      return "";
    } 
    return (parseInt(match[0]) + parseInt(match[1])).toString();
  }
  else if (query.toLowerCase().includes("multiplied")) {
    var match = query.match(/\d+/g);
    if (match === null) {
      return "";
    } 
    return (parseInt(match[0]) * parseInt(match[1])).toString();
  }
  else if (query.toLowerCase().includes("both")) {
    var match = query.match(/\d+/g);
    if (match === null) {
      return "";
    }
    
    return (parseInt(match[0]) * parseInt(match[1])).toString();
  }
  else if (query.toLowerCase().includes("minus")) {
    var match = query.match(/\d+/g);
    if (match === null) {
      return "";
    }
    
    return (parseInt(match[0]) - parseInt(match[1])).toString();
  }

  return "";
}
