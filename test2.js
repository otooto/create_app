


let log = (string,test) => {

    console.log(string);

    console.log(test);

    console.warn(string);

    if(test === undefined){

        console.log("undefinedです");
    }else{
        console.log("値があります");
    }

}

log("貴様あ",4);
