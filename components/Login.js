import {
    signIn
} from 'next-auth/client';
import Image from 'next/image';
// import React from 'react';
const Login = ({session}) => {
    console.log('session login',session)
    return (
        <div className='grid place-items-center'>
            <Image 
            src='/images/airbnblogo.png'
            height={400}
            width={400}
            objectFit='contain'
            />
            <h1 onClick={signIn} className='p-5 bg-red-400 rounded-full text-white text-center cursor-pointer font-bold m-3 hover:shadow-xl active:scale-90 transition duration-150'>let's go inside</h1>
        </div>
    )
}

export default Login
// export async function getServerSideProps(context) {
//     const session = await getSession(context)
//     console.log('je suis le context de get serverside',context)
//     return {
//       props: {
//         session
//       }
//     }
//   }