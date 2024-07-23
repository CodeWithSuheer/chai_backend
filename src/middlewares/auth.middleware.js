import { asyncHandler } from "../utils/asyncHandler.js";

export const verifyJWT = asyncHandler(async (req, res, next) => {
    const token = req.cookie?.accessToken || req.header("Authorization")?.replace("bearer ", "")
})