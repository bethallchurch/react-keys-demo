# React Keys Demo

I set out today to demonstrate to myself something I already knew about keys in React - that they can be used to improve performance by providing items in a list a stable identity.

A couple of interesting things came up:
- I couldn't work out which lifecycle functions, if any, were called fewer times as a result of using keys. I could only see the difference by watching the DOM in dev tools. (When not using `memo`.)
- I tried using `memo` to prevent unnecessary re-renders as well as unnecessary DOM manipulations. I then discovered that if you write `<ListItem>With key {x}</ListItem>` then the children prop of `ListItem` will be an array and you gain no performance benefits from `memo` as it only performs a shallow comparison of props. However, if you write `<ListItem>{`With key ${x}`}</ListItem>` then the children prop is a single string and `memo` works as hoped.
