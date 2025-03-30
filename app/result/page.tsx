'use client'

import Image from 'next/image'

export default function Result() {
  return (
    <section>
      <div className="wrapper">
        <div className="result">
          <div className="titles">
            <h1>당신에게 맞는 영어 문제집은...</h1>
          </div>
          <div className="result_img">
            {/* 결과 이미지 */}
          </div>
          <div className="result_explains">
            {/* 결과 설명 */}
          </div>
          <div className="lectures">
            {/* 추천 강의 */}
          </div>
          <div className="share">
            {/* 공유 버튼 */}
          </div>
          <div className="buttons">
            {/* 버튼들 */}
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
      </div>
    </section>
  )
} 