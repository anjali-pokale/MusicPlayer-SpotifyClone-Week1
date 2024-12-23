const mongoose=require("mongoose");

const  Playlist=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    thumbnail:{
        type:String,
        required:true,
    },
    songs:[
        {
        type:String,
        ref:"song",
    },
],
collaborators:[{
    type:mongoose.Types.ObjectId,
    ref:"user",
},],
    owner:{
        type:mongoose.Types.ObjectId,
        ref:"user",
    },

});

const PlaylistModel=mongoose.model("Playlist",Playlist);

module.exports=PlaylistModel;