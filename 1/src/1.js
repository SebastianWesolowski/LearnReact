import React from 'react';
import ReactDOM from 'react-dom';

const App = React.createElement(
    'div',
    {
        className: 'wrapper',
        item: 2
    },
    [
        React.createElement(
            'h1',
            { className: 'header' },
            'Hello Wrold 2'
        ),
        React.createElement(
            'h2',
            { className: 'subtitle' },
            'hellow'
        )
    ]
);

ReactDOM.render(
    <h1>Hello world</h1>,
    document.getElementById('root')
)

ReactDOM.render(
    App,
    document.getElementById('Newroot')
) 