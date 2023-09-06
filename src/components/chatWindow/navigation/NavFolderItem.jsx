import React from "react";
import { MdBorderAll, MdOutlineLockOpen, MdOutlinePerson3, MdWorkOutline, MdOutlineNewspaper } from "react-icons/md";
import { useTranslation } from 'react-i18next';


export default function NavFolderItem() {
    const { t } = useTranslation()

    return (
        <>
            <div className='folders__folder active-folder'>
                <div className="folders__title cursor-pointer">
                    <MdBorderAll size={17} />
                    <h3 className='text-inter-16-400'>{t('navigation.mine')}</h3>
                </div>
                <h3 className='text-inter-16-400'>31</h3>
            </div>
            <div className='folders__folder'>
                <div className="folders__title cursor-pointer">
                    <MdOutlineLockOpen size={17} />
                    <h3 className='text-inter-16-400'>Приватні</h3>
                </div>
            </div>
            <div className='folders__folder'>
                <div className="folders__title cursor-pointer">
                    <MdOutlinePerson3 size={17} />
                    <h3 className='text-inter-16-400'>Друзі</h3>
                </div>
            </div>
            <div className='folders__folder'>
                <div className="folders__title cursor-pointer">
                    <MdWorkOutline size={17} />
                    <h3 className='text-inter-16-400'>Робота</h3>
                </div>
            </div>
            <div className='folders__folder'>
                <div className="folders__title cursor-pointer">
                    <MdOutlineNewspaper size={17} />
                    <h3 className='text-inter-16-400'>Новини</h3>
                </div>
            </div>
            {/* <div className='folders__folder'>
                <div className="folders__title cursor-pointer">
                    <MdOutlineLocalMall size={17}/>
                    <h3 className='text-inter-16-400'>Послуги</h3>
                </div>
            </div>
            <div className='folders__folder'>
                <div className="folders__title cursor-pointer">
                    <MdFlipToFront size={17}/>
                    <h3 className='text-inter-16-400'>Інше</h3>
                </div>
            </div> */}

        </>
    )
}
