const express = require('express');
const axios = require('axios');

const app = express();
const port = 80;

const template = require('./components/main');

app.get('/cseInfo', (req, res) => {
  axios.get('http://info-cnu.herokuapp.com/getAll').then(
    (response) => {
      let data = response.data;

      for (var i = 0; i < data.length; i++) {
        data[i]["date"] = new Date(data[i]["date"]);
      }

      data.sort((a, b) => {
        return b["date"] - a["date"];
      });

      for (var i = 0; i < data.length; i++) {
        data[i]["date"] = data[i]["date"].toDateString();
      }

      var links = template.getLinks(data);
      res.send(template.html(links));
    }
  ).catch(
    (error) => {
      console.error(error);
    }
  )
});

app.listen(port, () => {
  console.log(`서버가 ${port}에서 열렸습니다.`);
});