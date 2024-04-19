import mongoose  from "mongoose";
import { type } from "os";

const listingSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    regularPrice:{
        type:Number,
        requried:true,
    },
    discountedPrice:{
        type:Number,
        requried:true,
    },
    bathrooms:
    {
        type:Number,
        requried:true,
    },  
    furnished:{
        type:Boolean,
        requried:true,
    },
    parking:{
        type:Boolean,
        requried:true,
    },
    type:{
        type:String,
        required:true
    },
    offer:{
        type:Boolean,
        requried:true
    },
    imageUrls:{
        type:Array,
        requried:true
    },
    userRef:{
        type:String,
        required:true
    }

},{timestamps:true})

const Listing = mongoose.model("listing",listingSchema)

export default Listing;