import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
  <Family lastName='da Silva'>
    <Member name='Rafael' />
    <Member name='Guilherme' />
    <Member name='Julia' />
  </Family>
, document.getElementById('app'))
