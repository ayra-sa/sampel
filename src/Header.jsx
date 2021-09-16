import './App.css'
import {ImArrowLeft, ImArrowRight, ImCross, ImHome, ImSearch} from 'react-icons/im'

const Header = () => {
    return (
        <header>
            <div className="title">
                <h4>A Web Page</h4>
            </div>
            <div className="sub-header">
                <ImArrowLeft />
                <ImArrowRight />
                <ImCross />
                <ImHome />
                <div className='search'>
                    <input
                        type='text'
                        value='http://'
                    />
                </div>
                <div className='search-icon'>
                    <ImSearch />
                </div>
            </div>
        </header>
    )
}

export default Header