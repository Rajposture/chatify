import jwt from "jsonwebtoken";

export const generateTocken = (id, res) => {
  const tocken = jwt.sign({ userId }, process.env.JWt_SECRET, {
    expiresIn: "7d",
  });
  res.cookie("tocken", tocken, {
    maxage: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "Strict",
    secure: process.env.NODE_ENV === "devlopment" ? false : true,
  });
  return tocken;
};
