import jwt from "jsonwebtoken";

const auth = (req, res, next) => {

    try {

        // Get token from Authorization header (format: "Bearer token" or just "token")
        const authHeader = req.headers.authorization;
        let token = null;

        if (authHeader) {
            // If it has Bearer prefix, remove it
            token = authHeader.startsWith('Bearer ') 
                ? authHeader.slice(7) 
                : authHeader;
        }

        console.log("AUTH HEADER:", authHeader);
        console.log("EXTRACTED TOKEN:", token);

        if (!token) {
            console.log("NO TOKEN FOUND");
            return res.json({
                success: false,
                message: "Your account cannot be authenticated."
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        console.log("DECODED:", decoded);
        req.email = decoded.email; // Store email in request for later use

        next();

    } catch (error) {

        console.log("JWT VERIFY ERROR:", error.message);

        return res.json({
            success: false,
            message: "Your account cannot be authenticated."
        });

    }

};

export default auth;
