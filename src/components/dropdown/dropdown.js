import React, { useState, useRef, useEffect } from 'react'
import { dropdownStyles, ListItem } from './dropdown-style';


const Dropdown = ({ payload, searchable, defaultText }) => {
    const node = useRef()
    const search = useRef()
    const [data, setData] = useState(payload)
    const [selectedValue, setSelectedValue] = useState('')
    const [tempData, setTempData] = useState(payload)
    const [currentIndex, setCurrentIndex] = useState(-1)
    const [displayText, setDisplayText] = useState(defaultText || 'Select One')    
    const [show, setShow] = useState(false)

    const toggleDropdown = () => {
        setShow(!show)
    }

    const handleClickOutside = e => {
        if (node.current.contains(e.target)) {
            // inside click
            return;
        }
        // outside click
        setShow(false);
    };

    const handleListItemClick = e => {
        setSelectedValue(e.target.dataset.value)
        setDisplayText(e.target.textContent)
        setShow(false)
        search.current.value = ""
        setData(tempData)
    }

    const handleKeyboard = e => {
        switch (e.keyCode) {
            case 13: // enter 
                setShow(false)

                break;
            case 38: // up
                !show && setShow(true)
                if (currentIndex > 0) {
                    setCurrentIndex(currentIndex - 1)
                    setDisplayText(tempData[currentIndex - 1].text)
                }
                break;
            case 40: // down
                !show && setShow(true)
                if (currentIndex < tempData.length - 1) {
                    setCurrentIndex(currentIndex + 1)
                    setDisplayText(tempData[currentIndex + 1].text)
                }

                break;

            default:
                return;
        }
    }

    useEffect(() => {
        if (show) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [show]);

    return (
        <div ref={node} className="dropdown__container">
            {
                <div style={dropdownStyles.dropdown(show)}>
                    <div className="header" onClick={() => toggleDropdown()}>
                        <>
                            <input ref={search}
                                style={dropdownStyles.search(show)}
                                placeholder={displayText}
                                onKeyDown={e => handleKeyboard(e)}
                                onChange={(e) => {
                                    setCurrentIndex(0)
                                    const res = tempData.filter(d => {
                                        return d.text.toLowerCase().includes(e.target.value.toLowerCase())
                                    })
                                    setData(res)
                                }} type="text"></input>
                        </>
                    </div>
                    <div className="body" style={dropdownStyles.body(show)}>
                        <ul style={dropdownStyles.content}>
                            {
                                data.map((d, index) => {

                                    return (
                                        <ListItem
                                            data-value={d.value}
                                            key={index}
                                            style={{ background: index === currentIndex ? `${dropdownStyles.listitemHover}` : '' }}
                                            onClick={(e) => handleListItemClick(e)}>
                                            {d.text}
                                        </ListItem>
                                    )
                                })
                            }
                        </ul>

                    </div>
                </div>
            }
        </div>
    )
}

const useKeyPress = targetKey => {
    const [keyPressed, setKeyPressed] = useState(false)

    const downHandler = ({ key }) => {
        if (key === targetKey) {
            setKeyPressed(true)
        }
    }

    const upHandler = ({ key }) => {
        if (key === targetKey) {
            setKeyPressed(false)
        }
    }

    useEffect(() => {

    })
}

export default Dropdown
