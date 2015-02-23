/**
 * Created by match_000 on 2/23/2015.
 */
'use strict';

describe('Login', function(){
    beforeEach(function(){
        browser().navigateTo('http://localhost:3000');
        window.sleep(1);
    });

    it('should log in a user and redirect', function(){
        input('area').enter('user');
        input('12345678').enter('pass');
        element(':button').click();
        expect(browser().location().url()).toBe('http://localhost:3000');
    });
});
