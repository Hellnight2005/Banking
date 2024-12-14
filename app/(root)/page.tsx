import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn = { firstName: 'Abhijeet', lastName: 'Shinde', email: 'abhijeet2005shinde@gmail.com' }
    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox
                        type='greeting'
                        title='Welcom'
                        user={loggedIn?.firstName || 'Guest'}
                        subtext="Access and manage you account "
                    />

                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250}
                    />
                </header>

                recent Traction
            </div>
            <RightSidebar user={loggedIn}
                transactions={[]}
                banks={[]} />

        </section>
    )
}

export default Home
