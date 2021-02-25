let fs =require('fs')
let chalk=require('chalk')

let addNote=(title,body)=>{
    let notes=loadNotes()
    let duplicateNotes=notes.find((notes)=>{
        return notes.title===title
    })
    if(!duplicateNotes){
        notes.push({title:title,body:body})
        console.log(notes);
        saveNotes(notes)  
        console.log('New note Added!'); 
    }
    else{
        console.log('Note title taken');
    }
}

let saveNotes=(notes)=>{
const dataJSON = JSON.stringify(notes)
fs.writeFileSync('notes.json',dataJSON)
}

let loadNotes=()=>{
    try{
        const dataBuffer=fs.readFileSync('notes.json')
        const dataJSON=dataBuffer.toString()
        return(JSON.parse(dataJSON))   

    }
    catch(error){
     return []
    }

}
//Remove notes
let removeNotes=(title)=>{
    let notes=loadNotes()
    let dupenotes=notes.filter((x)=>{return x.title!=title})
    //console.log(dupenotes);
    saveNotes(dupenotes)
    if(dupenotes.length<notes.length){
        console.log(chalk.red("One element is deleted"));

    }
    else{
        console.log(chalk.green("no element is deleted"));
    }
    
    //console.log('The given title is '+title);
}
//List command
let listNotes=()=>{
    console.log(chalk.green.inverse("Your notes"));
    let notes=loadNotes()
    notes.forEach(x => {
        console.log(x.title);
    });

}
//Read command
let readNote=(title)=>{
    let notes=loadNotes()
    let dupeNotes=notes.find((x)=>{
        return(x.title===title)})
    if(dupeNotes){
        console.log(chalk.blue.inverse(dupeNotes.title));
        console.log(dupeNotes.body);
    }
    else{
console.log(chalk.red.inverse("element not found"));    }

}

module.exports=
{
 addNote:addNote,
 removeNotes:removeNotes,
 listNotes:listNotes,
 readNote:readNote
}