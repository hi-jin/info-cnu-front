module.exports = {
html:function(links) {
return `
<!DOCTYPE Html>

<head>
  <title>충남대학교 컴퓨터융합학부 공지사항</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>

<body>

  <ol class="list-group list-group-numbered">
    ${links}
  </ol>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
    crossorigin="anonymous"></script>
</body>

</html>`;
},
getLinks:function(data) {
  var links = '';
  for (var i = 0; i < data.length; i++) {
    links += `
    <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <div class="fw-bold">${data[i]["title"]}</div>
      </div>
      <span class="badge bg-primary rounded-pill">${data[i]["type"]}</span>
    </li>`;
  }

  return links;
}
};