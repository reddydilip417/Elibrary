function formauth(event){
    event.preventDefault();
    var formdata = $('#ars').serialize();
    $.ajax(
    {
        type: 'put',
        url: 'http://localhost:3000/comments',
        data: formdata,
        dataType: 'JSON' 
    }
    
    ).done(function (data){
        console.log(JSON.stringify(data));
        
        $('#ar').append('<ul><li> <b> Filename:</b> ' + data[0].file + '    <b>  Bookname:</b> ' + data[0].bookname + '    <b>  Authorname:</b>' + data[0].authorname+ '<b>Category:</b> ' + data[0].category + '  <b> Cost: </b> ' + data[0].cost.toFixed(2) + ' <button class="btn btn-primary btn-sm">  Subscribe </button> </li></ul>')
    });
}


function formbook(event){
    event.preventDefault();
    var formdata = $('#bn').serialize();
    $.ajax(
    {
        type: 'post',
        url: 'http://localhost:3000/comments',
        data: formdata,
        dataType: 'JSON' 
    }
    
    ).done(function (data){
        console.log(JSON.stringify(data));
       
        $('#bns').append('<ul><li> <b>  Filename:</b>  '  +  data[0].file +  '    <b>  Bookname:</b> '+ data[0].bookname + '    <b>  Authorname:</b>' + data[0].authorname + '<b>  Category:</b> ' + data[0].category + '  <b>  Cost:</b> ' + data[0].cost.toFixed(2) + '  <button class="btn btn-primary btn-sm">  Subscribe </button> </li></ul>')
    });
}


function formcat(event){
    event.preventDefault();
    var formdata = $('#cat').serialize();
    $.ajax(
    {
        type: 'copy',
        url: 'http://localhost:3000/comments',
        data: formdata,
        dataType: 'JSON' 
    }
    
    ).done(function (data){
        console.log(JSON.stringify(data));
        
        $('#cats').append('<ul><li> <b>  Filename:</b> ' + data[0].file  +  '   <b>  Bookname:</b> ' + data[0].bookname + '    <b>  Authorname:</b>' + data[0].authorname+ '<b>  Category:</b> ' + data[0].category  + '  <b>Cost:</b> ' + data[0].cost.toFixed(2) + '  <button class="btn btn-primary btn-sm">  Subscribe </button> </li></ul>')
    });
}