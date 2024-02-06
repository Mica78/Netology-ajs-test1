import { getHealth } from '../index';
import {expect, test} from '@jest/globals';


test.each([
    [{name: 'Маг', health: 90}, 'healthy'],
    [{name: 'Маг', health: 50}, 'wounded'],
    [{name: 'Маг', health: 15}, 'wounded'],
    [{name: 'Маг', health: 10}, 'critical']
])(
    (`testing %o.health`),
    (obj, expected) => {
        const res = getHealth(obj);
        expect(res).toBe(expected);
    }
);
