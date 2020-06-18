module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement < 20) {
    // enhance +1
    item.enhancement += 1;
  }
  return { ...item };
}

function fail(item) {
  if (item.enhancement < 15) {
    if (item.durability < 5) {
      item.durability = 0;
    } else {
      item.durability -= 5;
    }
  } else if (item.enhancement >= 15) {
    if (item.enhancement > 16) {
      item.enhancement -= 1;
    }
    if (item.durability < 10) {
      item.durability = 0;
    } else {
      item.durability -= 10;
    }
  }
  return { ...item };
}

function repair(item) {
  item.durability = 100;
  return { ...item };
}

function get(item) {
  if (item.enhancement > 0) {
    item.name = `[+${item.enhancement}]${item.name}`;
  }
  return { ...item };
}
