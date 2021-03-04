import { NextFunction, Request, Response } from "express";

abstract class isLogged {
    public static logged(req: Request, res: Response, next: NextFunction) {
        if (req.user) {
            next();
        } else {
            res.status(401).json({
                message: "Auth not valid",
            });
        }
    }
}

export default isLogged;
