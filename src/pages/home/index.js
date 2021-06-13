import React from 'react'
import { connect } from 'dva'
import { Button } from 'antd'
import LayoutContainer from '@pages/layout/default'
import {setSessionStorage} from '@utils/helper'


const Home = props => {
    const { dispatch } = props

    const add = () => dispatch({ type: 'counter/increment' })
    const minus = () => dispatch({ type: 'counter/decrement' })
    const change = () => dispatch({ type: 'text/change' })
    const delayChange = () => dispatch({ type: 'counter/decrementAsync' })

    return (
        <LayoutContainer>
            {props.count}
            <Button onClick={add}>+1</Button>
            <Button onClick={minus}>-1</Button>
            <Button onClick={change}>{props.text}</Button>
            <Button onClick={delayChange}>延迟变更</Button>
            <Button onClick={setStorage}>设置Storage</Button>
        </LayoutContainer>
    )
}

const setStorage = () => {
    setSessionStorage('a.a2', {'bb': 11})
}

const mapStateToProps = (state, ownProps) => {
    return {
        count: state.counter.count,
        text: state.text.value
    }
}

export default connect(
    mapStateToProps
)(Home)