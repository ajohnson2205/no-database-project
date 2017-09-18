var cats = [
  {id: 111, firstName: "Ted", lastName: "Katt"},
  {id: 222, firstName: "Gary", lastName: "Katt"}
];
var id = 0;


module.exports = {

  //A POST request
  create: (req, res) => {
    const {firstName, lastName} = req.body;
    cats.push({id, firstName, lastName});
    id++;
    res.status(200).send(cats);
  },

  //A GET request
  read: (req, res) => {
    res.status(200).send(cats);
  },


  //A PUT request
  modify: function(req, res) {
    var {firstName, lastName} = req.body
    var idToCheck = req.params.id
    var indexToChange = cats.findIndex(cat => cat.id == idToCheck)
    cats[indexToChange] = {
      id: idToCheck,
      firstName: firstName || cats[indexToChange].firstName,
      lastName: lastName || cats[indexToChange].lastName

    }
    res.status(200).json(cats);
  },

  //A DELETE requests
  delete: function(req, res) {
    var idToDelete = req.params.id
    var indexToDelete = books.findIndex(book => book.id == idToDelete)
    books.splice(indexToDelete, 1)
    res.status(200).json(books)
  }
}
