import floodplains from "../../dist/floodplains.modern.js";

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

window.floodplains = floodplains;
