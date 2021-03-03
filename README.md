# read_pipe()

A JavaScript module for reading the stdout/stderr output of an external process ran with [Sciter.JS](https://github.com/c-smile/sciter-js-sdk).

## Example 

```javascript
for await (const line of read_pipe(process.stdout)) {
  console.log(`“${line}”`);
}
```

## Another example

See [test.js](test.js) for an example of reading DevTools info piped from a Chrome instance ran with the argument `--remote-debugging-port=0`.