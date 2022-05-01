# Learning JavaScript

### Ubuntu `nvm` commnads for **Node js**

- To Check all node js Versions via `nvm`:

  ```
  nvm list-remote
  ```

- To install node js from listed versions:

  ```
  nvm install v16.15.0
  ```

- To Uninstall older installed node js versions:

  ```
  nvm uninstall v16.14.2
  ```

- To Check node js version:
  ```
  node --version
  ```
- To Check local `nvm` node js version:

  ```
  nvm list
  ```

- To temporarily switch node js versions using `nvm`:

  ```
  nvm use v16.15.0
  ```

- To switch default node js version (v16.14.2) to latest version (v16.15.0):

  ```
  nvm alias default v16.15.0
  nvm use default
  ```

- To Check node js version:
  ```
  node --version
  ```

### Using Chrome Debugger for JS script steps:

##### WAY-1:

1. Right click on Web page > click `Inspect`
2. Go to `sources`
3. On left side click on `pages` , there you'll find folder structure and your current js file.
4. By clicking on your lines of code, add `breakpoints` and after reloading debug your code according to the breakpoints.

##### WAY-2:

- Simply add `debugger;` statement in your js code. it will automatilly call browser's debugger tab from the line where you've added the `debugger;` statement.
