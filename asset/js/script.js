function light(sw) {
    var pic;
    if (sw == 0) {
      pic = "./asset./img/pic_bulboff.gif"
    } else {
      pic = "./asset./img/pic_bulbon.gif"
    }
    document.getElementById('myImage').src = pic;
  }