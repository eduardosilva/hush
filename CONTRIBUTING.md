# Contributing to Hush

## Coding Rules

### 1. File and Folder Structure

- Organize files and folders logically.
- Use PascalCase for file names (e.g.### , `MyComponent.ts`).
- Use camelCase for folder names (e.g.### , `myComponent`).

### 2. Naming Conventions

- Use camelCase for variables and function names.
- Use PascalCase for class and interface names.
- Prefix boolean variables with "is" or "has" (e.g.### , `isActive`, `hasPermission`).
- Avoid single-letter variable names unless it's an iterator (`for (const item of items)`).

### 3. Type Declarations

- Always use TypeScript's type annotations.
- Prefer `interface` for defining object shapes and `type` for unions### , intersections, and aliases.
- Use `readonly` when possible.
- Avoid using the `any` type. Be explicit about types.

```typescript
// Good
interface Person {
  readonly id: number;
  name: string;
  age: number;
}

// Avoid
type UserData = any;
```

### 4. Formatting

 - Use 2 spaces for indentation.
 - Limit lines to 80 characters when possible.
 - Add a single space after a colon in object literals.
 - Place the opening curly brace on the same line as the function or conditional statement.


```typescript
// Good
function exampleFunction(parameter: string): number {
  // function body
}

// Avoid
function exampleFunction(parameter: string) : number {
  // function body
}
```

### 5. Comments

 - Write clear and concise comments.
 - Use comments to explain complex logic or provide context.
 - Avoid unnecessary comments. Code should be self-explanatory when possible.

### 6. Imports

 - Use absolute paths for internal imports.
 - Group imports in the following order: libraries### , components, styles, and others.
 - Avoid using wildcard imports (**import * as foo from 'bar'**).

```typescript
// Good
import React from 'react';
import { MyComponent } from 'components';
import './styles.css';

// Avoid
import * as React from 'react';
import MyComponent from 'components/MyComponent';
```

### 7. Imports

 - Always handle errors appropriately.
 - Use try-catch blocks for synchronous code.
 - Use async/await with try-catch for asynchronous code.
