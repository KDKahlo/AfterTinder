var db = require("../model/helper");

//Check:
//If relationship exists, go to next()
//If relationship doesn't exist, create relationship in relationships table and then go next() 
//next() is the function in users.js that will update the users_relationships table with the new user.
const relationshipExists = async (req, res, next) => {
    const { code } = req.body;
    try{
       const result = await db(`SELECT id FROM relationships WHERE code = "${code}"`)
        if (result.data.length > 0) {
            // Relationship exists, proceed to the next middleware or route handler
            next();
          } else {
            await db(
                `INSERT INTO relationships (code) VALUES ("${code}")`
              );
              // Get the relationship_id that corresponds with the code we entered.
              const result = await db(`SELECT id FROM relationships WHERE code = "${code}" `)
              const relationship_id = result.data[0].id;      
              req.relationship_id = relationship_id
              console.log("////////////////", relationship_id)
          }
          next();
    } catch (err) {
        console.log(err)
        res.status(400).send({ message: err.message });
      }
}

module.exports = relationshipExists;
