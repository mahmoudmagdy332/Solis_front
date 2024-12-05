export function baseUrl():string{
    const lang=localStorage.getItem('lang');
    // let  base="http://127.0.0.1:8000/en/api/";
    let  base="https://solis.inticafe.com/en/api/";
    if(lang){
        base=`https://solis.inticafe.com/${lang}/api/`;
        // base=`http://127.0.0.1:8000/${lang}/api/`;
    }
    return base;
  }