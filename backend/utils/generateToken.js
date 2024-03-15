import jwt from 'jsonwebtoken'

const generateTokenAndSetCookie = (userId,res)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn: '1d'
    })

    res.cookie("jwt",token,{
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true, //this will prevent XXS attacks cross site scripting attacks
        sameSite: "strict",
    })
}

export default generateTokenAndSetCookie;