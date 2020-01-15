const nekoTotal = "http://neko-bot.net/info/totalnekos.txt";
const animeTotal = "http://neko-bot.net/info/totalanime.txt";

class random {
  
  neko(min, max, source) {
    var total = fetch(nekoTotal) // get total images
    ID = Math.floor((Math.random() * total) + 1); // calculate ID of image
    if (source = true) {
      out = {"url":url, "source":source, "id":ID} //output as json (?)
    }
    //if source is not true, output normally. (eg if its a string/0)    
    if (source != true){
      out = "http://neko-bot.net/nekos/" + ID + ".png"
    }
    return out
  };
  
  
  
  
  
  anime(min, max, source) {
    var total = fetch(nekoTotal) // get total images
    ID = Math.floor((Math.random() * total) + 1); // calculate ID of image
    if (source = true){
      out = {"url":url, "source":source, "id":ID} //output as json (?)
    }
    //if source is not true, output normally. (eg if its a string/0)
    if (source != true){
      out = "http://neko-bot.net/anime/"+ID+".png"
    }
    return out
  };  
  
}
