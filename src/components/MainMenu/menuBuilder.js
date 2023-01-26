import React, { useEffect, useState } from 'react';
import MenuItem from './menuItem';






export default function MenuBuilder(props) {


    const { menu } = props

    return (
        <div className="">
            <div className="relative m-10 md:m-10">
                <div className="flex flex-wrap -m-2">

                    {
                        menu.map(menui => (
                            <MenuItem
                                key={menui.title}
                                title={menui.title}
                                link={menui.link}
                                icon={menui.icon}
                                description={menui.description}
                            />
                        ))
                    }


                </div>


            </div>


        </div>
    )
}
