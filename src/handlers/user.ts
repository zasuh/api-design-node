import prisma from "../db";
import { comparePasswords, createJWT, hashPassword } from "../modules/auth";

export const createNewUser = async (req, res, next) => {
    try {
        const user = await prisma.user.create({
            data: {
                username: req.body.username,
                password: await hashPassword(req.body.password)
            }
        });
        const token = createJWT(user);
        res.json({ token });
    } catch (err) {
        err.type = 'input';
        next(err);
    }
};

export const signIn = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            username: req.body.username
        }
    });
    const isValid = await comparePasswords(req.body.password, user.password);

    if (!isValid) {
        res.status(401);
        res.json({ message: 'Nope' });
        return;
    }

    const token = createJWT(user);
    res.json({ token });
}