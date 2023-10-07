function calcAge(input_1){ 
    if(parseInt(input_1) < 0 ){
        errorShow('Only positive integer inputs.');
    }else{
        errorRemove();
        return parseInt(input_1)*365 +'Days';
    }
}