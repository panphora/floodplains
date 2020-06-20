function Floodplains () {
  this.callbacksLookup = {};
}

Floodplains.prototype = {
  // gets the array of functions under the passed-in 
  // event name and calls each of them
  emit: function (name, value) {
    let callbacks = this.callbacksLookup[name] || [];
    let wildcardCallbacks = this.callbacksLookup["*"] || [];

    for (let callback of callbacks) {
      callback({name, value});
    }

    for (let wildcardCallback of wildcardCallbacks) {
      wildcardCallback({name, value});
    }
  },

  // adds event watchers to `callbacksLookup` object 
  // as an array of functions namespaced under the event name
  on: function (name, cb) {
    let eventNames = Array.isArray(name) ? name : [name];

    for (let eventName of eventNames) {
      if (!this.callbacksLookup[eventName]) {
        this.callbacksLookup[eventName] = [];
      }

      this.callbacksLookup[eventName].push(cb);
    }
  }

}

export default Floodplains;