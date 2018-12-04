/**
 * To save on data (and processing) query are numbers
 * To make the numbers easier to remember and use, the query enum is made
 */
export var Query;
(function (Query) {
    Query[Query["Initial"] = 0] = "Initial";
    Query[Query["Resposne"] = 1] = "Resposne";
    Query[Query["Message"] = 2] = "Message";
})(Query || (Query = {}));
