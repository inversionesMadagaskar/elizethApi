const mongoose = require("mongoose")

const inmuebleSchema = new mongoose.Schema(
    {
        title:{type: String , required:true },
        desc:{type: String , required:true },
        price:{type:Number , required:true },
        carac:{type: Array , required:true },
        img:{type: Array },
        categories:{ type:String , required:true },
        location:{type: String , required:true },
        linkLocation:{type: String , required:true },
        sizeOne:{type: Number , required:true },
        sizeTwo:{type: Number , required:true },
        rooms:{type: Number , required:true },
        baths:{type: Number , required:true },
        park:{type: Number , required:true },
        descLocation:{type: String , required:true },
        inStock:{type:Boolean, default:true}
    },
    {timestamps: true }
);

module.exports = mongoose.model("Inmueble", inmuebleSchema);