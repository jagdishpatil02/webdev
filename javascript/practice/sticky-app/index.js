let counter = 0;
let keyValuePairs = {};
let storagecounter = 0;

// Function to retrieve all key-value pairs from session storage
function getAllKeyValuePairsFromSessionStorage() {
  for (let i = 0; i < sessionStorage.length; i++) {
    let key = sessionStorage.key(i);
    keyValuePairs[key] = sessionStorage.getItem(key);
  }
  return keyValuePairs;
}

// Example usage
let allSessionStorageKeyValuePairs = getAllKeyValuePairsFromSessionStorage();
console.log(allSessionStorageKeyValuePairs);

if (allSessionStorageKeyValuePairs) {
  Object.values(allSessionStorageKeyValuePairs).forEach((value) => {
    storagecounter = storagecounter + 1;
    let propertyExist = 'stickyBlock' + storagecounter;

    if (propertyExist in allSessionStorageKeyValuePairs) {
      console.log(propertyExist);
      console.log(allSessionStorageKeyValuePairs);

      let wrapper = document.querySelector('.wrapper');
      let stickyWrapper = document.createElement('div');
      stickyWrapper.className = 'sticky-wrapper';
      let stickyBlock = document.createElement('div');
      stickyBlock.setAttribute('contenteditable', 'true');
      stickyBlock.textContent = allSessionStorageKeyValuePairs[propertyExist];
      stickyBlock.className = 'sticky-block';
      stickyWrapper.appendChild(stickyBlock);
      stickyBlock.setAttribute('id', 'stickyBlock' + storagecounter);

      stickyBlock.addEventListener('input', function (e) {
        let elementCounter = 'stickyBlock' + counter;
        sessionStorage.setItem(elementCounter, e.target.textContent);
      });
      // buttons
      let addStickbutton = document.createElement('button');
      addStickbutton.addEventListener('click', createStickyBlock);
      addStickbutton.textContent = '+';
      let removeStickyButton = document.createElement('button');
      removeStickyButton.textContent = '-';
      removeStickyButton.addEventListener('click', function () {
        removeStickyBlock(stickyWrapper);
      });

      //appends
      stickyWrapper.appendChild(addStickbutton);
      stickyWrapper.appendChild(removeStickyButton);
      wrapper.appendChild(stickyWrapper);
    }
  });
}

console.log('storagecounter', storagecounter);
if (storagecounter == 1) {
  createStickyBlock();
}
function createStickyBlock() {
  counter = counter + 1;
  // dom elements creation
  let wrapper = document.querySelector('.wrapper');
  let stickyWrapper = document.createElement('div');
  stickyWrapper.className = 'sticky-wrapper';
  let stickyBlock = document.createElement('div');
  stickyBlock.setAttribute('contenteditable', 'true');
  stickyBlock.setAttribute('id', 'stickyBlock' + counter);

  stickyBlock.className = 'sticky-block';
  stickyWrapper.appendChild(stickyBlock);
  stickyBlock.addEventListener('input', function (e) {
    let elementCounter = 'stickyBlock' + counter;
    sessionStorage.setItem(elementCounter, e.target.textContent);
  });
  // buttons
  let addStickbutton = document.createElement('button');
  addStickbutton.addEventListener('click', createStickyBlock);
  addStickbutton.textContent = '+';
  let removeStickyButton = document.createElement('button');
  removeStickyButton.textContent = '-';
  removeStickyButton.addEventListener('click', function () {
    removeStickyBlock(stickyWrapper);
  });

  //appends
  stickyWrapper.appendChild(addStickbutton);
  stickyWrapper.appendChild(removeStickyButton);
  wrapper.appendChild(stickyWrapper);
}

function removeStickyBlock(el) {
  let wrapper = document.querySelector('.wrapper');
  let storyBlockel = el.querySelector('.sticky-block');
  let storyBlockId = storyBlockel.getAttribute('id');
  console.log(storyBlockId);
  sessionStorage.removeItem(storyBlockId);
  wrapper.removeChild(el);
}
// createStickyBlock();
