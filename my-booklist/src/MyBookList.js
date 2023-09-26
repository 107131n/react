import { useState } from "react";

function MyBookList(){

    const [newPl, setNewPl] = useState({title : '', author: '', day : '', content : '', review : ''})
    const [pls, setPls] = useState([]);

    return(
        <>
            <div className='color-nav'>
                <h2 style={{color: 'beige', fontSize:'27px'}}>📚 My Book WishList ✨</h2>
            </div>
            <br/>

            <div>
                <h3>나의 도서 위시리스트</h3>
                <ul>
                        {
                            pls.map((listed) => {
                                return <li className="list" key={listed.id}>
                                            <p>{listed.title}</p>
                                            <p>{listed.author}</p>
                                            <p>{listed.day}</p>
                                        </li>
                            })
                        }
                {/* <thead>
                    <tr>
                        <td>책 제목</td>
                        <td>저자</td>
                        <td>출간일</td>
                    </tr>
                    <tr>
                        <td>우리 대화는 밤새도록 끝이 없지</td>
                        <td>허휘수 , 서솔 저자(글)</td>
                        <td>2023년 08월 25일</td>
                    </tr>
                </thead> */}
                </ul>
            </div>

            <div>
                <h4>새 도서 위시 작성</h4>
                <input type="text"
                        placeholder="제목"
                        onChange={(e) => {
                            setPls({...newPl, title : e.target.value});
                        }}>
                </input><p></p>
                <input type="text"
                        placeholder="저자"
                        onChange={(e) => {
                            setPls({...newPl, author : e.target.value});
                        }}>
                </input><p></p>
                <input type="text"
                        placeholder="출간일"
                        onChange={(e) => {
                            setPls({...newPl, day : e.target.value});
                        }}>
                </input><p></p>
                <textarea 
                        placeholder="줄거리"
                        onChange={(e) => {
                            setPls({...newPl, content : e.target.value});
                        }}>
                </textarea><p></p>
                <textarea 
                        placeholder="리뷰"
                        onChange={(e) => {
                            setPls({...newPl, review : e.target.value});
                        }}>
                </textarea><p></p>

                <button onClick={() => {
                    if(newPl.title && newPl.author && newPl.day && newPl.content && newPl.review){
                        const updateLists = [...pls, {...newPl, id : Date.now()}]
                        setPls(updateLists);
                        setNewPl({title : '', author : '', day : '', content : '', review : ''})
                    }
                }}>올리기</button>

            </div>
        </>
    )
}

export default MyBookList;