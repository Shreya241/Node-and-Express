// const{readFile,writeFileSync, write}=require('fs');

// const first=readFileSync('./content/subfolder/first.txt','utf8');
// const second=readFileSync('./content/subfolder/second.txt','utf8');

// console.log(first,second);

// writeFileSync('./content/subfolder/result.txt',`Results - ${first},${second}`,{flag:'a'})

const{readFile,writeFile, read}=require('fs');

readFile('./content/subfolder/first.txt','utf8',(err,result)=>{
   if(err){
    console.log(err);
    return;
   }
   const first=result;
   readFile('./content/subfolder/second.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
       }
       const second=result;
       writeFile('./content/subfolder/result-async.txt',`${first},${second}`,(err,result)=>{
        if(err){
            console.log(err);
            return;
           }
           console.log(result);
       })
   })
})