var cats = [
  {id: 111, firstName: "Ted", lastName: "Katt"},
  {id: 222, firstName: "Gary", lastName: "Katt"}
];
var id = 0;


module.exports = {

  //For POST requests
  create: (req, res) => {
    const {firstName, lastName} = req.body;
    cats.push({id, firstName, lastName});
    id++;
    res.status(200).send(cats);
  },

  read: ( req, res ) => {
    res.status(200).send(cats);
  }




};
