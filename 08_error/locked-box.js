function withBoxUnlocked(body) {
  var locked = box.locked;
  box.unlock();
  try {
    body();
  }
  catch (e) {
    console.log(e);
  }
  finally {
    box.locked = locked;
  }
}

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised:", e);
}
