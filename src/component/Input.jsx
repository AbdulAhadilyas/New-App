import React from 'react'

export default function input(props) {
    return (
        <div>
            <div className='input-box'>


                <form onSubmit={props.submitInput}>
                    <input className="css-input" id="" type="text" placeholder="Enter Your Topic" onChange={(event) => {
                        props.getInput(event.target.value)
                    }} />

                    <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Button
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    )
}
