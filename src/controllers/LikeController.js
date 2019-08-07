const Dev = require('./../models/Dev');

module.exports = {
    async index( req, res ){
        const { user } =  req.params;

        const loggedDev = await Dev.findById( user );

        const listUser = await Dev.find({
            $and:[
                { _id: { $ne: user } },
                { _id: { $nin: loggedDev.likes } },
                { _id: { $nin: loggedDev.deslikes } }
            ]
        });

        return res.json(listUser);
        
    },
    async store( req, res ){
        const { devId } = req.params;
        const { user } = req.headers;

        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById( devId );

        if( !targetDev ){
            return res.status(400).json({error:'Dev não existe.'});
        }

        loggedDev.likes.push(targetDev._id);
       await  loggedDev.save();

        return res.json(loggedDev);
    }
};
