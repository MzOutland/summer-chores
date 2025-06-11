// Helper to simulate falling asleep
function fellAsleep(name, after) {
  console.log(`${name} fell asleep after ${after}.`);
}

// Chore 1: Mow the yard (must do this)
function mowYard(name, callback) {
  setTimeout(() => {
    console.log(`${name} mowed the yard.`);
    callback();
  }, 2000);
}

// Chore 2: Weed eat
function weedEat(name, callback) {
  setTimeout(() => {
    const tired = Math.random() > 0.8; // 20% chance of falling asleep
    if (tired) {
      fellAsleep(name, "mowing the yard");
    } else {
      console.log(`${name} finished using the weed eater.`);
      callback();
    }
  }, 1500);
}

// Chore 3: Trim hedges
function trimHedges(name, callback) {
  setTimeout(() => {
    const tired = Math.random() > 0.8;
    if (tired) {
      fellAsleep(name, "weed eating the yard");
    } else {
      console.log(`${name} finished trimming the hedges.`);
      callback();
    }
  }, 1000);
}

// Chore 4: Collect wood
function collectWood(name, callback) {
  setTimeout(() => {
    const tired = Math.random() > 0.8;
    if (tired) {
      fellAsleep(name, "trimming the hedges");
    } else {
      console.log(`${name} finished collecting wood.`);
      callback();
    }
  }, 2500);
}

// Chore 5: Water garden
function waterGarden(name, callback) {
  setTimeout(() => {
    const tired = Math.random() > 0.8;
    if (tired) {
      fellAsleep(name, "collecting wood");
    } else {
      console.log(`${name} finished watering the garden.`);
      callback();
    }
  }, 500);
}

// Main function to run all chores in order (callback hell!)
function doSummerChores(name) {
  mowYard(name, () => {
    weedEat(name, () => {
      trimHedges(name, () => {
        collectWood(name, () => {
          waterGarden(name, () => {
            console.log(`${name} finished all their chores!`);
          });
        });
      });
    });
  });
}

// Start the routine
doSummerChores("Angie");
