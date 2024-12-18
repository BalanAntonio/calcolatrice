function calcola(op){
    let inp = document.getElementById("input");
    if(op==="="){
        let st = inp.innerHTML;
        st+=" "
        // ^ e radice
        for(let i = 0; i<st.length;i++){
            if(st[i]==="^"){
                let low;
                let high;
                for(let j = i-1;j>=0;j--){
                    if(isNaN(parseFloat(st[j])) && st[j]!="."){
                        low = j;
                        break;
                    }
                }

                for(let k = i+1;k<st.length;k++){
                    if(isNaN(parseFloat(st[k])) && st[k]!="."){
                        high = k;
                        break;
                    }
                }

                let p1 = (st.substring(low+1,i));
                let p2 = (st.substring(i+1,high));

                console.log(low);
                console.log(high);

                console.log(p1);
                console.log(p2);

                st = st.replace(p1+"^"+p2,Math.pow(parseFloat(p1),parseFloat(p2)).toFixed(2));
                console.log(st);
                i=0;
            }else if(st[i]==="√"){
                let low;
                let high;
                

                for(let k = i+1;k<st.length;k++){
                    if(isNaN(parseFloat(st[k])) && st[k]!="."){
                        high = k;
                        break;
                    }
                }

                let p2 = (st.substring(i+1,high));

                console.log(low);
                console.log(high);

                //console.log(p1);
                console.log(p2);

                st = st.replace("√"+p2,Math.sqrt(parseFloat(p2)).toFixed(2));
                console.log(st);
                i=0;
            }
        }
        //* e /
        for(let i = 0; i<st.length;i++){
            if(st[i]==="*"){
                let low;
                let high;
                for(let j = i-1;j>=0;j--){
                    if(isNaN(parseFloat(st[j])) && st[j]!="."){
                        low = j;
                        break;
                    }
                }

                for(let k = i+1;k<st.length;k++){
                    if(isNaN(parseFloat(st[k])) && st[k]!="."){
                        high = k;
                        break;
                    }
                }

                let p1 = (st.substring(low+1,i));
                let p2 = (st.substring(i+1,high));

                console.log(low);
                console.log(high);

                console.log(p1);
                console.log(p2);

                st = st.replace(p1+"*"+p2,(parseFloat(p1)*parseFloat(p2)).toFixed(2));
                console.log(st);
                i=0;
            }else if(st[i]==="/"){
                let low;
                let high;
                for(let j = i-1;j>=0;j--){
                    if(isNaN(parseFloat(st[j])) && st[j]!="."){
                        low = j;
                        break;
                    }
                }

                for(let k = i+1;k<st.length;k++){
                    if(isNaN(parseFloat(st[k])) && st[k]!="."){
                        high = k;
                        break;
                    }
                }

                let p1 = (st.substring(low+1,i));
                let p2 = (st.substring(i+1,high));

                console.log(low);
                console.log(high);

                console.log(p1);
                console.log(p2);

                st = st.replace(p1+"/"+p2,(parseFloat(p1)/parseFloat(p2)).toFixed(2));
                console.log(st);
                i=0;
            }
        }
        //+ e -
        for(let i = 0; i<st.length;i++){
            if(st[i]==="+"){
                let low;
                let high;
                for(let j = i-1;j>=0;j--){
                    if(isNaN(parseFloat(st[j])) && st[j]!="."){
                        low = j;
                        break;
                    }
                }

                for(let k = i+1;k<st.length;k++){
                    if(isNaN(parseFloat(st[k])) && st[k]!="."){
                        high = k;
                        break;
                    }
                }

                let p1 = (st.substring(low+1,i));
                let p2 = (st.substring(i+1,high));

                console.log(low);
                console.log(high);

                console.log(p1);
                console.log(p2);

                st = st.replace(p1+"+"+p2,(parseFloat(p1)+parseFloat(p2)).toFixed(2));
                console.log(st);
                i=0;
            }else if(st[i]==="-"){
                let low;
                let high;
                for(let j = i-1;j>=0;j--){
                    if(isNaN(parseFloat(st[j])) && st[j]!="."){
                        low = j;
                        break;
                    }
                }

                for(let k = i+1;k<st.length;k++){
                    if(isNaN(parseFloat(st[k])) && st[k]!="."){
                        high = k;
                        break;
                    }
                }

                let p1 = (st.substring(low+1,i));
                let p2 = (st.substring(i+1,high));

                console.log(low);
                console.log(high);

                console.log(p1);
                console.log(p2);

                st = st.replace(p1+"-"+p2,(parseFloat(p1)-parseFloat(p2)).toFixed(2));
                console.log(st);
                i=0;
            }
        }
        document.getElementById("ris").innerHTML = "Risultato: " + st;
    }
    else if(op==="AC"){
        inp.innerHTML = "";
    }
    else{
        inp.innerHTML+=op;
    }
    
}

function op(pn,sn,ope){
    switch(ope){
        case "+":
            return pn+sn;
        break;
        case "-":
            return pn-sn;
        break;
        case "*":
            return pn*sn;
        break;
        case "/":
            if(sn===0){
                alert("Errore: impossibile dividere per 0");
                return;
            }else{
                return pn/sn;
            }
        break;
        case "^":
            if(pn===0 && sn===0){
                alert("Errore: impossibile dividere per 0");
                return;
            }else{
                return Math.pow(pn,sn);
            }
        break;
        case "√":
            if(pn<0){
                alert("Errore: la base della radice deve essere positiva");
                return;
            }
            return Math.sqrt(pn);
        break;
    }
}