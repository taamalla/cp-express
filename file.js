
const fs = require('fs');
// // reading file

// // fs.readFile('./doc/blog.txt', (err, data)=>{
// //     if(err){
// //         console.log(err);
// //     } 
// //     console.log(data.toString());
// // });

// // writing file
// // fs.writeFile('./doc/blog.txt', 'hello world', ()  =>{
// //     console.log('file written');
// // });

// // fs.writeFile('./doc/blog1.txt', 'hello world', () => {
// //     console.log('file written');
// // });



// // directoris
// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err) =>{
//         if(err){
//             console.log(err);
//         }
//         console.log('folder created');
//     })
//     }
// else{
//     fs.rmdir('./assets', (err) => {
//         if(err){
//             console.log(err)
//         }
        
//         console.log('folder deleted');
//     })

// }



// deleting file

if(fs.existsSync('./doc/deleteme.txt')){
    fs.unlink('./doc/deleteme.txt', (err) => {
        if(err){
            console.log(err)
        }
        console.log('file deleted');
    })
}