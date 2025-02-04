let tet = document.getElementById("testbuttton");


let display = document.getElementById("Answer");


let userint = document.getElementById("userint");

userint.max = new Date().toISOString().split("T")[0];

let btnentry = document.getElementById("btnentry");


function Enter(){


    


    let birthDate =new Date(userint.value);

    console.log(birthDate)



    if(birthDate == "Invalid Date"){

        display.style.color = "red" ;

        display.textContent = "Enter the valid year"

    }else{

    
        display.style.color = "green" ;

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth()+1;
    let y1 = birthDate.getFullYear();


    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth()+1;
    let y2 = today.getFullYear();


    let d , m , y ;

    y = y2 - y1 ;

    if(m2 >= m1){
        m = m2 - m1 ;
    }else{
        y--;
        m = 12 + m2 - m1 ;
    }

    if(d2 > d1 ){
        d = d2 - d1 ;
    }else{
        m--;
        d = getDaysInM(y1,m1) + d2 - d1
    }
    if(m < 0){
        m =11 
        y--;
    }



    let result = `You are ${y} Year ,${m} Months , ${d} Days`
    display.textContent = result;




    }
    


    

}




function getDaysInM(y1,m1){
    return new Date(y1,m1,0).getDate();
}



