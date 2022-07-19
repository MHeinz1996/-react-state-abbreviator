import * as stateData from '../statedata/index.js'

function ListStates() {

    let states = []
    if(states.length < 1) {
        for (let i=0; i<stateData.default.length;i++) {
            // push a dropdown item to the states array, with an onClick event
            // using an anonymous function as a wrapper function so that I can
            // pass a parameter to the ListAbbr function
            states.push(<li key={i}><a className='dropdown-item' href='#' onClick={() => {
                ListAbbr(i)
            }}>{stateData.default[i].name}</a></li>)
        }
    }

    return states
}

function ListAbbr(i) {
    document.getElementById('Abbr').innerHTML = stateData.default[i]['alpha-2']
}

export default ListStates