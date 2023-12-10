function estAnagrame(mot1, mot2) {
    if (mot1.length !== mot2.length) {
      return false;
    }
  
    const tab1 = mot1.split("");
    const tab2 = mot2.split("");
  
    // Mélange karakte yo
    tab1.sort();
    tab2.sort();
  
    // Konparezon
    for (let i = 0; i < tab1.length; i++) {
      if (tab1[i] !== tab2[i]) {
        return false;
      }else{
          retirn true;
    }
}
let rezilta = estAnagrame("David", "divaD");
console.info(rezilta);
  
