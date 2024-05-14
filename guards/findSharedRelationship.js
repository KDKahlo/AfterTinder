var db = require("../model/helper");

const findSharedRelationship = async (req, res, next) => {
    const {firstname} = req.body
    const user_id = req.user_id

    try {
        const result = await db(
            `SELECT DISTINCT ur1.user_id, ur1.relationship_id FROM users u1 JOIN users_relationships ur1 ON u1.id = ur1.user_id JOIN relationships r1 ON ur1.relationship_id = r1.id JOIN users_relationships ur2 ON r1.id = ur2.relationship_id JOIN users u2 ON ur2.user_id = u2.id WHERE u1.id = ${user_id} AND u2.firstname = "${firstname}";`
          );
          
          if (result.data.length){
            const relationships= result.data
            req.relationships = relationships
          }
          next()
          
    } catch(err){
        console.log(err)
        res.status(400).send({ message: err.message });  
    }

}
module.exports = findSharedRelationship