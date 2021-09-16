import { ImClock, ImPlus } from "react-icons/im"
import { FaQuestion } from "react-icons/fa"
import { BiDollar } from "react-icons/bi"
import {GoChevronLeft} from 'react-icons/go'

const Main = () => {
    return (
        <>
            <div className="main">
                <div className="play-wrap">
                    <div className="top">
                        <div className="left-top">
                            <BiDollar />
                            <ImClock />
                        </div>
                        <div className="right-top">
                            <button>Claim</button>
                            <button>Log</button>
                            <FaQuestion />
                        </div>
                    </div>
                    <div className="char">
                        <h3>CHAR</h3>
                        <p>Win Rate:</p>
                        <button className='fight'>Fight</button>
                        <button className="plus">
                            <ImPlus />
                        </button>
                        <div className="stat">
                            <p>Stat</p>
                            <p>Stat</p>
                            <p>Stat</p>
                        </div>
                        <button className='stat-btn'>
                            <GoChevronLeft className='cl'/>
                            <span>Class</span>
                        </button>
                        <div className="bottom">
                            <label for="selected">
                                <select name="opt" id="selected">
                                    <option value=""></option>
                                    <option value="1">1</option>
                                </select>
                            </label>
                            <label htmlFor="select2">
                                <select name="opt" id="select2">
                                    <option value=""></option>
                                </select>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main
