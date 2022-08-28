import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { db,auth,createTimeStamp } from "../firebase";
export default function useAuthUser() {
    const [user] = useAuthState(auth);
    useEffect(()=>{
        if(user)
        {
            console.log(user);
            const ref=db.collection("users").doc(user.uid);
            ref.get().then((doc)=>{console.log(doc)
                if(!doc.exists)
                {
                    ref.set({
                        name:user.displayName,
                        photo:user.photoURL,
                        timestamp:createTimeStamp()
                    })
                }
            
            })

        }
    }) 
    return user 
}
