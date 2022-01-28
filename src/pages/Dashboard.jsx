import React from 'react'
import { Link } from 'react-router-dom'

import Chart from 'react-apexcharts'



import StatusCard from '../components/status-card/StatusCard'

import Table from '../components/table/Table'

import Badge from '../components/badge/Badge'

import statusCards from '../assets/JsonData/status-card-data.json'

const chartOptions = {
    series: [{
        name: 'Online Users',
        data: [40,70,20,90,36,80,30,91,60]
    }, {
        name: 'Tutorials',
        data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
    }],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        },
        legend: {
            position: 'bottom'
        },
        grid: {
            show: false
        }
    }
}

const topPosts = {
    head: [
        'user',
        'Post Title',
        'views'
    ],
    body: [
        {
            "username": "Salim Kham",
            "title": "Spring boot- hello word",
            "view": "21762"
        },
        {
            "username": "Djallel Toto",
            "title": "C# - Intoduction",
            "view": "18456"
        },
        {
            "username": "Amel mimi",
            "title": "Create your first react app",
            "view": "13401"
        },
        {
            "username": "Redouane Kh",
            "title": "List in Java",
            "view": "10257"
        },
        {
            "username": "anthony baker",
            "title": "Best frontend frameworks",
            "view": "8840"
        }
    ]
}

const renderPostsHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderPostsBody = (item, index) => (
    <tr key={index}>
        <td>{item.username}</td>
        <td>{item.title}</td>
        <td>{item.view}</td>
    </tr>
)

const newUsers = {
    header: [
        "order id",
        "user name",
        "user email",
        "date",
        "status"
    ],
    body: [
        {
            id: "#OD1711",
            user: "mohamed Ker",
            email: "moh@gmail.com",
            date: "17 Jun 2021",
            status: "active"
        },
        {
            id: "#OD1713",
            user: "Jhon me",
            email: "jn1996@mail.ru",
            date: "23 Sept 2021",
            status: "blocked"
        },
        {
            id: "#OD1715",
            user: "Ismail Aoan",
            email: "isAo@yandex.ru",
            date: "28 Sept 2021",
            status: "active"
        },
        {
            id: "#OD1721",
            user: "Billel bou",
            email: "boudjit@gmail.com",
            date: "15 Jan 2022",
            status: "not active"
        },
        {
            id: "#OD1722",
            user: "Saddam Hiba",
            email: "saddam98@hotmail.com",
            date: "25 Jan 2022",
            status: "email confirmation"
        }
    ]
}

const userStatus = {
    "email confirmation": "primary",
    "not active": "warning",
    "active": "success",
    "blocked": "danger"
}

const renderUserHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderUserBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.email}</td>
        <td>{item.date}</td>
        <td>
            <Badge type={userStatus[item.status]} content={item.status}/>
        </td>
    </tr>
)

const Dashboard = () => {

    

    return (
        <div>
            <h2 className="page-header">Dashboard</h2>
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        {
                            statusCards.map((item, index) => (
                                <div className="col-6" key={index}>
                                    <StatusCard
                                        icon={item.icon}
                                        count={item.count}
                                        title={item.title}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-6">
                    <div className="card full-height">
                        {/* chart */}
                        <Chart
                            options={ chartOptions.options}
                            series={chartOptions.series}
                            type='line'
                            height='100%'
                        />
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card__header">
                            <h3>top Posts</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={topPosts.head}
                                renderHead={(item, index) => renderPostsHead(item, index)}
                                bodyData={topPosts.body}
                                renderBody={(item, index) => renderPostsBody(item, index)}
                            />
                        </div>
                      
                    </div>
                </div>
                <div className="col-8">
                    <div className="card">
                        <div className="card__header">
                            <h3>New Users</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={newUsers.header}
                                renderHead={(item, index) => renderUserHead(item, index)}
                                bodyData={newUsers.body}
                                renderBody={(item, index) => renderUserBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/users'>view all</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
