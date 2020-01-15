const nekoTotal = "http://neko-bot.net/info/totalnekos.txt";
const animeTotal = "http://neko-bot.net/info/totalanime.txt";

const fetch = require('node-fetch')



  
async function neko(min, max, source) {
    var total = await fetch(nekoTotal)
    .then(res => res.text())
    //console.log(total)


 // get total images
    ID = Math.floor((Math.random() * total) + 1); // calculate ID of image at random
    if (source = true) {
      source_ = "not finished"
      url = "http://neko-bot.net/nekos/"+ID+".png"
      out = {"url":url, "source":source_, "id":ID} //output as json (?)
    }
    //if source is not true, output normally. (eg if its a string/0)    
    if (source != true){
      out = "http://neko-bot.net/nekos/" + ID + ".png"
    }
    return out
  };
  
  
  
  
  
async function anime(min, max, source) {
    var total = await fetch(animeTotal)
    .then(res => res.text()) 
    
    // get total images
    
    
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
//console.log(neko())
module.exports = {neko,anime}
