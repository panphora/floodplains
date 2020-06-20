let callbacksLookup = {};

// gets the array of functions under the passed-in 
// event name and calls each of them
function emit (name, value) {
  let callbacks = callbacksLookup[name] || [];

  for (let callback of callbacks) {
    callback({name, value});
  }
}

// adds event watchers to `callbacksLookup` object 
// as an array of functions namespaced under the event name
function on (name, cb) {
  let eventNames = Array.isArray(name) ? name : [name];

  for (let eventName of eventNames) {
    if (!callbacksLookup[eventName]) {
      callbacksLookup[eventName] = [];
    }

    callbacksLookup[eventName].push(cb);
  }
}

const floodplains = {
  emit, 
  on
}

export default floodplains;