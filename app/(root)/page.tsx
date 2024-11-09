import React from 'react'
import {
  HeaderBox,
  TotalBalanceBox} 
from "../../components/index"

const Home = () => {
  const loggedIn = {firstName : "Mrigangka"}

  return (
    <section className="home">
      <div className='home-content'>
        <header className='home-header'>
          
          <HeaderBox 
            type = "greeting"
            title= "welcome"
            user={loggedIn?.firstName || 'guest'}
            subtext = "Access and Manage your account and transaction"/>

          <TotalBalanceBox
            accounts = {[]} 
            totalBanks = {1}
            totalCurrentBalance = {1250.35}
          />
        </header>
      </div>

    </section>
  )
}
export default Home