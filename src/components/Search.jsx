import { useState, useContext } from 'react'
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from 'firebase/firestore'
import { db } from '.././firebase'
import { userAuthContext } from '../contexts/UserAuthContext'
import profileImg from '.././assets/profile.png'
// import { updateCurrentUser } from 'firebase/auth'

function Search() {
  const [username, setUsername] = useState('')
  const [user, setUser] = useState(null)
  const [error, setError] = useState(false)

  const { currentUser } = useContext(userAuthContext)

  const handleChange = (e) => {
    setUsername(e.target.value)
  }

  const handleKeyDown = (e) => {
    e.code === 'Enter' && handleSearch()
  }

  // search for user with firebase query
  const handleSearch = async () => {
    const q = query(
      collection(db, 'users'),
      where('displayName', '==', username)
    )

    try {
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
        console.log(doc.data())
      })
    } catch (error) {
      setError(true)
    }
  }

  //function for creating chat room for two users
  const handleChooseUser = async () => {
    //check if the chat room exists in firestore

    //combining users ID
    const checkIDs =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid
    try {
      const res = await getDoc(doc(db, 'chatroom', checkIDs))
      //if there is chat room (response) between two user not exists
      if (!res.exists()) {
        await setDoc(doc, (db, 'chatroom', checkIDs), { messages: [] })

        //create chat room
        await updateDoc(doc(db, 'userChats', currentUser.uid), {
          [checkIDs + '.userInfo']: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [checkIDs + '.date']: serverTimestamp(),
        })

        await updateDoc(doc(db, 'userChats', user.uid), {
          [checkIDs + '.userInfo']: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [checkIDs + '.date']: serverTimestamp(),
        })
      }
    } catch (error) {}
  }

  return (
    <div className=''>
      <div className='border-b border-neutral-500 '>
        <input
          className='bg-transparent w-[100%] border-2 px-2 py-1 border-black text-white text-[0.75em]  border-none focus:outline-0'
          type='text'
          placeholder='Search for user..'
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={username}
        />
      </div>
      {error && (
        <p className='text-center text-[0.65em] py-1 text-rose-600'>
          There is no such user!
        </p>
      )}
      {user && (
        <div
          className='flex items-center p-2 cursor-pointer hover:bg-stone-800 gap-2'
          onClick={handleChooseUser}
        >
          <img
            src={user.photoURL ? user.photoURL : profileImg}
            alt='avatar'
            className='h-[30px] w-[30px] rounded-full bg-grey-100 object-cover'
          />
          <div>
            <span className='text-white text-sm p-1'>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Search
