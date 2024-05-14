var db = require("../model/helper");

const isRelationshipActive = async (req, res, next) => {

    const relationships = req.relationships
    console.log("RELATIONSHIPS IDS IN ISACTIVE",relationships )
    //console.log("is relationship active", user_id, firstname)

    try{
        const relationshipCheck = await Promise.all(
            relationships.map(async (relationship) => {
                const result = await db(
                    `SELECT COUNT(user_id) AS count FROM users_relationships WHERE relationship_id= ${relationship.relationship_id};`
                );
                console.log("result.data in isactive", result.data);
                const userCount = result.data[0].count;
                return {
                    ...relationship,
                    active: userCount > 2
                };
            })
        );
console.log("RELATIONSHIPCHECK", relationshipCheck)
        req.checkedRelationships = relationshipCheck;
        next();

    } catch(err){
        console.log(err)
        res.status(400).send({ message: err.message });  
    }
}

module.exports = isRelationshipActive;