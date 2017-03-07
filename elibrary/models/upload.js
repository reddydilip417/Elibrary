var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var path = require('path');

var filePluginLib = require('mongoose-file');
var filePlugin = filePluginLib.filePlugin;
var make_upload_to_model = filePluginLib.make_upload_to_model;

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var uploads_base = path.join(__dirname, "uploads");
var uploads = path.join(uploads_base, "u");

// create a schema
var adminlogSchema = new Schema({
    bookname: {
        type: String,
        required: true,
        
    },
    authorname: {
        type: String,
        required: true,
        
    },
    
    
    category: {
        type: String,
        required: true
        
    },
    
    cost: {
        type: Currency,
        required: true
        
    },
    
    
    
    
}, {
    timestamps: true
});

    adminlogSchema.plugin(filePlugin, {
    name: "file",
    upload_to: make_upload_to_model(uploads, 'pdfs'),
    relative_to: uploads_base
});

// the schema is useless so far
// we need to create a model using it
var adminL = mongoose.model('book', adminlogSchema);

// make this available to our Node applications
module.exports = adminL;