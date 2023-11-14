function maskify(cc) {
    cc = cc.split('');
    for (let i = 0; i < cc.length; i++) {
      if (!(i + 4 >= cc.length)) {
        cc[i] = "#";
      }
    }
    return cc.join('');
  }