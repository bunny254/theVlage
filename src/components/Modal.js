import React, { Component } from 'react'


class ModalComp extends Component {
    state = { visible: this.props.visible };
    render() {
        return (
            <>
                <div id="default-modal" aria-hidden="false" className={`overflow-x-hidden  backdrop-filter backdrop-blur-lg overflow-y-auto  fixed h-full inset-0 z-50 justify-center items-center ${this.state.visible ? '' : 'hidden'}`}>
                    <div className="relative w-auto mt-[10rem] md:mt-[15rem] max-w-2xl mr-2 md:ml-[25rem] px-4 h-full md:h-auto">
                        {/* <!-- Modal content --> */}
                        <div className="bg-white rounded-lg shadow relative">
                            {/* <!-- Modal header --> */}
                            <div className="flex relative items-start justify-between p-5 border-b rounded-t">
                                <h3 className="text-xl lg:text-2xl font-semibold">
                                    {this.props.title}
                                </h3>
                                <button
                                    onClick={() => {
                                        this.setState({ visible: false });
                                        if (this.props.close) {
                                            this.props.close();
                                        }
                                    }}
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                                    data-modal-toggle="default-modal">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </button>
                            </div>
                            {/* <!-- Modal body --> */}
                            <div className="p-6 ">
                                {this.props.children}
                            </div>
                            {/* <!-- Modal footer --> */}

                            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                                <button onClick={this.props.handleConfirm} className="ui inverted violet button" >{this.props.conf_name}</button>
                                <button onClick={this.props.handleDeny} className="ui tertiary red button"> {this.props.deny_name} </button>
                            </div>


                        </div>
                    </div>
                </div>

            </>

        )

    }
    componentWillReceiveProps(props) {
        if (typeof props.visible !== "undefined") {
            this.setState({ visible: props.visible });
        }
    }
}
export default ModalComp
