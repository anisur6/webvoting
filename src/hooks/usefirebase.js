import { useEffect, useState } from "react"
import initializeAuth from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


initializeAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [admin, setAdmin] = useState();
    const [isLoading, setisLoading] = useState(true);



    const auth = getAuth()
    const googleprovider = new GoogleAuthProvider();


    //for new user 
    const registerUser = (email, password, name, history) => {
        setisLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const newUser = { email, displayName: name };
                setUser(newUser);


                //send user to the database
                saveUser(email, name, 'POST');


                setError(' ');
                history.replace('/');
            })
            .catch((error) => {
                setError(error.message);
            })

            .finally(() => setisLoading(false));
    }


    //for old user login system
    const loginUser = (email, password, location, history) => {
        setisLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const destination = location?.state?.from || '/dashboard';
                history.push(destination);
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                setError(error.message);
            })

            .finally(() => setisLoading(false));

    }



    //for google sign in system
    const signInUsingGoogle = (location, history) => {
        setisLoading(true)
        return signInWithPopup(auth, googleprovider)
            .then(result => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT')
                // Signed in 
                const destination = location?.state?.from || '/home';
                history.push(destination);
            })


            .catch(error => {
                setError(error.message);
            })

            .finally(() => setisLoading(false));
    }


    useEffect(() => {
        const url = `https://drneshop-online.herokuapp.com/users/${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const logOut = () => {
        setisLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(error => {
                setError(error.message);
            })

          

    }





    //saving user information 
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://drneshop-online.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }


    //observe user state
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setisLoading(false);
        })
    }, [])






    return {
        user,
        error,
        signInUsingGoogle,
        registerUser,
        admin,
        loginUser,
        isLoading,
        logOut
    }


}

export default useFirebase;