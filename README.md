# Express REST generator

[Express'](https://www.npmjs.com/package/express) application generator.

[Express original repo](https://github.com/expressjs/generator). (Sorry not forked, just cloned - at least now)

## Reasons

I got tired of modifying 

## Changes

Changes to the original Express-generator:

- No view engine by default (original's `--no-view` option)
- .gitignore added by default (original's `--git` option)
- Added [nodemon](https://www.npmjs.com/package/nodemon) to the project
    - dependency to version ^2.0.2
    - `npm start` will now use nodemon to launch
- Added a dependency to [Jest](https://www.npmjs.com/package/jest),
and [supertest](https://www.npmjs.com/package/supertest) (I know.. should have a possibility to choose which frameworks)
- Added a simple *supertest* to `router/__test__/users.test.js`
- users router now responds to `/api/users` with a simple JSON object instead of a String (this tested in the test)