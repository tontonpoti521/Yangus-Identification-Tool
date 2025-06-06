// イベント設定
document.getElementsByTagName("form")[0].addEventListener("change", shikibetu);
window.addEventListener("load", shikibetu);

// 識別候補表示
function dispList(appItem, b, formValue, kiso){
    let tmp =  Object.entries(b)
    let listTable = document.getElementById("allListTable");

    const result = new Map(tmp)
    // 買値
    if(formValue[0].urikai == "1"){
        if(b.買値 == kiso && result.get(formValue[0].dungeon) == 1){
            let newP1 = document.createElement("p");
            newP1.innerHTML = b.名;
            appItem.appendChild(newP1);
        }
    }
    // 売値
    else if(formValue[0].urikai == "2"){
        if(b.売値 == kiso && result.get(formValue[0].dungeon) == 1){
            let newP1 = document.createElement("p");
            newP1.innerHTML = b.名;
            appItem.appendChild(newP1);
        }
    }
    // アイテム全リスト表示
    if(result.get(formValue[0].dungeon) == 1){
        let newTr = document.createElement("tr");
        newTr.innerHTML = "<td>"+b.名+"</td>";
        // console.log(b)
        // let shikiSyu = 
        // if(shikiSyu){

        // }
        listTable.appendChild(newTr);
    }
}

function shikibetu(){
    // 入力値の取得
    let formValue = [
        {
            "dungeon":  document.getElementsByName("dungeon")[0].value,
            "syu":      document.getElementsByName("syu")[0].value,
            "urikai":   document.getElementsByName("urikai")[0].checked? 1:2,
            "kazu":     document.getElementsByName("kazu")[0].value,
            "kakaku":   document.getElementsByName("kakaku")[0].value
        }
    ] 
    //表示中のアイテムリストの削除
    let appItem = document.getElementById("items")
    appItem.innerHTML = "";
    let listTable = document.getElementById("allListTable");
    listTable.innerHTML="";

    //武器リストの表示
    if(formValue[0].syu === "武器"){
        // 基礎価格の計算
        let d1 = (!formValue[0].kakaku=="")?new Decimal(formValue[0].kakaku):new Decimal("0");
        let d2 = new Decimal(1 + 0.05 * formValue[0].kazu);
        let kiso = d1.div(d2).toNumber();
        for(b of buki){
            dispList(appItem, b, formValue, kiso);
        }
    }
    //盾リストの表示
    if(formValue[0].syu === "盾"){
        // 基礎価格の計算
        let d1 = (!formValue[0].kakaku=="")?new Decimal(formValue[0].kakaku):new Decimal("0");
        let d2 = new Decimal(1 + 0.05 * formValue[0].kazu);
        let kiso = d1.div(d2).toNumber();
        for(b of tate){
            dispList(appItem, b, formValue, kiso);
        }
    }
    //指輪リストの表示
    if(formValue[0].syu === "指輪"){
        // 基礎価格の計算
        let d1 = (!formValue[0].kakaku=="")?new Decimal(formValue[0].kakaku):new Decimal("0");
        let d2 = new Decimal(1 + 0.05 * formValue[0].kazu);
        let kiso = d1.div(d2).toNumber();
        for(b of yubiwa){
            dispList(appItem, b, formValue, kiso);
        }
    }
    //お守りリストの表示
    if(formValue[0].syu === "お守り"){
        let kiso = formValue[0].kakaku;
        for(b of omamori){
            dispList(appItem, b, formValue, kiso);
        }
    }
    //草リストの表示
    if(formValue[0].syu === "草"){
        let kiso = formValue[0].kakaku;
        for(b of kusa){
            dispList(appItem, b, formValue, kiso);
        }
    }
    //巻物リストの表示
    if(formValue[0].syu === "巻物"){
        let kiso = formValue[0].kakaku;
        for(b of makimono){
            dispList(appItem, b, formValue, kiso);
        }
    }
    //杖リストの表示
    if(formValue[0].syu === "杖"){
        // 基礎価格の計算
        let d1 = (!formValue[0].kakaku=="")?new Decimal(formValue[0].kakaku):new Decimal("0");
        let d2 = new Decimal(1 + Number(formValue[0].kazu));
        let kiso = d1.div(d2).toNumber();
        for(b of tue){
            dispList(appItem, b, formValue, kiso);
        }
    }
    //壺リストの表示
    if(formValue[0].syu === "壺"){
        // 基礎価格の計算
        let d1 = (!formValue[0].kakaku=="")?new Decimal(formValue[0].kakaku):new Decimal("0");
        let d2 = new Decimal(1 + Number(formValue[0].kazu));
        let kiso = d1.div(d2).toNumber();
        for(b of tubo){
            dispList(appItem, b, formValue, kiso);
        }
    }
}