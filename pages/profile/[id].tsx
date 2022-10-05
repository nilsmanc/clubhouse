import React from 'react'
import { Header } from '../../components/Header'
import { Profile } from '../../components/Profile'

export default function ProfilePage() {
  return (
    <>
      <Header />
      <div className='container mt-30'>
        <Profile
          avatarUrl='https://www.shareicon.net/data/512x512/2016/05/29/772559_user_512x512.png'
          fullname='Maxim Maximov'
          username='maxim'
          about='Test info'
        />
      </div>
    </>
  )
}
