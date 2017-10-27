$('#ajax-form button[type=submit]').click((event) => {
  event.preventDefault()
    // no need if button type is not 'submit',
      //   but make it work without ajax is a good practice

        $.get('try.php', {
            reply: $('#ajax-form input[name=reply]').val(),
                
                }, (data) => {
                    $('#ajax-output').html(data)
                      
                        })
                        $.get('try.php', {                                                            
                            
                                    reply1: $('#ajax-form input[name=reply1]').val(), 
                                            }, (data) => {
                                                        
                                                                        $('#ajax-output1').html(data)
                                                                                          })


                                                                                           // setTimeout(() => $('#ajax-output').html('loading'), 500)
                                                                                             // try to modify the timeout
                                                                                             })
