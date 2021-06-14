import React from 'react'
import LayoutContainer from '@pages/layout/default'
import { List, Card, Image } from 'antd'
import pic1 from '@assets/images/game_1.jpg'
import pic2 from '@assets/images/game_2.jpeg'
import pic3 from '@assets/images/game_3.jpg'
import pic4 from '@assets/images/game_4.jpg'

const OperationList = () => {

    const data = [
        {
            title: 'Rust',
            images: pic1
        },
        {
            title: 'Quest',
            images: pic2
        },
        {
            title: 'Frost Punk',
            images: pic3
        },
        {
            title: 'Half-life ALYX',
            images: pic4
        }
    ]

    return (
        <LayoutContainer type='inner'>
            <List
                grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <Card title={item.title}>
                            <Image
                                src={item.images}
                                preview={false}
                            />
                        </Card>
                    </List.Item>
                )}
            />
        </LayoutContainer>
    )
}

export default OperationList