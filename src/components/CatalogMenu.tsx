import React from 'react'
import MenuItem from './MenuItem'
import { Medium } from './Text'

interface MenuItemData {
    text: string
    to: string
}

interface MenuData {
    [name: string]: MenuItemData[]
}

const menuData: MenuData = {
    Home: [
        { text: 'Beds', to: '#' },
        { text: 'Cupboards', to: '#' },
        { text: 'Drawers', to: '#' }
    ],
    Office: [
        { text: 'Office Chairs', to: '#' },
        { text: 'Reception Counters', to: '#' }
    ],
    Other: [{ text: 'Display Units', to: '#' }]
}

const Category = ({ data, title }: { data: MenuItemData[], title: string }) => {
    return <li className='relative hover:z-30 z-0 hover:text-wine group'><Medium className='cursor-pointer leading-loose font-medium'>{title}</Medium>
        <ul className='absolute  left-28 top-2 text-black opacity-0  transition-all hover:z  group-hover:opacity-100'>
            {
                data.map((props) => <MenuItem {...props} key={props.text} />)
            }
            <MenuItem className='font-bold mt-4' text='More>' to={`/${title}`} />
        </ul>
    </li>
}

export default () => {
    return <ul className='mt-24'>
        {Object.entries(menuData).map(([title, data]) =>
            <Category
                data={data}
                title={title}
                key={title}
            />
        )}
    </ul>

}