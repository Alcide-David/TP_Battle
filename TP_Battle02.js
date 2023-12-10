function renverserChaine(chaine) {
    // Nou retire espas 
    const tab = chaine.replace(/\s/g, '').split("");
  
    tab.reverse();

    return tab.join("");
  }
  
  let chaine = renverserChaine("Ayibobo Ayiti");
  console.info(chaine);
  
