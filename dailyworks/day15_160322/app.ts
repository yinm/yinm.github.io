class Kiyoshi {
  static zun: string = "ズン,ズン,ズン,ズン,";
  static doko: string = "ドコ,";
  static kiyoshi: string = "キ・ヨ・シ！";

  iitaidake(): void {
    console.log(Kiyoshi.zun + Kiyoshi.doko + Kiyoshi.kiyoshi);
  }
}

var zndkkys = new Kiyoshi;
zndkkys.iitaidake();
