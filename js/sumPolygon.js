function sumPolygon(input_1){
    if(parseInt(input_1) < 2 ){
        errorShow('will always be greater than 2.');
    }else{
        errorRemove();
        return (parseInt(input_1) - 2)*180;
    }

}
