import * as stateData from '../statedata/index.js'

function ListStates() {

    let states = []
    if(states.length < 1) {
        for (let i=0; i<stateData.default.length;i++) {
            // console.log(stateData.default[i].name)
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