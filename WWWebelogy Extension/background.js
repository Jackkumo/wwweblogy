console.log(42);
console.log("I'm Alive");

chrome.storage.sync.set({likes: 5, subscriberCount: 42}); () => {
    chrome.storage.sync.get(["likes", "subscriberCount"], (result) => {
        result.likes
        result.subscriberCount
        });
    };

// Make UI for list of blocked sites with delete buttons
// Make button that when pressed adds a blocked site
// Make delete button delete the blocked site
  
