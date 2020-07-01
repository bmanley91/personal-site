import React from 'react';
import { getInitialDarkSetting } from '../components/theme-provider';


describe('<ThemeProvider />', () => {
    test('should not error when window is undefined', () => {
        expect(getInitialDarkSetting()).toBe(false);
    });
});
