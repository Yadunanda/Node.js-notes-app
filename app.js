let v = require('validator');
let chalk =require('chalk');
let yargs=require('yargs')
let notes=require('./notes.js')
//add, remove, read, list
//add
yargs.command({
    command:'add',
    describe: 'For adding your notes',
    builder:{
        title:{
            describe:'note-title',
            demandOption:true,
            type:'string'
        },
    body:{
        describe:'body of the note',
        demandOption:true,
        type:'string'
    }   
    },
    handler:function(argv){
        notes.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command:'remove',
    describe: 'For removing your notes',
    builder:{
        title:{
            describe:'note-title',
            demandOption:true,
            type:'string'
        } 
    },
    handler:function(argv){
        notes.removeNotes(argv.title)
    }
})

yargs.command({
    command:'read',
    describe: 'For reading your notes',
    builder:{
        title:{
            describe:'note-title',
            demandOption:true,
            type:'string'
        } 
    },
    handler:function(argv){
        notes.readNote(argv.title)
    }
})


yargs.command({
    command:'list',
    describe: 'For listing your notes',
    handler: function(argv){
        notes.listNotes(argv.title)
    }
    
})




//console.log(process.argv);
console.log(yargs.argv);