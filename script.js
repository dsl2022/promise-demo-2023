function fetchData() {
    var loading = document.getElementById('loading');
    var data = document.getElementById('data');
  
    // Display loading message
    loading.style.display = 'block';
    data.textContent = '';
  
    // Simulate an API call with a Promise
    var promise = new Promise(function(resolve, reject) {
      setTimeout(function() {
        var randomNum = Math.random();
        if (randomNum < 0.5) {
          resolve('Data successfully fetched!');
        } else {
          reject('Error: Failed to fetch data!');
        }
      }, 2000);
    });
  
    promise
      .then(function(result) {
        // Promise resolved
        data.textContent = result;
      })
      .catch(function(error) {
        // Promise rejected
        data.textContent = error;
      })
      .finally(function() {
        // Hide loading message
        loading.style.display = 'none';
      });
  }
  