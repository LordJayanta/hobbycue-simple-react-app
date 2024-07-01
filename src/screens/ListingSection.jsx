import React from 'react'
import FeatureCard from '../components/FeatureCard'

const ListingSection = () => {
    return (
        <div className='bg-[#F7FDFF]  py-14'>
            <div className="main-container">
                <FeatureCard
                    title='Add your own'
                    decription='Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page'
                    iconPath="./img/png/Add.png"
                    btnTxt='Add new'
                />
            </div>
        </div>
    )
}

export default ListingSection
