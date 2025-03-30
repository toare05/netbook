import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section id="main_contents">
      <div className="wrapper">
        <div className="title">   
          <h3 className="main_title">나를 위한 영어 문제집 찾기</h3>
          <h3 className="sub_title">개인 맞춤형 영어 문제집 추천</h3>
        </div>
        <div className="intro">
          <h1>영어 교재 뭐살지 고민이라면</h1>
          <div className="type">
            <ul className="type_list">
              <li>천일문</li>
              <li>어법끝</li>
              <li>첫단추 모의고사</li>
              <li>파워업 모의고사</li>
              <li>기출 프리미엄</li>
            </ul>
          </div>
        </div>
        <div className="button">
          <Link href="/form">
            <button className="strat" type="button">시작하기</button>
          </Link>
        </div>
        <div className="result_data">
          <div className="data_wrap">
            <h3>선택받은 영어 교재</h3>
            <ul>
              <li>어휘 : 0명</li>
              <li>문법·어법 : 0명</li>
              <li>구문 : 0명</li>
              <li>독해 : 0명</li>
              <li>서술형 : 0명</li>
            </ul>
          </div>
        </div>
        <div className="betheu">
          <a href="https://betheu.tistory.com/">
            <Image 
              src="/betheu_logo.png"
              alt="betheu"
              width={150}
              height={150}
              style={{ width: '100%', height: 'auto' }}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
