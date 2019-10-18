class Auth{

    constructor(){

        localStorage.setItem('authentication', localStorage.getItem('authentication'));
    }

    login( callback, username, password ){
        if( username == 'react_admin' && password == 'Adobe110#' )
        {
            localStorage.setItem('authentication', 1);
            callback();
        }
        else{
            localStorage.setItem('authentication', 0);
        }
        
    }

    logout( callback ){
        localStorage.setItem('authentication', 0);
        callback();
    }

    isAuthenticated(){
        return localStorage.getItem('authentication');
    }

}

export default new Auth;