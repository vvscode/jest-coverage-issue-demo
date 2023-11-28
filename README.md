# Jest coverage issue demo

## Case 1 - does not process global threshold if `collectCoverageFrom` is not set

```
npx jest --config jest.config.js
 PASS  src/module/2.spec.js
  two
    ✓ returns 2 (1 ms)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |
 2.js     |     100 |      100 |     100 |     100 |
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.252 s, estimated 1 s
```

while there are no tests for `src/1.js`.

By default [documentation](https://jestjs.io/docs/configuration#collectcoveragefrom-array) says

> This will collect coverage information for all the files inside the project's rootDir, except the ones that match **/node_modules/** or **/vendor/**.

**Expected behavior:"** - handle global coverage as "50% doesn't met 100% expectation"


## Case 2 - on configured `collectCoverageFrom` it gives incorrect value for global

```
➜  jest-coverage-demo git:(master) ✗ npx jest --config jest.configWithCollectCoverageFrom.js
 PASS  src/module/2.spec.js
  two
    ✓ returns 2 (2 ms)

------------|---------|----------|---------|---------|-------------------
File        | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
------------|---------|----------|---------|---------|-------------------
All files   |      50 |       50 |      50 |      50 |
 src        |       0 |        0 |       0 |       0 |
  1.js      |       0 |        0 |       0 |       0 | 1-3
 src/module |     100 |      100 |     100 |     100 |
  2.js      |     100 |      100 |     100 |     100 |
------------|---------|----------|---------|---------|-------------------
Jest: "global" coverage threshold for statements (100%) not met: 0%
Jest: "global" coverage threshold for branches (100%) not met: 0%
Jest: "global" coverage threshold for lines (100%) not met: 0%
Jest: "global" coverage threshold for functions (100%) not met: 0%
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.331 s, estimated 1 s
```

it shows proper coverage for `All files` (50%), but error message below shows `0%` (`Jest: "global" coverage threshold for statements (100%) not met: 0%`)

**Expected behavior:"** - handle global coverage as "50% doesn't met 100% expectation"
