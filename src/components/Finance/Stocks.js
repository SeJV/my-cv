import React from 'react'

class Stocks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch('https://www.sebastian-vogt.dev/api/finance', {
            method: 'GET'
        })
            .then(res => {
                console.log(res)
                return res.json()
            })
            .then((result) => {
                this.setState({
                    isLoaded: true,
                    items: result
                });
            }, (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            })
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            if(items) {
                console.log(items)
            }
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    {console.log(items)}
                </ul>
            );
        }
    }
}

export default Stocks
