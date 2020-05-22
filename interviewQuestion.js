var data = {
  Results: [
    {
      Name: "Frank Jones",
      Department: "North America",
      Sales: 2500,
    },
    {
      Name: "Sally Smith",
      Department: "North America",
      Sales: 2200,
    },
    {
      Name: "Ed Kramer",
      Department: "Europe",
      Sales: 1700,
    },
    {
      Name: "Susan Johnson",
      Department: "Asia",
      Sales: 2000,
    },
  ],
};

// output will be an object with two properties, one with an array value consisting of names exceeding $2000s in sales, and the other with an average of total sales

var exceed2000AndAverage = function (obj) {
  if (obj.Results.length === 0) {
    return "empty array";
  }

  var finalAnswer = {};
  var result = [];
  var sum = 0;
  for (var index = 0; index < obj.Results.length; index++) {
    var currentElement = obj.Results[index];
    if (currentElement["Sales"] > 2000) {
      result.push(currentElement["Name"]);
    }
    sum += currentElement["Sales"];
  }
  var total = sum / obj.Results.length;
  finalAnswer[">$2000"] = result;
  finalAnswer["AVG"] = "$" + total;
  return finalAnswer;
};

exceed2000AndAverage(data);
