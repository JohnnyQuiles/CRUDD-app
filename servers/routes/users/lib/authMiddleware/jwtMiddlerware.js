const jwt = require('jsonwebtoken');

const jwtMiddleware = async (req, res, next) => {
    try {
        if (req.headers && req.headers.authorization) {
            const slicedToken = req.headers.authorization.slice(7);
            const decodedToken = jwt.verify(slicedToken, process.env.SECRET_KEY);

            res.locals.decodedToken = decodedToken;
            next();
        } else {
            throw { message: 'Invalid authorization' };
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log('ERROR:' , error); 
    }
}

module.exports = {
    jwtMiddleware,
}