import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table'
import 'react-table/react-table.css'
// import './App.css';

// quick and smooth implementation of the Table component regarding the specifications

// developed with 'react-table' npm module:
// https://github.com/react-tools/react-table#custom-cell-header-and-footer-rendering


class Table extends Component {

    render() {

        // parsing data to create required columns

        const columns = this.props.columns.map(column => {

            // calculation summary for specified column
            // 'price' column is precised up to 2 digits

            function columnSum(data) {
                return data
                    .map(el => el[column])
                    .reduce((x, y) => {
                        return column === 'price' ?  parseFloat(x + y).toFixed(2) : x + y;
                    });
            }

            // create a summary for a particular column

            const footer = this.props.summary && this.props.summary.includes(column) ? columnSum(this.props.data) : '';

            return {
                Header: column,
                accessor: column,
                Footer: footer
            }
        });

        const sortBy = {id: this.props.sortBy};


        return (
            <div className="table">
                <div className="App-header">
                    <ReactTable
                        data={this.props.data}
                        columns={columns}
                        sortable={false}
                        showPagination={false}
                        sorted={[sortBy]}
                        pageSize={this.props.data.length}

                    />
                </div>
            </div>
        );
    }
}

Table.PropTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
    summary: PropTypes.array,
    sortBy: PropTypes.string
};

Table.DefaultProps = {
    data: [],
    columns: [],
    summary: [],
    sortBy: ''
};

export default Table;
