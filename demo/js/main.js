import floodplains from "../../dist/floodplains.modern.js";

floodplains.on("some-event", function (val) {
  console.log("some-event", val);
});

floodplains.on("another-event", function (val) {
  console.log("another-event", val);
});

floodplains.on(["some-event", "another-event"], function (val) {
  console.log("both events:", val);
});

floodplains.on(["one-more-event"], function (val) {
  console.log("one-more-event:", val);
});

floodplains.emit("some-event", "hello, world!");
floodplains.emit("another-event", "kittens!");
floodplains.emit("one-more-event", {data: {person: {name: "david"}}});
