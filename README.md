# Learning JavaScript

#### Ubuntu `nvm` commnads for **Node js**

1.  To Check all node js Versions via `nvm`:

    ```
    nvm list-remote
    ```

2.  To install node js from listed versions:

    ```
    nvm install v16.15.0
    ```

3.  To Uninstall older installed node js versions:

    ```
    nvm uninstall v16.14.2
    ```

4.  To Check node js version:
    ```
    node --version
    ```
5.  To Check local `nvm` node js version:

    ```
    nvm list
    ```

6.  To temporarily switch node js versions using `nvm`:

    ```
    nvm use v16.15.0
    ```

7.  To switch default node js version (v16.14.2) to latest version (v16.15.0):

    ```
    nvm alias default v16.15.0
    nvm use default
    ```

8.  To Check node js version:
    ```
    node --version
    ```

#### Using Chrome Debugger for JS script steps:

1. Right click on Web page > click `Inspect`
2. Go to `sources`
3. On left side click on `pages` , there you'll find folder structure and your current js file.
4. By clicking on your lines of code, add `breakpoints` and after reloading debug your code according to the breakpoints.
