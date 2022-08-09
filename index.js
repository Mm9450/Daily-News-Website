console.log("This is my index js file");

//Initialize the news api parameters
let country = 'in';
let apiKey = '25cd2be6d8934a23af42e217c1bb42e2'


// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`, true);
xhr.getResponseHeader('Content-type', 'application/json');

xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);
    let newsHtml = "";
    articles.forEach(function (element,index) {
      //console.log(element,index)
      // for (let news in articles) {

        let news = ` <div class="accordion-item">
      <h2 class="accordion-header" id="heading${index}">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
        ${element["title"]}
        </button>
      </h2>
      <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#newsAccordion">
        <div class="accordion-body">
          ${element["content"]}. <a href="${element['url']}"target="_blank" >Read more here</a>
        </div>
      </div>
    </div>`;

        newsHtml += news;
      // }

    });
    newsAccordion.innerHTML = newsHtml;


  }
  else {
    console.log("Some error occured")
  }
}

xhr.send()




