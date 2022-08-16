function checkApod(date) {
    document.getElementById("media").innerHTML = "<img src='./loading.png'>"
    fetch(`https://api.nasa.gov/planetary/apod?api_key=yzDv7B1Fy3caTaVaFMfKxafmqOdCVqg2VgMVmSqj&date=${date}`)
    .then(response => response.json())
    .then(data => {
      if (data["media_type"] === undefined || data["code"] === 400) {
        document.getElementById("explanation").innerText = "404"
      } else {
        if (data["media_type"] === "image") {
          document.getElementById("media").innerHTML = `<img src="${data['url']}">`
        } else if (data["media_type"] === "video") {
          document.getElementById("media").innerHTML = `<iframe width="560" height="315" src="${data["url"]}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        }
        document.getElementById("explanation").innerText = data["explanation"]
      }
    })
  }
  
  function customApod() {
    var date = document.getElementById("date-input").value
    checkApod(date)
  }
  
  function today() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0')
    var mm = String(today.getMonth() + 1).padStart(2, '0')
    var yyyy = today.getFullYear()
    today = yyyy + "-" + mm + "-" + dd
    return today
  }
  
  
  checkApod(today())