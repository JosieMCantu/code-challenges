# Bootcamp 2 Code Challenges

Repository for daily Bootcamp 2 code challenges.

## Initial Setup

1. Fork this repository
1. Clone locally
1. Create a new remote called `upstream` pointing to the upstream repository you forked. 
    ```sh
    > git remote add -f upstream https://github.com/alchemycodelab/bc2-code-challenges.git
    ```
1. Install dependencies:
    ```sh
    > npm i
    ```
1. Create a `dev` branch for doing daily work:
    ```sh
    > git checkout -b dev
    ```
1. Check that tests are setup correctly by running:
    ```sh
    > npm test
    ```

## Daily Process

### Setup

Each days problems are in a branch. You will do your work on `dev`, merging 
the daily challenge into `dev`:

1. Start by running `git fetch upstream` to make sure you have the latest branches
1. Make sure you are on `dev` (type `git branch` to check)
1. Uncomment the appropriate file in `tests.js`
1. Write tests in the daily module file

### Resources

Look through the folder for each day which has links to readings and videos.

### Code

Work through the tests one-by-one:

1. Don't modify the test files, _except_ to change each test from `skip` to `test` as you go.
1. Make that test pass.
1. Git ACP (add, commit, push)
1. Repeat until done.
1. Run `npm test` to preflight what will happen on Github Actions

### Submit

1. Open a PR from `dev` to `master` in your own repository.
1. Verify that your PR passes Github Actions
1. Submit on Canvas
1. When graded, merge your PR.


