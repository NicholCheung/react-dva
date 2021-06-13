import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'

class MainContent extends React.Component {
    render() {
        return (
            <Layout.Content>
                {this.props.children}
            </Layout.Content>
        )
    }
}

MainContent.propTypes = {
    children: PropTypes.any
}

export default MainContent