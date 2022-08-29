import {db} from "../firebase";
import {useCollection} from "react-firebase-hooks/firestore";

export default function useRooms() {
    const [snapshot]=useCollection(
        db.collection("rooms").orderBy("createdTime","asc")
    )
    const rooms=snapshot?.docs.map(doc=>({
        id:doc.id,
        userID:doc.userid,
        ...doc.data()
    }))
    return rooms;
}
