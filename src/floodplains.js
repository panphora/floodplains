function emit (name, value) {
  let event = new CustomEvent("floodplains-event", {
    detail: {
      name,
      value
    } 
  });
  document.dispatchEvent(event);
}

function on (name, cb) {
  document.addEventListener("floodplains-event", function (event) {
    if (Array.isArray(name)) {
      if (name.includes(event.detail.name)) {
        cb({name: event.detail.name, value: event.detail.value});
      }
    } else {
      if (name === event.detail.name) {
        cb({name, value: event.detail.value});
      }
    }
  }, false);
}

const floodplains = {
  emit, 
  on
}

export default floodplains;