import {withStyles} from '@material-ui/core/styles'
import {compose} from 'recompose'
import {styles} from './styles'
import {graphql} from 'react-apollo'
import {addDirectorMutation, updateDirectorMutation} from './mutations'
import {directorsQuery} from '../DirectorsTable/queries'

const withGraphq = compose(
    graphql(updateDirectorMutation, {
        props: ({mutate}) => ({
            updateDirector: (director) =>
                mutate({
                    variables: director,
                    refetchQueries: [{query: directorsQuery, variables: {name: ''}}],
                }),
        }),
    }),
    graphql(addDirectorMutation, {
        props: ({mutate}) => ({
            addDirector: (director) =>
                mutate({
                    variables: director,
                    refetchQueries: [{query: directorsQuery, variables: {name: ''}}],
                }),
        }),
    })
)

export default compose(withStyles(styles), withGraphq)
