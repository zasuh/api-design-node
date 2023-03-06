import * as user from '../user';

describe('user handler', () => {
    it('should create a new user', async () => {
        const req = { 
            body: {
                username: 'Hello',
                password: 'Hi'
            }
        };
        const res = {
            json({token}) {
                expect(token).toBeTruthy()
            }
        };
        await user.createNewUser(req, res, () => {});
    });
});