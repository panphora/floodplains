# Floodplains

A small event library.

Includes `emit` and `on`. 

## Demo

[See It in Action](http://floodplains.davidmiranda.info/demo/)

## Install

```
npm install floodplains
```

## How to Use

```js
import floodplains from "floodplains";

floodplains.on("some-event", function (val) {
  console.log("some-event", val);
});

floodplains.on("another-event", function (val) {
  console.log("another-event", val);
});

floodplains.on(["some-event", "another-event"], function (val) {
  console.log("both events:", val);
});

floodplains.emit("some-event", "hello, world!");
floodplains.emit("another-event", "kittens!");
```

## How it Works

### `emit`

```javascript
floodplains.emit("some-event", "hello, world!");
```

An emitted event requires a name (e.g. `"some-event"`) and a value (e.g. `"hello, world!"`). The name must be a `string` and the value can be anything.

### `on`

```javascript
floodplains.on("some-event", function (val) {
  console.log("some-event", val);
});
```

The `on` method actively listens for an event with a particular name (e.g. `"some-event"`) and calls its callback whenever an event with that name is emitted.

## License

MIT

## Happy Coding ✌️