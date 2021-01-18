import React from 'react'
import MenuItem from './MenuItem'
import { Large, Medium } from './Text'

interface MenuItemData {
    text: string
    to: string
}

interface MenuData {
    [name: string]: MenuItemData[]
}

const menuData: MenuData = {
    Home: [
        { text: 'Beds', to: '/category' },
        { text: 'Cupboards', to: '/category' },
        { text: 'Drawers', to: '/category' }
    ],
    Office: [
        { text: 'Office Chairs', to: '/category' },
        { text: 'Reception Counters', to: '/category' }
    ],
    Other: [{ text: 'Display Units', to: '/category' }]
}

const Category = ({ data, title }: { data: MenuItemData[], title: string }) => {
    return <li className='relative hover:z-30 z-0 hover:text-wine group'><Medium className='cursor-pointer leading-loose font-bold'>{title}</Medium>
        <ul className='absolute  left-28 top-2 text-black opacity-0  transition-all hover:z  group-hover:opacity-100'>
            {
                data.map((props) => <MenuItem className='text-lg' {...props} key={props.text} />)
            }
            <MenuItem className='font-bold mt-4' text='More>' to={`/catalog#${title}`} />
        </ul>
    </li>
}

export default () => {
    return <ul className='mt-12'>
        {Object.entries(menuData).map(([title, data]) =>
            <Category
                data={data}
                title={title}
                key={title}
            />
        )}
    </ul>

}