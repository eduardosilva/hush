import { UserService } from '@services/UserService';

import { LogMock } from '../lib/LogMock';

describe('UserService', () => {

    test('Find should return a list of users', async () => {
        const log = new LogMock();
        const userService = new UserService(log);
        await userService.find();

        const users = await userService.find();

        // Check if users is an array
        expect(Array.isArray(users)).toBe(true);

        // Check if the number of users is greater than 0
        expect(users.length).toBeGreaterThan(0);
    });

});
