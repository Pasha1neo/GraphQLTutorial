import React, {Component} from 'react'
import Tabs from './components/Tabs/Tabs'
import theme from './components/theme'
import AppolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
import {ThemeProvider} from '@material-ui/styles'

const client = new AppolloClient({
    uri: 'http://localhost:5000/graphql',
})

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <ThemeProvider theme={theme}>
                    <Tabs />
                </ThemeProvider>
            </ApolloProvider>
        )
    }
}

export default App
