import React, { Component } from 'react';
import Table from "./components/Table";
// import './App.css';


const ITEMS = [
    {
        brand: 'Intel',
        id: 10007598,
        title: 'STK1AW32SC x5-Z8300 1.44GHz',
        description: 'Compute Stick',
        count: 1234,
        price: 75.5
    },
    {
        brand: 'NVidia',
        id: 10160045,
        title: 'Gigabyte GeForce GTX 1080 Ti Gaming',
        description: 'Graphics Card',
        count: 746,
        price: 286.66
    },
    {
        brand: 'Bose',
        id: 10090403,
        title: 'Wave SoundTouch Music System IV',
        description: 'Wireless Speaker',
        count: 230,
        price: 599.95
    }
];


class App extends Component {
    render() {
        return (
            <div>
                <Table
                    data={ITEMS}
                    columns={['brand', 'title', 'description']}
                    sortBy="brand"
                />
                <Table
                    data={ITEMS}
                    columns={['id', 'brand', 'title', 'count']}
                    summary={['count']}
                    sortBy="id"
                />

                <Table
                    data={ITEMS}
                    columns={['brand', 'description', 'title', 'count', 'price']}
                    summary={['count', 'price']}
                />
            </div>
        );
    }
}

export default App;
