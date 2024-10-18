# Git, GitHub, and Node.js Basics

This README provides an introduction to using Git with GitHub, particularly in the context of GitHub Codespaces, as well as basic terminal and Node.js commands.

## Git and GitHub Basics

Git is a version control system that helps you track changes in your code. GitHub is a platform that hosts Git repositories and provides additional collaboration features.

### Using VS Code Source Control

VS Code has built-in Git support, making it easy to perform common Git operations:

1. **Open Source Control**: Click on the Source Control icon in the left sidebar (it looks like a branch).

2. **Stage Changes**: 
   - To stage all changes, click the '+' next to the 'Changes' header.
   - To stage individual files, click the '+' next to each file.

3. **Commit Changes**:
   - Enter a commit message in the text box at the top of the Source Control panel.
   - Click the checkmark icon or press Ctrl+Enter (Cmd+Enter on Mac) to commit.

4. **Push and Pull**:
   - To push your changes, click on the '...' menu in the Source Control panel and select 'Push'.
   - To pull changes, select 'Pull' from the same menu.

5. **Sync**: The Sync button (circular arrows) will both push your changes and pull any remote changes.

### GitHub Codespaces

GitHub Codespaces provides a complete, configurable dev environment in the cloud. When you're in a Codespace:

- Your Git repository is already cloned and set up.
- You can use VS Code's Source Control features as described above.
- Commits are made to your GitHub repository directly.

## Basic Terminal Commands

Here are some essential terminal commands:

- `cd [directory]`: Change to the specified directory.
  - `cd ..`: Move up one directory.
  - `cd ~`: Move to your home directory.

- `ls`: List files and directories in the current directory.
  - `ls -l`: List in long format, showing permissions and other details.
  - `ls -a`: Show hidden files and directories.

- `pwd`: Print the current working directory.

## Node.js and npm Commands

Node.js is a JavaScript runtime, and npm (Node Package Manager) is used to manage packages for Node.js projects.

### Running Node.js Files

To run a Node.js file:

node [filename.js]

```plaintext

For example:

```

node index.js

```plaintext

### npm Commands

- Initialize a new Node.js project:
```

npm init -y

```plaintext

- Install a package:
```

npm install [package-name]

```plaintext

- Install all dependencies listed in package.json:
```

npm install

```plaintext

- Run tests:
```

npm test

```plaintext
or
```

npm run test

```plaintext

- Run a custom script defined in package.json:
```

npm run [script-name]

```plaintext

Remember, you need to be in your project directory in the terminal to run these commands.

## Conclusion

These basics should help you get started with Git, GitHub, and Node.js development. As you become more comfortable with these tools, you can explore their more advanced features to enhance your development workflow.
```