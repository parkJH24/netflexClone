import { IoMdSearch, IoMdClose } from "react-icons/io";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
export default function Search() {
    const [searchOpen, setSearchOpen] = useState(false)
    const [keyword, setKeyword] = useState('');
    const [clearBtn, setClearBtn] = useState(false);

    //useref
    const inputRef = useRef(HTMLInputElement)

    const handleInputOpen = () => {
        setSearchOpen((prev) => !prev)
    }
    const handleTextChange = (e) => {
        const value = e.target.value;
        console.log(value)
        setKeyword(value)
        setClearBtn(value.trim() !== "")

        /*trim() 은 문자열에서 앞뒤에 공백을 제거해주는 역할
            !== "" 공백을 다 제거 했을때 공백이 아니라면 true     
             value.trim().length > 0
        */
    }
    const handleClearInput = (e) => {
        e.preventDefault();
        setKeyword('');
        setClearBtn(false);
        // requestAnimationFrame(()=>{
        //     inputRef.current.focus()
        //     // 한 템포 늦출때 실행 위치 1프레임 기준이므로 텀이 거의 보이지는 않음

        // })
        inputRef.current?.blur()// 포커스를 해제후 다시 포커스 걸기 위한 리셋
        setTimeout(() => {
            inputRef.current.focus()
        }, 500)

        // inputRef.current.focus() 즉시 실행 위치

    }
    useEffect(() => {
        if (searchOpen && inputRef.current) {
            inputRef.current.focus()
        }
    }, [searchOpen])
    return (
        <SearchItem>
            <motion.div
                initial={{ width: 30 }}//기본값
                animate={{
                    width: searchOpen ? 300 : 30,
                    border: `solid 1px rgba(255,255,255,${searchOpen ? 1 : 0})`,
                    transition: { duration: 0.5 }
                }}//이벤트로 인해 변경되는 값
            >
                <SearchBtn type='button' onClick={handleInputOpen}>
                    <IoMdSearch />
                </SearchBtn>{/* 검색버튼 */}
                <motion.input
                    ref={inputRef}
                    type="text"
                    initial={{ width: 0 }}
                    animate={{ width: searchOpen ? 250 : 0 }}
                    transition={{ duration: 0.5 }}
                    placeholder="제목, 사람, 장르"
                    value={keyword}
                    onChange={handleTextChange}
                />
                {clearBtn && (
                    <ClearBtn onClick={handleClearInput}>
                        <IoMdClose />
                    </ClearBtn>
                )}
            </motion.div>

        </SearchItem>
    )
}

const SearchItem = styled.div`
    display: flex;
    position: relative;
    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 4px;
        box-sizing: border-box;
        border-radius: 4px;
    }
`
const SearchBtn = styled.button`
    color: #fff;
    font-size: 24px;
    display: flex;
    align-items: center;
    border: none;
    background: transparent;
    cursor: pointer;
`

const ClearBtn = styled.button`
    display: flex;
    color: #fff;
    font-size: 20px;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
`