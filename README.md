# vue-project

## Task 1 and 3

Implemented in the ProductsView with path "/". To display 10000 or more, I used pagination which takes 5 items for each page.
I did it to avoid receiving all 10000 at once as we will wait for a long response from the server. As a result, a page can crash and the user can go to another website.
(As we know it's not good for business)
P.S. As I don't have a real server I used mock data. It can be found in the public folder

## Task 2

Implemented in the UserView with path "/user". I made component UserDemoComponent with two slots #loading and #default.
This makes it possible to use it as in the example of task 2

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
