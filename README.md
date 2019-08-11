# Bootcamp 2 Code Challenges

Repository for Daily Bootcamp 2 Code Challenges.

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

## Daily Process

### Setup

Each days problems are in a branch. You will do your work on `master`

1. Start by running `git fetch upstream` to make sure you have the latest branches
1. Make sure you are on `master` (type `git branch` to check)
1. Run `git merge upstream/<name-of-branch>` to merge in new daily tests and instructions.
1. Write tests in the daily module file

### Resources

Look through the README for each day which has readings and videos.

### Code

Work through the tests one-by-one:

1. Don't modify the test files, _except_ to change each test from `skip` to `test` as you go.
1. Make that test pass.
1. Git ACP (add, commit, push)
1. Repeat until done.
1. Run `npm test` to preflight what will happen on travis

### Submit

1. Open a PR from your fork to the upstream repository.
1. Verify that your PR passes Travis
1. Submit on Canvas


