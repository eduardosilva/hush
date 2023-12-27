#!/bin/bash


# Function to check file and folder naming conventions
check_naming_conventions() {
    for file in $files; do
        filename=$(basename "$file")
        # Check PascalCase for file names
        if [[ ! "$filename" =~ ^[0-9] && ! "$filename" =~ index && ! "$filename" =~ ^[A-Z][a-zA-Z]+\.tsx?$ ]]; then
            echo "Error: File name should be in PascalCase: $file"
        fi

        # Check camelCase for folder names
        folder=$(dirname "$file")
        if [[ ! "$folder" =~ [a-z]+ ]]; then
            echo "Error: Folder name should be in camelCase: $folder"
        fi
    done
}

# Function to check type declarations
check_type_declarations() {
    for file in $files; do
        # Check TypeScript type annotations
        if grep -q ":[^:]:.*;" "$file"; then
            echo "Error: Use TypeScript's type annotations in $file"
        fi

        # Check for any type aliases using 'any'
        if grep -q "type [A-Za-z0-9_]* = any" "$file"; then
            echo "Error: Avoid using 'any' type in $file"
        fi
    done
}

# Function to check formatting
check_formatting() {
    for file in $files; do
        # Check 2 spaces for indentation
        if grep -qE "^\t" "$file"; then
            echo "Error: Use 2 spaces for indentation in $file"
        fi

        # Check for a single space after a colon in object literals
        # if grep -qE ":[^ ]" "$file"; then
        #     echo "Error: Add a single space after a colon in object literals in $file"
        # fi
    done
}

# Function to check comments
check_comments() {
    for file in $files; do
        # Check for unnecessary comments
        if grep -qE "^// TODO|^// FIXME|^// HACK" "$file"; then
            echo "Error: Avoid unnecessary comments in $file"
        fi
    done
}

# Function to check imports
check_imports() {
    return
    # for file in $files; do
    #     # Check for wildcard imports
    #     if grep -qE "import \* as [A-Za-z0-9_]* from" "$file"; then
    #         echo "Error: Avoid wildcard imports in $file"
    #     fi
    # done
}

# Function to check error handling
check_error_handling() {
    for file in $files; do
        # Check for try-catch blocks
        if grep -qE "try {" "$file" && ! grep -qE "catch \(" "$file"; then
            echo "Error: Missing catch block in try-catch statement in $file"
        fi

        # # Check for async/await with try-catch for asynchronous code
        # if grep -qE "async function [A-Za-z0-9_]*\(\) {" "$file" && ! grep -qE "try {" "$file" || grep -qE "await " "$file" && ! grep -qE "catch \(" "$file"; then
        #     echo "Error: Use async/await with try-catch for asynchronous code in $file"
        # fi
    done
}


# Main script
if [ "$#" -eq 0 ]; then
    echo "Usage: $0 <directory>"
    exit 1
fi
directory="$1"

# Get the list of TypeScript files
files=$(find $directory -type f -name "*.ts" -o -name "*.tsx")

check_naming_conventions
check_type_declarations
check_formatting
check_comments
check_imports
check_error_handling

echo "Validation complete."

