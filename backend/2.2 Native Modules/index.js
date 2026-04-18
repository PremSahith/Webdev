const fs=require("fs");

fs.writeFile("prem.txt","hI HI S",(err)=>{
    if(err) throw err;
    console.log("file saved");

        fs.appendFile("prem.txt","\n new line",(err)=>
    {   
        if(err) throw err;
         console.log("appendend");

            fs.readFile("prem.txt","utf8",(err,data)=>{
                 if(err){
                  console.log("errr");
                      return;
                 }
                    console.log(data);
                  });
        
        });
});