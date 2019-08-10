function light(sw) {
    var pic;
    if (sw ==0 ) {
      pic = "./assets/img/pic_bulboff.gif"
    } else {
      pic = "./assets/img/pic_bulbon.gif"
    }
    document.getElementById('myImage').src = pic;
  }