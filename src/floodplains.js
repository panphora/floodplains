let callbacksLookup = {};

function emit (name, value) {
  let callbacks = callbacksLookup[name] || [];

  for (let callback of callbacks) {
    callback({name, value});
  }
}

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