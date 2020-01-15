const nekoTotal = "http://neko-bot.net/info/totalnekos.txt";
const animeTotal = "http://neko-bot.net/info/totalanime.txt";

const fetch = require('node-fetch')



  
function neko(min, max, source) {
    let total = await fetch(nekoTotal).then(res => res.text())
    


 // get total images
    ID = Math.floor((Math.random() * total) + 1); // calculate ID of image at random
    if (source = true) {
      source_ = "not finished"
      out = {"url":url, "source":source_, "id":ID} //output as json (?)
    }
    //if source is not true, output normally. (eg if its a string/0)    
    if (source != true){
      out = "http://neko-bot.net/nekos/" + ID + ".png"
    }
    return out
  };
  
  
  
  
  
function anime(min, max, source) {
    var total = await fetch(animeTotal).text // get total images
    ID = Math.floor((Math.random() * total) + 1); // calculate ID of image at random
    if (source = true){
      source_ = "not finished"
      out = {"url":url, "source":source_, "id":ID} //output as json (?)
    }
    //if source is not true, output normally. (eg if its a string/0)
    if (source != true){
      out = "http://neko-bot.net/anime/"+ID+".png"
    }
    return out
  };  
  
module.exports = {neko,anime}
