document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Create XHR object

  const xhr = new XMLHttpRequest();


  // OPEN - specifify type of request + url file
  xhr.open('GET', 'data.txt', true);

  // Logs the ready state : 1
  // console.log('READYSTATE', xhr.readyState);


  // Optional - Used for spinners/loaders
  xhr.onprogress = function () {
    console.log('READYSTATE', xhr.readyState);
  }

  // Newer Instance 
  xhr.onload = function () {
    console.log('READYSTATE', xhr.readyState);
    if (this.status === 200) {
      // console.log(this.responseText);

      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
    }

  }

  // Older Instance
  // xhr.onreadystatechange = function () {
  //   console.log('READYSTATE', xhr.readyState);
  //   if (this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText)
  //   }
  // }

  xhr.onerror = function () {
    console.log('Request error...');
  }

  xhr.send();
}

