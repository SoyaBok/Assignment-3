// Kilometre to Metre Converter
// 1 km = 1000 m

function kilometerToMeter(km) {
    if ( km < 0) {
        console.log('Error! Input value cannot be negative');
    }
    else {
        var result = km * 1000;
        return result;
    }   
}

// Budget Calculator 
//  price of watch(w) 50
//  price of phone(p) 100
//  price of laptop(l) 500

 function budgetCalculator(w, p, l) {                              
    if ( w < 0 || p < 0 || l < 0) {
        console.log('Error! Input value cannot be negative');   
    }
    else {
        var result = w*50 + p*100 + l*500;
        return result;
    }
 }
 
//Hotel Cost Calculator
// 10 days cost 100
// 20 days cost 80
// 20+ days cost 50

function hotelCost(days) {
    if ( days < 0) {
        console.log('Error! Input value cannot be negative');
    }
    if(days <= 10){
        var result = days*100;
        return result;
    }
    if(days <= 20){
        var result = 10*100 + (days-10)*80;
        return result;
    } 
    else {
        var result = 10*100 + 10*80 + (days-20)*50;
        return result;
    }
}

 //Mega Friend
 var longest = '';
 var name = [];
 function megaFriend(name){
     
     for (i = 0; i < name.length; i++){
         if (name[i].length > longest.length){
             longest = name[i];
         }
     }
     return longest;
 }