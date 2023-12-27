import { UserService } from '@services/UserService';

import { LogMock } from '../lib/LogMock';

describe('UserService', () => {

    test('Find should return a list of users', async () => {
        const log = new LogMock();
        const userService = new UserService(log);
        const text = await userService.find();
        expect(text).toBe("Ok that's working");
    });

});
