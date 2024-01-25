// function parentFunction(name, callback){
//     callback();
//     console.log("Hey"+name);
// }
// function randomFunction(){
//     console.log("Hey I am callBckFunction");
// }
// parentFunction("Random String ",randomFunction);


// function parentFunction(name, callback){
//     setTimeout(callback,1000);
//     console.log("Hey "+name);
// }
// parentFunction("Random String",function(){
//     console.log("Hey I am a collback function");
// });


const parentFunction=(name, callback)=>{
    setTimeout(callback,1000);
    console.log("Hey "+name);
}
parentFunction("Random String",function(){
    console.log("Hey I am a collback function");
});