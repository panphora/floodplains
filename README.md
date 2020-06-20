# Floodplains

A small event library.

Includes `emit` and `on`. 

## Demo

[See It in Action](https://floodplains.davidmiranda.info/demo/)

## Install

```
npm install floodplains
```

## How to Use

```js
import Floodplains from "floodplains";
const floodplains = new Floodplains;

floodplains.on("some-event", function (val) {
  console.log("some-event", val);
});

floodplains.on("another-event", function (val) {
  console.log("another-event", val);
});

floodplains.on(["some-event", "another-event"], function (val) {
  console.log("two events:", val);
});

floodplains.on("*", function (val) {
  console.log("all events:", val);
});

floodplains.emit("some-event", "hello, world!");
floodplains.emit("another-event", "kittens!");
floodplains.emit("one-more-event", {name: "James"});
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

Special `"*"` event name will listen to _all_ events.

## License

MIT

## Happy Coding ✌️