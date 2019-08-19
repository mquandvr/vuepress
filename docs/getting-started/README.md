---
title: 'Built on'
---

<Block>

## Built on

The project is built on the following open source technologies:：

- [Node.js](https://nodejs.org/)
- [VuePress](https://github.com/vuejs/vuepress)

</Block>

<Block>

## Block Component

`Block` The components are primarily used to divide the page structure in the layout used on this page.Each  `Block` component is a content packet. It is convenient for you to control the page structure freely and flexibly.

<Example>

Way of use：

```vue
<Block>

Contents...
![GitHub Logo](./images/yaktocat.png)
<img src="./images/yaktocat.png" width="100" height="100">

</Block>
```
<img src="../images/yaktocat.png" width="500" height="500">

</Example>

</Block>

<Block>

## CURL component

`CURL` Components are a very useful component. Mainly used in the preparation of a better API to display  `curl` using the command.

For example, the following content will be rendered to the right:

````vue
<CURL>
```bash
curl -X POST http://api.example.com/api/auth/login \
  --data '{
    "username": "my-username",
    "password": "my-password"
  }'
```
</CURL>
````

`CURL` Components will automatically generate a button beneath the assembly, when the button is clicked, through analysis of the  `curl` parameters in the command, by `JS` sending a request to the corresponding address. And output its request information to the console in the browser developer tools. Easy to test and preview quickly.

<Example>

<CURL>

```bash
curl -X POST http://api.example.com/api/auth/login \
  --data '{
    "username": "my-username",
    "password": "my-password"
  }'
```
</CURL>

<CURL>

```bash
curl -X GET https://yesno.wtf/
```
</CURL>

</Example>

</Block>