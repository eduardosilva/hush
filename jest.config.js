const { pathsToModuleNameMapper } = require('ts-jest')
const { compilerOptions } = require('./tsconfig')
const { join } = require('path');

module.exports = {
    moduleDirectories: ['node_modules', 'src'],
    moduleFileExtensions: [
      'js',
      'json',
      'ts',
    ],
    transform: {
      '^.+\\.tsx?$': [
        'ts-jest',
        {
          tsconfig: 'tsconfig.json',
        },
      ],
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    testEnvironment: 'node',
    roots: ['<rootDir>'],
    modulePaths: ["<rootDir>/src"],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
     prefix: join('<rootDir>', compilerOptions.baseUrl)
    }),
    setupFilesAfterEnv: ["./test/unit/lib/setup.ts"]
  }
