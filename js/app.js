   function login()
        {
        var uname = document.getElementById('uname').value;
        var pwd = document.getElementById('pwd').value;
        if(uname == 'girupa' && pwd == 'test123')
        {
            alert('Login Successful');
            window.location.href = "MyNotes.html";
        }
        else
        {
            alert('Invalid User');
        }
    }

    function Redirect()
    {

    }