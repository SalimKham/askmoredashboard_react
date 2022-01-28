import React from 'react'

import Table from '../components/table/Table'

import customerList from '../assets/JsonData/users-list.json'
import Badge from '../components/badge/Badge'

const customerTableHead = [
    
    'picture',
     'name',
    'email',
    'registered',
    'status',
    'action'
]

const renderHead = (item, index) => <th key={index}>{item}</th>
const userStatus = {
    "email confirmation": "primary",
    "not active": "warning",
    "active": "success",
    "blocked": "danger"
}
const renderEditOption = (param) => {
    switch(param) {
      case 'not active':
            return 'activate';
      case 'active':
            return 'Block';
     case 'blocked':
            return 'unblock';
      default:
        return '';
    }
  }
const renderBody = (item, index) => (
    <tr key={index}>
       
        <td>
        <div className="user__image">
            <img src={item.picture} alt="" />
        </div>
          </td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.registered}</td>
        <td> <Badge type={userStatus[item.status]} content={item.status} /></td>
        {
         item.status !=='email confirmation' ?  <td><button type="button" className='btn btn-dark'>{renderEditOption(item.status)}</button></td>:null
        }
    </tr>
)

const Users = () => {
    return (
        <div>
            <h2 className="page-header">
                Users
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit='10'
                                headData={customerTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={customerList}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users
