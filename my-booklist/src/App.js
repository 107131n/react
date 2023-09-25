import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='color-nav'>
        <h2 style={{color: 'beige', fontSize:'27px'}}>📚 My Book WishList ✨</h2>
      </div>
      <br/>
      <table>
        <thead>
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
        </thead>
      </table>
    </div>
  );
}

export default App;
