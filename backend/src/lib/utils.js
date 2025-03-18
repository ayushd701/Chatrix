import jwt from "jsonwebtoken"

export const generateToken = (userId , res) => {
    const token = jwt.sign({userId} , process.env.JWT_SECRET , {
        expiresIn: "7d"
    } )
    res.cookie("jwt", token , {
        maxAge : 7*24*60*60*1000, // 7 days to ms
        httpOnly: true , // http only cookie , prevents js access to cookie(prevents xss attacks)
        sameSite: "strict", // prevents csrf attacks
        secure: process.env.NODE_ENV !== "development", // Ensures cookies are only sent over HTTPS
    });
    return token;
}