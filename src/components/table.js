import React from "react";
export default class Table extends React.Component {

    constructor(props) {
        super(props);
        this.getHeader = this.getHeader.bind(this);
        this.getRowsData = this.getRowsData.bind(this);
        this.getKeys = this.getKeys.bind(this);
    }

    getKeys = function () {
        return Object.keys(this.props.data[0]);
    }

    getHeader = function () {
        var keys = this.getKeys();
        return keys.map((key, index) => {
            return <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400" key={key}>{key.toUpperCase()}</th>
        })
    }

    getRowsData = function () {
        var items = this.props.data;
        var keys = this.getKeys();
        return items.map((row, index) => {
            return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}><RenderRow key={index} data={row} keys={keys} /></tr>
        })
    }
    render() {
        return (
            <div className="flex flex-col" >
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden shadow-md sm:rounded-lg">
                            <table className="min-w-full">
                                <thead className="bg-gray-700">
                                    <tr>{this.getHeader()}</tr>
                                </thead>
                                <tbody>
                                    {this.getRowsData()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}
const RenderRow = (props) => {
    return props.keys.map((key, index) => {
        return <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400" key={props.data[key]}>{props.data[key]}</td>
    })
}